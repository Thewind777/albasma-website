import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { SiteContent } from '../types';

interface AIChatProps {
    content: SiteContent['ai'];
    isRTL: boolean;
}

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
}

export const AIChat: React.FC<AIChatProps> = ({ content, isRTL }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        const responseText = await sendMessageToGemini(input);

        const botMsg: Message = { id: (Date.now() + 1).toString(), text: responseText, sender: 'bot' };
        setMessages(prev => [...prev, botMsg]);
        setIsLoading(false);
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-50 p-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center`}
                aria-label="Toggle Support Chat"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className={`fixed bottom-24 ${isRTL ? 'left-6' : 'right-6'} w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-100 overflow-hidden animate-fade-in-up`}>
                    {/* Header */}
                    <div className="bg-brand-900 text-white p-4 flex items-center gap-2">
                        <Bot size={20} className="text-brand-accent" />
                        <h3 className="font-semibold">{content.title}</h3>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
                        {messages.length === 0 && (
                            <div className="text-center text-gray-400 text-sm mt-10">
                                <Bot size={48} className="mx-auto mb-2 opacity-50" />
                                <p>{content.placeholder}</p>
                            </div>
                        )}
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                                        msg.sender === 'user'
                                            ? 'bg-brand-600 text-white rounded-br-none'
                                            : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-end">
                                <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                                    <Loader2 className="animate-spin text-brand-600" size={16} />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Disclaimer */}
                    <div className="px-4 py-1 bg-gray-100 text-[10px] text-gray-400 text-center">
                        {content.disclaimer}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="..."
                            className={`flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm ${isRTL ? 'text-right' : 'text-left'}`}
                        />
                        <button
                            onClick={handleSend}
                            disabled={isLoading || !input.trim()}
                            className="p-2 bg-brand-600 text-white rounded-full hover:bg-brand-700 disabled:opacity-50 transition-colors"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};