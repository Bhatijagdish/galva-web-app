import { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Moon, Sun, Monitor } from "lucide-react";
import { openAiAdapter } from "../adapter/openai";
import { AiChat, useAsStreamAdapter } from "@nlux/react";
import "@nlux/themes/nova.css";
import { conversationStarters } from "../data/conversation-starters";
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
  top: -10rem;
  scale: 1.5;
  left: 0.687rem;
  z-index: 1 !important;
  background-image: url('/svg1bubble.svg');
  background-size: cover;
`;
export function Chat() {
  const { setTheme, theme } = useTheme();
  const [conversationIndex, setConversationIndex] = useState(0);
  const [conversations, setConversations] = useState<any[]>([]); // Add appropriate type if known

  const streamAdapter = useAsStreamAdapter(openAiAdapter, []);

  // Placeholder useEffect to simulate fetching past conversations
  useEffect(() => {
    const fetchPastConversations = async () => {
      // Mocked fetch call - replace with actual API call if needed
      const mockConversations = [
        { id: 1, title: "First Conversation", chat: [] },
        { id: 2, title: "Second Conversation", chat: [] },
      ];
      setConversations(mockConversations);
    };

    fetchPastConversations();
  }, []);

  return (

    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <BackgroundDiv/>  <div className="hidden border-y bg-muted/40 md:block z-5">
        <div className="flex h-full max-h-screen flex-col gap-2 z-5 ">
          <div className="flex h-14 items-center bg-muted/90 px-4 lg:h-[60px] lg:px-6">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <Avatar className="rounded-none w-32 h-12">
                <AvatarImage src={"./galva_logo.png"} />
              </Avatar>
            </a>
          </div>
          <div className="flex-1 !visible">
            {/* Placeholder nav - replace with actual navigation if needed */}
            <nav className="grid items-start px-2 text-sm font-medium gap-1 lg:px-4 !visible">
              {conversations.map((val, index) => (
                <a
                  key={`conversation-${val.id}`}
                  className={`${
                    index === conversationIndex ? "!bg-secondary" : "bg-transparent"
                  } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary cursor-pointer hover:bg-secondary `}
                  onClick={() => setConversationIndex(index)}
                >
                  {index === 0 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                  {val.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 bg-muted/90 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium pt-2">
                {conversations.map((val, index) => (
                  <a
                    key={`conversation-${val.id}`}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary cursor-pointer hover:bg-secondary `}
                  >
                    {index === 0 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                    {val.title}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1"></div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="z-5 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="z-5 absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only z-5">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="h-[1.2rem] w-[1.2rem] mr-2" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="h-[1.2rem] w-[1.2rem] mr-2" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("auto")}>
                <Monitor className="h-[1.2rem] w-[1.2rem] mr-2 " />
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
            <button
              id="logoutButton"
              className="bg-red-500 text-white m-4 px-6 py-2 rounded hover:bg-red-600 z-5"
            >
              Logout
            </button>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 z-5 backdrop-blur-[10px] bg-white bg-opacity-10 rounded-3xl shadow-lg border border-white border-solid">
          {conversations.length > 0 && conversations[conversationIndex] ? (
            <AiChat
              className="nlux-AiChat-style"
              adapter={streamAdapter}
              composerOptions={{ placeholder: "How can I help you today?" }}
              initialConversation={conversations[conversationIndex].chat}
              displayOptions={{ colorScheme: theme }}
              // personaOptions={personas[0]}
              conversationOptions={{ conversationStarters }}
            />
          ) : (
            <div>No conversations available.</div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Chat;
