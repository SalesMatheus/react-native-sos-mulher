import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import {
    Container,
    Title,
} from './styles';

interface Props extends RectButtonProps {
    title: string;
}

export function SosButton({title, ...rest}: Props) {
    return (
        <Container {...rest}>
            <Ionicons name="hand-left" size={35} color="white" />
            <Title>{title}</Title>
        </Container>
    );
}