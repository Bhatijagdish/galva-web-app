import React from 'react';

interface ChatHeaderProps {
  logoSrc: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ logoSrc }) => {
  return (
    <header className="flex flex-wrap gap-5 justify-between items-center self-stretch max-md:max-w-full">
      <nav className="flex flex-col self-stretch my-auto">
        <div className="flex shrink-0 h-2.5 rounded-md bg-white bg-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
        <div className="flex shrink-0 mt-1.5 h-2.5 rounded-md bg-white bg-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
        <div className="flex shrink-0 mt-1.5 h-2.5 rounded-md bg-white bg-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
      </nav>
      <img loading="lazy" src={logoSrc} alt="Chat logo" className="object-contain shrink-0 self-stretch max-w-full rounded-2xl aspect-[3.5] shadow-[0px_0px_15px_rgba(255,255,255,0.5)] w-[210px]" />
      <div className="flex flex-col self-stretch my-auto">
        <div className="flex flex-col justify-center items-end px-5 py-2 rounded-3xl bg-white bg-opacity-50">
          <div className="flex shrink-0 rounded-2xl h-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.5)] w-[30px]" />
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;