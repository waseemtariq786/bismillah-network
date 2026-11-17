"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Message = {
  id: string;
  sender_id: string;
  recipient_id: string;
  subject: string;
  body: string;
  is_read: boolean;
  created_at: string;
};

export default function MailPage() {
  const [user, setUser] = useState<any>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [tab, setTab] = useState("Inbox");
  const [selected, setSelected] = useState<Message | null>(null);
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(false);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setInitializing(false);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => data.subscription.unsubscribe();
  }, []);

  async function loadMessages(currentUser = user, currentTab = tab) {
    if (!currentUser || currentTab === "Compose") return;

    const column = currentTab === "Sent" ? "sender_id" : "recipient_id";
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .eq(column, currentUser.id)
      .order("created_at", { ascending: false });

    if (error) setNotice(error.message);
    else setMessages(data || []);
  }

  useEffect(() => {
    if (user) loadMessages(user, tab);
  }, [user, tab]);

  async function sendMessage(e: FormEvent) {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    setNotice("");

    try {
      const { data: recipientId, error: findError } = await supabase.rpc(
        "find_user_id_by_email",
        { target_email: to.trim() }
      );

      if (findError) throw findError;
      if (!recipientId) throw new Error("Recipient account not found.");

      if (recipientId === user.id) {
        throw new Error("You cannot send a message to yourself.");
      }

      const { error } = await supabase.from("messages").insert({
        sender_id: user.id,
        recipient_id: recipientId,
        subject: subject.trim(),
        body: body.trim(),
      });

      if (error) throw error;

      setTo("");
      setSubject("");
      setBody("");
      setNotice("Message sent successfully.");
      setTab("Sent");
      setSelected(null);
    } catch (err: any) {
      setNotice(err.message || "Could not send message.");
    } finally {
      setLoading(false);
    }
  }

  async function openMessage(item: Message) {
    setSelected(item);

    if (tab === "Inbox" && !item.is_read) {
      const { error } = await supabase
        .from("messages")
        .update({ is_read: true })
        .eq("id", item.id);

      if (!error) {
        setMessages(old =>
          old.map(m => m.id === item.id ? { ...m, is_read: true } : m)
        );
      }
    }
  }

  async function logout() {
    await supabase.auth.signOut();
    setUser(null);
    setMessages([]);
    setSelected(null);
    setNotice("You have logged out.");
  }

  if (initializing) {
    return <main className="mail-shell"><div className="mail-panel">Loading BISMILLAH MAIL...</div></main>;
  }

  return (
    <main className="mail-shell">
      <div className="mail-container">
        <section className="mail-heading">
          <div>
            <span className="mail-kicker">ONE NETWORK • ONE VISION</span>
            <h1>BISMILLAH <span>MAIL</span></h1>
            <p>Communication within BISMILLAH NETWORK</p>
          </div>
          {user && <button className="mail-button mail-button-outline" onClick={logout}>Logout</button>}
        </section>

        {!user ? (
          <section className="mail-panel mail-welcome">
            <div className="mail-symbol">✉</div>
            <h2>Welcome to BISMILLAH MAIL</h2>
            <p>Sign in or create an account to access your network messages.</p>
            <Link className="mail-button" href="/mail/login">Login / Create Account</Link>
          </section>
        ) : (
          <>
            <div className="mail-account">
              Signed in as <strong>{user.email}</strong>
            </div>

            <nav className="mail-tabs">
              {["Inbox", "Sent", "Compose"].map(item => (
                <button
                  key={item}
                  className={tab === item ? "mail-tab active" : "mail-tab"}
                  onClick={() => {
                    setTab(item);
                    setSelected(null);
                    setNotice("");
                  }}
                >
                  {item === "Compose" ? "+ Compose" : item}
                </button>
              ))}
            </nav>

            <section className="mail-panel">
              {tab === "Compose" ? (
                <>
                  <h2>New Message</h2>
                  <form className="mail-form" onSubmit={sendMessage}>
                    <label>Recipient's registered account email</label>
                    <input
                      type="email"
                      required
                      value={to}
                      onChange={e => setTo(e.target.value)}
                      placeholder="recipient@example.com"
                    />
                    <label>Subject</label>
                    <input
                      required
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      placeholder="Message subject"
                    />
                    <label>Message</label>
                    <textarea
                      required
                      rows={8}
                      value={body}
                      onChange={e => setBody(e.target.value)}
                      placeholder="Write your message..."
                    />
                    <button className="mail-button" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </>
              ) : selected ? (
                <>
                  <button className="mail-back" onClick={() => setSelected(null)}>← Back to {tab}</button>
                  <h2 className="mail-subject">{selected.subject || "(No subject)"}</h2>
                  <p className="mail-meta">
                    {tab === "Inbox" ? "Sender account ID: " : "Recipient account ID: "}
                    {tab === "Inbox" ? selected.sender_id : selected.recipient_id}
                  </p>
                  <p className="mail-meta">{new Date(selected.created_at).toLocaleString()}</p>
                  <div className="mail-message-body">{selected.body}</div>
                </>
              ) : (
                <>
                  <div className="mail-list-heading">
                    <h2>{tab}</h2>
                    <button className="mail-back" onClick={() => loadMessages(user, tab)}>Refresh</button>
                  </div>
                  {messages.length === 0 ? (
                    <p className="mail-empty">No messages yet.</p>
                  ) : (
                    <div>
                      {messages.map(item => (
                        <button className="mail-message-item" key={item.id} onClick={() => openMessage(item)}>
                          <span className="mail-message-title">
                            {item.subject || "(No subject)"}
                            {!item.is_read && tab === "Inbox" && <small>NEW</small>}
                          </span>
                          <span className="mail-preview">{item.body}</span>
                          <span className="mail-meta">{new Date(item.created_at).toLocaleString()}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
              {notice && <p className="mail-notice" role="status">{notice}</p>}
            </section>
          </>
        )}

        <p className="mail-disclaimer">
          Current service: internal messages between registered BISMILLAH NETWORK accounts.
          External Gmail/Outlook email delivery and public email addresses are not enabled.
        </p>
      </div>
    </main>
  );
}
