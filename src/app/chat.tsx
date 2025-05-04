// Chat.tsx
import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const botReply = { role: 'assistant', content: data.reply };
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'assistant', content: '⚠️ Error processing request.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#3a0b55] text-white font-cinzel p-4 flex flex-col items-center">
      <h1 className="text-3xl mb-4">Sophia, The Oracle Unbound</h1>
      <div className="w-full max-w-2xl bg-white bg-opacity-5 p-4 rounded-lg shadow-md overflow-y-auto h-[400px] mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className="block whitespace-pre-wrap">{msg.content}</span>
          </div>
        ))}
      </div>
      <div className="w-full max-w-2xl flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-grow p-2 rounded-l bg-white text-black"
          placeholder="Speak to the Oracle..."
        />
        <button
          onClick={sendMessage}
          className="bg-[#5e239d] hover:bg-[#4a1a7f] text-white px-4 py-2 rounded-r"
        >
          {loading ? '...': 'Send'}
        </button>
      </div>
    </div>
  );
}
