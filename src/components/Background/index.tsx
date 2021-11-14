import React, {ReactNode} from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Container  } from './styles';

type Props = {
    children: ReactNode;
}

export function Background({ children } : Props){

    return(
        <LinearGradient
            colors={['#0A1033', '#3c0e47']}
            style={{flex: 1}}
        >
            {children}
        </LinearGradient>
    )
}