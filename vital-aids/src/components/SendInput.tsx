import React from 'react';

type SendInputProps = {
  value: string;
  onChange: (newValue: string) => void;
  onSend: () => void;
  placeholder?: string;
  disabled?: boolean;
};

const SendInput: React.FC<SendInputProps> = ({
  value,
  onChange,
  onSend,
  placeholder = 'Make a request',
  disabled = false,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !disabled) {
      onSend();
    }
  };

  return (
    <div
      className="w-full h-[45px] rounded-[20px] p-[1px]"
      style={{
        backgroundImage:
          'linear-gradient(180deg, #002177 0%, #A91125 49%, #CB00DD 100%)',
      }}
    >
      <div className="h-full w-full rounded-[20px] bg-[#f3f4f6] flex items-center px-[22px]">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={disabled}
          className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500"
        />
        <button
          onClick={onSend}
          disabled={disabled}
          className={`ml-3 transition-colors ${
            disabled ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:text-blue-800'
          }`}
          aria-label="Send message"
        >
          {/* Proper Send Icon (Paper Plane) */}
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SendInput;
