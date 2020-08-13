//links to know more about sherbot

import React from 'react';
import './TalkLinks.css';


const TalkLinks=(props)=>{

    const questions = [
        { 
            text : "What do you love to do in your life", 
            handler: props.actionProvider.handleTalkList1,
            id:1,
        },
        { 
            text:"What's your fav music genre?",
            handler:props.actionProvider.handleTalkList2,
            id:2,
        },
        { 
            text:"What inspires you?",
            handler:props.actionProvider.handleTalkList3,
            id:3,
        },
        { 
            text:"Where do you live?",
            handler:props.actionProvider.handleTalkList4,
            id:4,
        },
    ];

    const talkMarkup = questions.map((link)=>(
        <button key={link.id} 
        className="talk-links-button"
            onClick={link.handler}>
                {link.text}
            </button>
    ));
    
    return <div className="talk-links-container">{talkMarkup}</div>
};
export default TalkLinks;