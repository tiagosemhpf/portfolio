import styled from 'styled-components'

import { Props } from './index'

export const P = styled.p<Props>`
    font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
    color: ${(props) =>
        props.tipo === 'principal'
            ? props.theme.corPrincial
            : props.theme.corSecundaria};
    line-heigth: 22px;
`
