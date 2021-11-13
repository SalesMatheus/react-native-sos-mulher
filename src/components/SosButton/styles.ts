import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 150px;
    height: 150px;

    background-color: #DC1637;

    align-items: center;
    justify-content: center;
    border-radius: 75px;
`;

export const Title = styled.Text`
    color: #E1E1EB;
    font-size: ${RFValue(18)}px;
    margin-top: 10px;
`;