import React from "react";

import { ReactComponent as PandaIcon } from "../assets/panda.svg";

const BotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-container">
        <PandaIcon className="react-chatbot-kit-chat-bot-avatar-icon" />
      </div>
    </div>
  );
};

export default BotAvatar;