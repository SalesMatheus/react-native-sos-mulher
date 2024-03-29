import React from 'react';
import { StatusBar, useWindowDimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SosButton } from '../../components/SosButton';
import { Background } from '../../components/Background';

import PmdfPng  from '../../assets/logopm.png';

import {
    Container,
    Content,
    Title,
    Message,
    Footer,
} from './styles';

export function Home() {
    const { width } = useWindowDimensions();
    const navigation = useNavigation();

    function handleHelp() {
        navigation.navigate('Chat');
    }

    return (
        <Background>
            <Container>
                <StatusBar 
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                />

                <Content>
                    <Image source={PmdfPng} />
                    <Title>SOS MULHER</Title>

                    <Message>
                        Se estiver em situação{'\n'}
                        de risco  peça ajuda{'\n'}
                        apertando o botão.
                    </Message>
                </Content>

                <Footer>
                    <SosButton title="Pedir ajuda" onPress={handleHelp}/>
                </Footer>
            </Container>
        </Background>
    );
}