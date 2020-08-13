import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import SherbotOptions from "./components/SherbotOptions/SherbotOptions";
import LinkList from "./components/LinkList/LinkList";
import BotAvatar from "./components/BotAvatar";
import TalkLinks from "./components/TalkLinks/TalkLinks";

const config = {
    botName: "Sherbot",
    initialMessages: [
        createChatBotMessage("Hi I'm Sherbot !!!"),
        
        createChatBotMessage("I'm here to help or chat with you. What do you want to go ahead with?", {
            widget: "sherbotOptions",
        }),
      ],             
    //initialMessages property from the config is put into 
    //the chatbot's internal state in a property called "messages"
    
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />,
      },  

    customStyles : {
        botMessageBox : {
            backgroundColor: '#000000',
        },
        chatButton :{
            backgroundColor : '#000000',
        },
    },

    widgets: [
        {
            widgetName: "sherbotOptions",
           widgetFunc: (props) => <SherbotOptions {...props} />,
        },

        {
            widgetName:"gamingLinks",
            widgetFunc:(props)=><LinkList {...props} />,
            props: {
                options:[
                    {
                        text:"Sherbot's Fav : PUBG",
                        url:"https://www.pubg.com/",
                        id:1,
                },
                    {
                        text:"Assassin's Creed Valhalla",
                        url:"https://www.ubisoft.com/en-us/game/assassins-creed/valhalla",
                        id:2,
                    },
                    {
                        text:"Prince of Persia 🤴",
                        url:"https://www.ubisoft.com/en-us/game/prince-of-persia/",
                        id:3,
                    },
                ],
            },
        },

        {
            widgetName:"webLinks",
            widgetFunc:(props)=><LinkList {...props} />,
            props:{
                options:[
                    {
                        text:"Learn Bootstrap",
                        url:"https://getbootstrap.com/docs/4.5/getting-started/introduction/",
                        id:1,
                    },
                    {
                        text:"Learn React",
                        url:"https://reactjs.org/tutorial/tutorial.html",
                        id:2,
                    },
                    {
                        text:"Learn HTML",
                        url:"https://www.w3schools.com/html/default.asp",
                        id:3,
                    },
                    {
                        text:"Learn CSS",
                        url:"https://cssreference.io/",
                        id:4,
                    },
                ],
            },
        },

        {
            widgetName:"ytLinks",
            widgetFunc:(props)=><LinkList {...props} />,
            props:{
                options:[
                    {
                        text:"OSR Review",
                        url:"https://www.youtube.com/channel/UCR4z8ccOWNoUThB4VAMNBTg",
                        id:1,
                    },
                    {
                        text:"CHOCOTACO",
                        url:"https://www.youtube.com/channel/UCSri6c58uWro3kLTlcuFlVA",
                        id:2,
                    },
                    {
                        text:"PBS SPACE TIME",
                        url:"https://www.youtube.com/channel/UC7_gcs09iThXybpVgjHZ_7g",
                        id:3,
                    },
                    {
                        text:"DAVE 2D",
                        url:"https://www.youtube.com/channel/UCVYamHliCI9rw1tHR1xbkfw",
                        id:4,
                    },
                    {
                        text:"JOSHUA VALOUR",
                        url:"https://www.youtube.com/channel/UCx9bOYEjkevIDYONBAstK-A",
                        id:5,
                    },
                ],
            },
        },

        {
            widgetName:"talkLinks",
            widgetFunc:(props)=><TalkLinks {...props} />,
            
        },

        {
            widgetName:"musicLinks",
            widgetFunc:(props)=><LinkList {...props} />,
            props: {
                options:[
                    {
                        text:"Nina Burmi Classical ",
                        url:"https://youtu.be/kfBvz2rG-NI",
                        id:1,
                },
                    {
                        text:"Yosi Horikawa",
                        url:"https://www.youtube.com/watch?v=_iEkGCoB_UE&list=PL-iw--mMCQ3JrQI5HlOGJD3XLndLMTo7S",
                        id:2,
                    },
                    {
                        text:"Muse Simulation Theory",
                        url:"https://www.youtube.com/watch?v=wJcVLxRtDms&list=PLdkbG6kCdZ8P7fnHPG3gnsWgh9u-qKsjQ",
                        id:3,
                    },
                    {
                        text:"Enigma Platinum Collection",
                        url:"https://www.youtube.com/watch?v=Jdn1j86xDdY&list=PL2sPxDN9Hp0oK0EahHN-JBUm0Fr3FfGE1",
                        id:4,
                    },
                    {
                        text:"Coke Studio Quarantine Playlist",
                        url:"https://www.youtube.com/watch?v=kw4tT7SCmaY&list=PLlYsrzDvIU9QhMdfnJCrPS9XGtxJV0yIu",
                        id:5,
                    },
                ],
            },
        },
        
    ],
}

export default config;