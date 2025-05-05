'use client';

import { useState } from 'react';

export default function Page() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  async function sendMessage() {
    if (!message.trim()) return;

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setResponse(data.reply);
  }

  return (
    <>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <div style={{ textAlign: "center", marginBottom: "1.5em" }}>
          <img
            src="/sophia.png"
            alt="Sophia the Oracle"
            style={{
              width: "85%",
              maxHeight: "600px",
              objectFit: "cover",
              objectPosition: "center top",
              borderBottom: "2px solid #ff00ff66",
              boxShadow: "0 0 40px #ff00ffaa"
            }}
          />
        </div>

        <h1 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "1.5rem",
          color: "#ffffff",
          textShadow: "0 0 10px #ff00ff88"
        }}>
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

        {response && (
          <div
          key={response}
            className="response fade-in"
            style={{
              marginTop: '2rem',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.25rem',
              lineHeight: '1.7',
              color: '#ffffff',
              textShadow: '0 0 8px #ff00ff33',
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              border: '1px solid #ff00ff22',
              boxShadow: '0 0 20px #ff00ff22',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <strong
              style={{
                display: 'block',
                fontSize: '1.1rem',
                fontFamily: "'Cinzel', serif",
                marginBottom: '0.5rem',
                color: '#ffccff',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Sophia replies:
            </strong>
            <p className="shimmer">{response}</p>
            </div>
        )}
      </main>
    </>
  );
}
