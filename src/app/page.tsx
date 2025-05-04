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
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1> Oracle Unbound: Sophia Chat</h1>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask Sophia anything..."
        rows={4}
        style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
      />

      <button
        onClick={sendMessage}
        style={{
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Send
      </button>

      {response && (
        <div className="response">
        <strong>Sophia replies:</strong>
        <p>{response}</p>
      </div>
      
      )}
    </main>
  );
}
