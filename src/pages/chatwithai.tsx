
// import React, { useState } from "react";

// const ChatWithAI: React.FC = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);

//   const toggleChat = () => {
//     setIsChatOpen(!isChatOpen);
//   };

//   return (
//     <div>
//       {/* Chat Button */}
//       <button
//         onClick={toggleChat}
//         className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-purple-300 z-50"
//       >
//         <span>💬</span>
//         <span>Chat with AI</span>
//       </button>

//       {/* Chat Card */}
//       {isChatOpen && (
//         <div className="fixed bottom-16 right-4 bg-gradient-to-br from-white to-gray-50 w-80 h-96 rounded-xl shadow-xl border border-gray-200 flex flex-col z-50">
//           {/* Chat Header */}
//           <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded-t-xl flex justify-between items-center">
//             <h3 className="font-bold">AI Assistant</h3>
//             <button
//               onClick={toggleChat}
//               className="text-white hover:text-gray-300"
//             >
//               ✖
//             </button>
//           </div>

//           {/* Chat Body */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-2">
//             <div className="bg-gray-100 p-2 rounded-lg text-sm shadow-sm">
//               Hello! How can I assist you today?
//             </div>
//             {/* Chat messages can be dynamically added here */}
//           </div>

//           {/* Chat Input */}
//           <div className="p-2 border-t bg-gray-50">
//             <input
//               type="text"
//               placeholder="Type your message..."
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWithAI;

// import { Webchat, WebchatProvider, useClient } from '@botpress/webchat';
// const clientId = 'f6aa57b6-4a0c-4f70-8e47-654b64d54499'; 


// Botpress Webchat Component
// const BotpressWebchat = () => {
//   const client = useClient({ clientId });

//   return (
//     <WebchatProvider client={client} >
//       <Webchat />
//     </WebchatProvider>
//   );
// };

// import { Webchat, WebchatProvider, useClient } from '@botpress/webchat';
// import { useState } from 'react';

// const clientId = 'f6aa57b6-4a0c-4f70-8e47-654b64d54499'; // Your Botpress client ID

// const BotpressWebchat = () => {
//   const [isOpen, setIsOpen] = useState(false); // State to toggle chat visibility
//   const client = useClient({ clientId });

//   const toggleChat = () => {
//     setIsOpen(!isOpen); // Toggle chat visibility
//   };

//   return (
//     <div className="relative">
//       {/* Button to toggle chat */}
//       <button
//         className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none transition-all duration-300 flex items-center justify-center"
//         onClick={toggleChat}
//       >
//         {/* Chat emoji */}
//         <span className="text-xl mr-2">💬</span> 
//         {isOpen ? 'Close Chat' : 'Chat with us'}
//       </button>

//       {/* Conditionally render Webchat card */}
//       {isOpen && (
//         <div className="fixed bottom-20 right-5 w-full max-w-md h-[500px] sm:w-[350px] bg-white rounded-lg shadow-lg overflow-hidden z-50 animate-fadeIn">
//           <WebchatProvider client={client}>
//             <Webchat />
//           </WebchatProvider>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BotpressWebchat;
import { Webchat, WebchatProvider, useClient } from '@botpress/webchat';
import { useState } from 'react';

const clientId = 'f6aa57b6-4a0c-4f70-8e47-654b64d54499'; // Your Botpress client ID

const ChatWebchat = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle chat visibility
  const client = useClient({ clientId });

  const toggleChat = () => {
    setIsOpen(!isOpen); // Toggle chat visibility
  };

  return (
    <div className="relative">
      {/* Button to toggle chat */}
      <button
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full border-2 border-blue-600 hover:bg-blue-700 focus:outline-none transition-all duration-300 flex items-center justify-center"
        onClick={toggleChat}
      >
        {/* Chat emoji */}
        <span className="text-xl mr-2">💬</span>
        {isOpen ? 'Close Chat' : 'Chat with us'}
      </button>

      {/* Conditionally render Webchat card */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-full max-w-md h-[500px] sm:w-[350px] bg-white rounded-lg shadow-lg overflow-hidden z-50 animate-fadeIn">
          <WebchatProvider client={client}>
            <Webchat />
          </WebchatProvider>
        </div>
      )}
    </div>
  );
};

export default ChatWebchat;
