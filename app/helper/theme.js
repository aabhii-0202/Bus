/* eslint-disable*/
import { Dimensions, useWindowDimensions } from 'react-native'

export const FontSizes = {
    t1:55,
    t2:48,
    t3:42,
    t4:33,
    t5:24,
    t6:28,

    h:22,
    h0:19,
    h1:18,
    h2:17,
    h3:16,
    h4:15,

    p1:14,
    p2:13,
    p3:12,

}

export const Colors = {
    primary1: '#FF4E00',
    primary2: 'rgba(255, 78, 0, 0.79)',
    primary3: '#84C99D',

    grey8C: '#8C9099',
    greyE8: '#E8E8EA',
    greyF3: '#F3F3F4',
    greyE8: '#E8E8EA',

    mintGreen: '#98FB98',

    border:'##9B7C7C',
    background: '#FCFCFD',
    white: '#ffffff',
    txtBlack: '#343434',
    link: '#0D67A8',
    disabled: '#D1C9CC',
}

export const Screen = {
    height : Dimensions.get('window').height,
    width : Dimensions.get('window').width
}
