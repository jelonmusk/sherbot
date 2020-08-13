import React from "react";

import "./SherbotOptions.css";

//options component that will guide the user to possible options.

const SherbotOptions = (props) => {
    const options = [
        {
            text : "Gaming", 
            handler: props.actionProvider.handleGamingList,
            id:1,
        },
        {
            text : "Web Dev Resources",
            handler:props.actionProvider.handleWebList,
            id:2,
        },
        {
            text : "Chat with Sherbot", 
            handler:props.actionProvider.handleTalkList,
            id:3,
        },
        {
            text : "Sherbot's YT Channels",
            handler:props.actionProvider.handleYTList,
            id:4,
        },
        {
            text : "Sherbot's Fav Music", 
            handler:props.actionProvider.handleMusicList,
            id:5,
        },
    ];


    const optionsMarkup = options.map((option) => (
        <button 
        className="sherbot-option-button"
        key={option.id}
        onClick={option.handler}>
            {option.text}
        </button>
    ));

    return <div className="sherbot-options-container">{optionsMarkup}</div>
};



export default SherbotOptions;