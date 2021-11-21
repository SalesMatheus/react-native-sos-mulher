import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

import { Background } from '../../components/Background';
import { OrderBot } from '../../util';

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
}

export function Chat() {
  const [messages, setMessages] = useState<MessageProps[]>([]);

  let orderMessages = 0;
  useEffect(() => {
    setTimeout(() => {
      setMessages([
        {
          _id: 1,
          text: 'Polícia Militar. Qual a sua emergência?',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'Polícia Militar',
            avatar: 'https://w7.pngwing.com/pngs/261/536/png-transparent-computer-icons-avatar-police-officer-avatar-heroes-fictional-character-army-officer.png',
          },
        },
      ])
    }, 1000);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));

    let arrayMessage = OrderBot(orderMessages);
    setTimeout(() => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, arrayMessage));
    }, 2000);
    orderMessages += 1;
  }, []);

  return (
    <Background>
      <Container>
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 2,
            }}
        />
      </Container>
    </Background>
  )
}
