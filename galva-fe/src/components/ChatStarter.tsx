import React from 'react';
import styled, { keyframes } from 'styled-components';
import ChatHeader from './Header';
import ChatOptionsContainer from './ChatOptionsContainer';
import './styles/dashboard.css';
const bubbleBackground = keyframes`
  0% { background-image: url('/svg1bubble.svg'); }
  25% { background-image: url('/svg2bubble.svg'); }
  50% { background-image: url('/svg3bubble.svg'); }
  75% { background-image: url('/svg4bubble.svg'); }
  100% { background-image: url('/svg1bubble.svg'); }
`;

const BackgroundDiv = styled.div`
  width: 124.5rem;
  height: 97.5rem;
  position: absolute;
  margin: 0;
  position: fixed;
  scale: 1.5;
  top: 0rem;
  left: 0.687rem;
  z-index: 0;
  animation: ${bubbleBackground} 20s infinite;
  background-size: cover;
`;

const ChatPage: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col">
      <BackgroundDiv/>
      <section className="flex flex-col items-center px-8 pt-5 pb-80 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <ChatHeader logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4bae0462f34595e9ea3cece75b5292ce13a3489fed4bdff8c86df345cded1df9?placeholderIfAbsent=true&apiKey=e47b9e1476b3437d80658169a47898ce" />
        <h1 className="mt-36 text-[3.5rem] text-black text-opacity-60 mq950:mt-10 mq950:text-[1.5rem] mq450:text-[1rem] z-5">
          START A NEW CHAT
        </h1>
        <ChatOptionsContainer />
      </section>
    </main>
  );
};

export default ChatPage;