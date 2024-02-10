"use client";
import { useState, useEffect, useRef } from "react";
import {
  IoChatboxEllipsesOutline,
  IoImageOutline,
  IoSend,
} from "react-icons/io5";
import { useSocketContext } from "@/context/socket";

export default function PageContent() {
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <div className="h-screen w-screen flex gap-4 p-4 bg-white">
      {/* left */}
      <div className="w-full h-full flex flex-col gap-4">
        {/* header */}
        <header className="h-[60px] flex items-center px-3 bg-gray-100 border rounded-xl">
          <nav className="w-full flex items-center justify-end">
            <div className="mr-auto">
              <h1 className="font-semibold"> InterrVU. </h1>
            </div>
            <button
              className={`p-2 rounded-lg bg-blue-100 hover:bg-blue-200 ${isSidebar ? "text-blue-800" : "text-black"}`}
              onClick={() => setIsSidebar(!isSidebar)}
            >
              <IoChatboxEllipsesOutline size={20} />
            </button>
          </nav>
        </header>
        {/* videos container */}
        <div className="relative h-[calc(100vh-60px-48px)]">
          {/* stranger video screen */}
          <div className="h-full w-full overflow-hidden bg-gray-100 border border-gray-300 rounded-xl">
            <VideoPlayer src="https://www.w3schools.com/tags/movie.mp4" />
          </div>
          {/* my video screen */}
          <div className="overflow-hidden w-[320px] h-[200px] absolute bottom-4 right-4 bg-gray-100 border border-gray-300 rounded-xl  shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <VideoPlayer src="https://www.w3schools.com/tags/movie.mp4" />
          </div>
        </div>
      </div>

      {/* right */}
      <div
        className={`h-full overflow-hidden ${isSidebar ? "w-[520px] " : "w-0"} transition-all duration-300`}
      >
        <div className="h-full w-full flex flex-col bg-gray-100 border rounded-xl">
          <ChatHeader />
          <ChatMain />
          <ChatFooter />
        </div>
      </div>
    </div>
  );
}

function VideoPlayer({ src }) {
  return (
    <video className="h-full w-full object-cover" src={src} autoPlay></video>
  );
}

function ChatHeader() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold"> View Messages </h2>
    </div>
  );
}

function ChatMain() {
  const { chatList } = useSocketContext();
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat container when chatList changes
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatList]);

  return (
    <div className="h-full p-4 overflow-y-auto" ref={chatContainerRef}>
      <div className="h-full flex flex-col">
        {chatList.map((item, index) => (
          <ChatMessage
            key={item.id}
            type={item.type}
            text={item.text}
            prevType={index != 0 ? chatList[index - 1].type : null}
          />
        ))}
      </div>
    </div>
  );
}

function ChatMessage({ id, type, prevType, text }) {
  return (
    <div
      className={`flex ${type === "sent" ? "justify-end" : "justify-start"} ${prevType != type ? "mt-4" : "mt-2"} first:mt-auto`}
    >
      <div
        className={`text-sm px-4 py-2 ${type === "sent" ? "bg-gray-200" : "bg-white"} rounded-lg`}
      >
        <div> {text} </div>
      </div>
    </div>
  );
}

function ChatFooter() {
  const [text, setText] = useState("");
  const { chatList, setChatList } = useSocketContext();

  const handleMessageSend = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }

    setChatList([
      ...chatList,
      {
        id: chatList.length + 1,
        text,
        type: "sent",
      },
    ]);
    setText("");
  };

  return (
    <div className="p-4">
      <form
        className="flex items-center p-2 bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)]"
        onSubmit={handleMessageSend}
      >
        <button className="p-2 rounded-lg hover:bg-gray-200">
          <IoImageOutline size={24} />
        </button>
        <input
          type="text"
          className="w-full border-none outline-none py-3 px-4 pl-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="py-3 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          <IoSend size={24} />
        </button>
      </form>
    </div>
  );
}
