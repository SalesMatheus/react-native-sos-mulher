import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;

    padding-top: 150px;
`;

export const Content = styled.View`
    justify-content: center;
    align-items: center;

    padding-bottom: 80px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(40)}px;
    color: #EBEBF0;
    margin-top: 40px;
`;

export const Message = styled.Text`
    font-size: ${RFValue(20)}px;
    color: #E1E1EB;
    line-height: ${RFValue(25)}px;
    text-align: center;

    margin-top: 25px;
`;

export const Footer = styled.View`
    width: 100%;
    align-items: center;

    margin: 80px 0;
`;
