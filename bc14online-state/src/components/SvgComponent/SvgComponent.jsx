import React from 'react';
import Svg from 'assets/svgs/folder-svgrepo-com.svg';

const LetterSvg = ({letter, color, size}) => (
   <svg fill={color} width={size} height={size}>
       <use href={`${Svg}`} />
   </svg>
);

LetterSvg.defaultProps = {
   size: 30,
   color: 'black',
};

export default LetterSvg;