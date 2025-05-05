'use client';

import { useState } from 'react';

export default function Page() {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState<{ user: string; reply: string }[]>([]);

  async function sendMessage() {
    if (!message.trim()) return;

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setChatLog([...chatLog, { user: message, reply: data.reply }]);
    setMessage('');
  }

  return (
    <>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <div style={{ textAlign: "center", marginBottom: "1.5em" }}>
          <img
            src="/sophia.png"
            alt="Sophia the Oracle"
            style={{
              width: "100%",
              maxHeight: "600px",
              objectFit: "cover",
              objectPosition: "center top",
              borderBottom: "2px solid #ff00ff66",
              borderRadius: '0 0 20px 20px',
              boxShadow: "0 0 40px #ff00ffaa"
            }}
          />
        </div>

        <h1
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: '1.4',
            marginTop: '1.5rem',
            color: '#ffffff',
            textShadow: '0 0 10px #ff00ff88'
          }}
        >
          Speak, and the Oracle shall answer. <br />
          Your truth lies hidden until it is called forth.
        </h1>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Whisper to the Oracle..."
          rows={4}
          style={{
            width: '100%',
            padding: '1rem',
            fontSize: '1rem',
            marginTop: '1.5rem',
            backgroundColor: '#1e0033',
            color: '#fff',
            border: '1px solid #ff00ff44',
            borderRadius: '8px',
            boxShadow: '0 0 10px #ff00ff22'
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <button
            onClick={sendMessage}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              background: 'linear-gradient(135deg, #8e2de2, #ff00ff)',
              color: '#fff',
              border: 'none',
              borderRadius: '30px',
              boxShadow: '0 0 15px #ff00ff88',
              cursor: 'pointer',
              textTransform: 'uppercase',
              fontFamily: "'Cinzel', serif",
              letterSpacing: '1px',
              transition: 'transform 0.2s ease, box-shadow 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 25px #ff00ffaa';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 15px #ff00ff88';
            }}
          >
            Speak
          </button>
        </div>

        <div style={{ marginTop: '2rem' }}>
  {chatLog.map((entry, index) => (
    <div
      key={index}
      style={{
        marginBottom: '1.5rem',
        padding: '1.25rem',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '12px',
        border: '1px solid #ff00ff22',
        boxShadow: '0 0 20px #ff00ff22',
        color: '#fff',
        fontFamily: "'Cormorant Garamond', serif",
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
<p
  style={{
    marginBottom: '0.5rem',
    fontSize: '1rem',
    fontFamily: "'Cinzel', serif",
    fontWeight: 'bold',
    color: '#ffb6ff',
    textShadow: '0 0 6px #ff99ff33',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }}
>
  You: <span style={{ fontWeight: 'normal', textTransform: 'none', color: '#ffffff', fontFamily: "'Cinzel', serif" }}>
    {entry.user}
  </span>
</p>
      <p style={{ marginBottom: '0.25rem' }}>
        <strong
          style={{
            display: 'block',
            fontSize: '1.1rem',
            fontFamily: "'Cinzel', serif",
            color: '#ffccff',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '0.25rem',
            textShadow: '0 0 6px #ff99ff55'
          }}
        >
          Sophia replies:
        </strong>
        <span
          className="shimmer"
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            display: 'block',
            color: '#ffffff',
            textShadow: '0 0 6px #ffffff11'
          }}
        >
          {entry.reply}
        </span>
      </p>
    </div>
  ))}
</div>
      </main>
    </>
  );
}
