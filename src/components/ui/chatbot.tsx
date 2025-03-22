
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

type Message = {
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const initialMessages = [
  {
    content: "Hello! I'm EJ EWEKE Legal Assistant. How can I help you with your legal inquiries today?",
    sender: 'bot' as const,
    timestamp: new Date(),
  },
];

const legalResponses = [
  {
    keywords: ['corporate', 'business', 'company', 'incorporation'],
    response: "Our Corporate Law team specializes in business incorporation, compliance, mergers & acquisitions, and corporate governance under Nigerian law. Would you like to schedule a consultation with one of our corporate attorneys?",
  },
  {
    keywords: ['litigation', 'lawsuit', 'sue', 'court', 'case'],
    response: "Our litigation team represents clients in Nigerian courts at all levels. We handle commercial disputes, civil litigation, and arbitration. Can you provide more details about your case?",
  },
  {
    keywords: ['property', 'real estate', 'land', 'lease', 'tenant'],
    response: "Our Real Estate practice covers property acquisition, lease agreements, title verification, and land disputes under Nigerian property law. Would you like specific information about a real estate matter?",
  },
  {
    keywords: ['family', 'divorce', 'custody', 'marriage'],
    response: "Our Family Law practice handles divorce, child custody, spousal support, and adoption matters with sensitivity and expertise in Nigerian family law. Would you like to discuss your situation with a family law specialist?",
  },
  {
    keywords: ['appointment', 'schedule', 'meet', 'consultation'],
    response: "You can schedule a consultation through our online booking system. Please provide your preferred date and time, and our team will confirm your appointment. Would you like me to guide you to our appointment scheduler?",
  },
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
    } else {
      setIsMinimized(!isMinimized);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const findResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    for (const item of legalResponses) {
      if (item.keywords.some(keyword => lowercaseMessage.includes(keyword))) {
        return item.response;
      }
    }
    
    return "I'd be happy to assist with your inquiry. For specific legal advice on Nigerian law, it would be best to schedule a consultation with one of our attorneys. Would you like me to help you book an appointment?";
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    const userMessage = {
      content: input,
      sender: 'user' as const,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = {
        content: findResponse(input),
        sender: 'bot' as const,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Icon */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-50 transition-all duration-300 ${
          isOpen ? 'bg-accent text-offwhite scale-0 opacity-0' : 'bg-accent text-offwhite scale-100 opacity-100'
        }`}
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-80 sm:w-96 bg-offwhite rounded-lg shadow-lg z-50 overflow-hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        } ${isMinimized ? 'h-16' : 'max-h-[32rem]'}`}
      >
        {/* Chat Header */}
        <div className="bg-charcoal text-offwhite p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5" />
            <h3 className="font-medium">Legal Assistant</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={toggleChat} className="text-offwhite hover:text-cream transition-colors">
              {isMinimized ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            <button onClick={closeChat} className="text-offwhite hover:text-cream transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Chat Messages */}
        {!isMinimized && (
          <>
            <div className="p-4 h-80 overflow-y-auto bg-white">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-accent text-offwhite rounded-tr-none'
                        : 'bg-cream text-dark rounded-tl-none'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="bg-cream text-dark rounded-lg rounded-tl-none p-3 max-w-[80%]">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-bluegray rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-bluegray rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-bluegray rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat Input */}
            <div className="p-4 border-t border-cream bg-offwhite">
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={input}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} className="bg-accent hover:bg-accent-dark text-offwhite">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-2 text-xs text-bluegray text-center">
                This is an AI assistant for general information only. For legal advice, please consult with our attorneys.
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Chatbot;
