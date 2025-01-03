import { marked } from "marked";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  messageVariants,
  greetingVariants,
} from "@/lib/animationVariants";

export default function ChatbotAI() {
  const renderer = new marked.Renderer();

  renderer.code = ({ text, lang }) => {
    const languageClass = lang ? `language-${lang}` : "";
    return `<pre class="p-1.5 overflow-auto"><code class="${languageClass} text-slate-700 whitespace-pre-wrap break-words text-xs">${text}</code></pre>`;
  };

  // Personalizzazione dei link
  renderer.link = ({ href, text }) =>
    `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-indigo-900 no-underline transition duration-150 ease-in-out hover:text-black hover:underline inline-flex items-center border border-indigo-300 rounded-md px-1.5 py-0.5 shadow-sm">
      ${text}
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>`;

  marked.setOptions({ renderer });

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    setInput,
    setMessages,
  } = useChat();

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      const scrollToBottom = () => {
        chatContainerRef.current!.scrollTo({
          top: chatContainerRef.current!.scrollHeight,
          behavior: "smooth",
        });
      };

      setTimeout(scrollToBottom, 100);
    }
  }, [messages]);

  const handleButtonClick = (text: string) => {
    setInput(text);
  };

  const isDisabled = isLoading || input.trim() === "";

  const handleSubmitWrapper = (event: React.FormEvent) => {
    event.preventDefault();
    if (input.trim() === "") return;

    handleSubmit();
    setInput(""); // Reset del campo input
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <div className="flex h-[600px] flex-col text-sm">
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto rounded-lg border border-body/20 bg-white shadow-lg p-6"
      >
        <AnimatePresence initial={false} mode="popLayout">
          {messages.map((m) => (
            <motion.div
              key={m.id}
              variants={messageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} mb-3`}
            >
              <div
                className={`${
                  m.role === "user" ? "rounded-full bg-blue-100 text-blue-700" : "rounded-full bg-green-100 text-emerald-700"
                } max-w-2xl rounded-lg px-4 py-2 shadow-md`}
              >
                <div dangerouslySetInnerHTML={{ __html: marked(m.content) }} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {messages.length === 0 && (
            <motion.div
              variants={greetingVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mb-3 flex justify-start"
            >
              <div className="max-w-2xl rounded-lg bg-green-100 px-4 py-2 shadow-md text-emerald-700">
                Sono l'assistente virtuale del Knowledge Hub di Sviluppo Sistemi. Chiedimi quello che vuoi!
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex w-full justify-between gap-4 pt-4 text-xs">
        <button
          onClick={() => handleButtonClick("Cosa contiene il Knowledge Hub?")}
          className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 transition duration-300 ease-in-out md:hover:scale-95 md:hover:bg-gray-200 md:hover:text-gray-900"
          disabled={isLoading}
        >
          Cosa contiene il Knowledge Hub?
        </button>
        <button
          onClick={() => handleButtonClick("Che documenti trovo nel sito?")}
          className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 transition duration-300 ease-in-out md:hover:scale-95 md:hover:bg-gray-200 md:hover:text-gray-900"
          disabled={isLoading}
        >
          Che documenti trovo nel sito?
        </button>
        <button
          onClick={() => handleButtonClick("Parlami delle applicazioni SST")}
          className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 transition duration-300 ease-in-out md:hover:scale-95 md:hover:bg-gray-200 md:hover:text-gray-900"
          disabled={isLoading}
        >
          Parlami delle applicazioni SST
        </button>
      </div>

      <form onSubmit={handleSubmitWrapper} className="flex-none pt-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className={`flex-1 rounded-l-md border border-r-0 border-body/20 bg-white px-4 py-3 placeholder:text-body/50 focus:outline-none focus:ring-0 active:focus:outline-none shadow-sm ${
              isLoading ? "cursor-not-allowed" : "cursor-auto"
            }`}
            placeholder="Chiedimi qualcosa!"
          />
          <button
            type="submit"
            disabled={isDisabled}
            aria-label="Send message"
            name="send message"
            className="rounded-r-md border border-l-0 border-body/20 px-4 py-2 bg-black text-white hover:bg-green-600 focus:outline-none focus:ring-0 active:focus:outline-none shadow-md transition duration-300 ease-in-out"
          >
            Invia
          </button>
          <button
            onClick={handleClearChat}
            className="ml-2 rounded-md bg-black px-3 py-2 text-xs text-white transition duration-300 ease-in-out hover:bg-red-600"
          >
            Clear Chat
          </button>
        </div>
      </form>
    </div>
  );
}
