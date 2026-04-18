import React, { useState, useRef, useEffect } from "react";
import {
  FiX,
  FiSend,
  FiCpu,
} from "react-icons/fi";
import { FaRobot } from "react-icons/fa6";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text:
        "Hi, I'm Harshita's AI assistant. Ask me about skills, projects, education or contact info.",
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatBodyRef = useRef(null);

  /* AUTO SCROLL */
  useEffect(() => {
    chatBodyRef.current?.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  /* ================= RESPONSES ================= */
  const getResponse = (msg) => {
    const m = msg.toLowerCase();

    if (m.includes("skill") || m.includes("tech"))
      return `Skills:

• React, JavaScript, Tailwind
• Node.js, Express, MySQL
• Git & GitHub
• Responsive UI Design

Always learning new technologies`;

    if (m.includes("project"))
      return `Projects:

1. Personal Portfolio (React)
2. MiniVerse - All in One Mini Apps Hub
3. Task Manager

Check the Projects section for details!`;

    if (m.includes("education") || m.includes("degree"))
      return `Education:

MCA — SGSITS Indore (2025)
BSc Computer Science — Ratlam

Focused on full-stack development.`;

    if (m.includes("contact") || m.includes("email"))
      return `Contact:

harshita.sharma.thandla@gmail.com
LinkedIn available in Contact section.`;

    if (m.includes("hire") || m.includes("available"))
      return `Yes! I'm actively looking for Full Stack Developer opportunities and internships.`;

    if (m.includes("hi") || m.includes("hello"))
      return "Hello! What would you like to know about me?";

    return `You can ask about:

• Skills
• Projects
• Education
• Contact
• Availability`;
  };

  /* SEND MESSAGE */
  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setMessages((p) => [...p, { text: userMsg, isUser: true }]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((p) => [
        ...p,
        { text: getResponse(userMsg), isUser: false },
      ]);
    }, 700);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  /* ================= UI ================= */
  return (
    <>
      {/* TOGGLE BUTTON */}
      {!isOpen && (
        <button
  onClick={() => setIsOpen(true)}
  className="fixed bottom-6 right-6 w-16 h-16 rounded-full 
  bg-gradient-to-br from-cyan-400 to-cyan-600 
  text-black flex items-center justify-center 
  shadow-[0_0_25px_rgba(6,182,212,0.6)] 
  hover:scale-110 hover:shadow-[0_0_35px_rgba(6,182,212,0.9)]
  transition-all duration-300 z-50 group"
>
  <FaRobot size={26} className="group-hover:rotate-12 transition" />
</button>
      )}

      {/* CHAT WINDOW */}
      <div
        className={`fixed bottom-6 right-6 w-[360px] max-w-[92vw] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-50 overflow-hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FiCpu className="text-cyan-500" />
            <h3 className="text-sm font-semibold text-white">
              AI Assistant
            </h3>
          </div>

          <button onClick={() => setIsOpen(false)}>
            <FiX className="text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* MESSAGES */}
        <div
          ref={chatBodyRef}
          className="h-[380px] overflow-y-auto p-4 space-y-3 bg-slate-950"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-xl text-sm whitespace-pre-line max-w-[80%] ${
                  msg.isUser
                    ? "bg-[#06b6d4] text-white"
                    : "bg-slate-900 border border-slate-800 text-gray-300"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="text-gray-400 text-xs">
              Assistant typing...
            </div>
          )}
        </div>

        {/* INPUT */}
        <div className="flex gap-2 border-t border-slate-800 p-3 bg-slate-900">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask something..."
            className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
          />

          <button
            onClick={handleSend}
            className="px-3 rounded-lg bg-[#06b6d4] hover:bg-[#06b6d4] text-black flex items-center"
          >
            <FiSend size={16} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;