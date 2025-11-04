interface ChatBubbleProps {
  type: 'bot' | 'user';
  message: string;
  time: string;
  buttons?: string[];
}

const ChatBubble = ({ type, message, time, buttons }: ChatBubbleProps) => {
  const isBot = type === 'bot';

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-[80%] ${isBot ? 'order-1' : 'order-2'}`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isBot
              ? 'bg-gradient-to-br from-spider-cyan/80 to-blue-600 text-white'
              : 'bg-gray-700 text-white'
          }`}
        >
          <p className="whitespace-pre-line text-sm leading-relaxed">{message}</p>
        </div>

        {buttons && (
          <div className="flex gap-2 mt-2 flex-wrap">
            {buttons.map((btn, i) => (
              <button
                key={i}
                className="px-4 py-2 bg-spider-cyan/20 border border-spider-cyan/50 text-spider-cyan rounded-lg text-sm hover:bg-spider-cyan/30 transition-all"
              >
                {btn}
              </button>
            ))}
          </div>
        )}

        <div className={`text-xs text-gray-500 mt-1 ${isBot ? 'text-left' : 'text-right'}`}>
          {time}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
