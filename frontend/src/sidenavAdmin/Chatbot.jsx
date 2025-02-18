import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your AI assistant. How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);
  const navigate = useNavigate();

  const faqResponses = {
    "how do i schedule an appointment": "You can book an appointment from the 'Appointments' section.",
    "how can i view my reports": "You can find your reports under 'My Profile' > 'Medical Records'.",
    "how to contact support": "You can contact support at +123-456-7890 or email us at support@hospital.com.",
    "what are the hospital timings": "The hospital is open from 8 AM to 8 PM, Monday to Saturday.",
    "can i reschedule my appointment": "Yes, go to 'Appointments' and select the reschedule option.",
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const lowerCaseInput = input.toLowerCase();
      const botResponse =
        faqResponses[lowerCaseInput] ||
        "I'm sorry, I didn't understand that. Please contact support for further assistance.";

      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    }, 1000);

    setInput("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-screen w-full flex flex-col bg-gray-100">
      {/* Chat Header */}
      <div className="bg-blue-600 text-white text-center py-4 text-xl font-bold">
        Customer Care AI Chatbot
      </div>

      {/* Chat Window */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-2`}
          >
            <div
              className={`p-3 max-w-xs rounded-lg shadow-md ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Box and Buttons */}
      <div className="p-4 bg-gray-300 flex border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-2 bg-gray-400 placeholder-black  border rounded-lg focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
        <button
          onClick={() => navigate("/admindashboard")}
          className="ml-2 bg-green-500 text-white px-2 py-2 rounded-lg hover:bg-gray-600"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
