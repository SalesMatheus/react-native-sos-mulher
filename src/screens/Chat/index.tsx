import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

import {
    Container
} from './styles';

interface MessageProps {
    _id: number;
    text: string;
    createdAt: Date;
    user: {
      _id: number;
      name: string;
      avatar: string;
    };
    quickReplies?: QuickReplies
}

interface Reply {
    title: string
    value: string
    messageId?: any
}

interface QuickReplies {
    type: 'radio' | 'checkbox'
    values: Reply[]
    keepIt?: boolean
}
  

export function Chat() {
  const [messages, setMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Polícia Militar. Em que posso ajudar?',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Polícia Militar',
          avatar: 'https://w7.pngwing.com/pngs/261/536/png-transparent-computer-icons-avatar-police-officer-avatar-heroes-fictional-character-army-officer.png',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    
    if(messages[0].text){
        setMessages(previousMessages => GiftedChat.append(previousMessages, [
            {
              _id: Math.random(),
              text: 'Necessita que uma viatura vá até você?',
              createdAt: new Date(),
              user: {
                _id: 1,
                name: 'Polícia Militar',
                avatar: 'https://w7.pngwing.com/pngs/261/536/png-transparent-computer-icons-avatar-police-officer-avatar-heroes-fictional-character-army-officer.png',
              },
            },
          ]))
    }
  }, [])

  const OnQuickReply = useCallback((quickReplies = []) => {
    // setMessages(previousMessages => GiftedChat.append(previousMessages, quickReplies))
    console.log(quickReplies)
  }, [])
  return (
    <Container>
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            onQuickReply={quickReplies => OnQuickReply(quickReplies)}
            user={{
                _id: 2,
            }}
        />
    </Container>

  )
}
