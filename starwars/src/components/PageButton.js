import React from 'react';
import styled from 'tachyons-components';

const ButtonContainer = styled('div')`
  fixed ma2
  ${({ direction }) => (direction === '<' ? 'left-0' : 'right-0')}
`;

const Button = styled('button')`
  h5 bg-navy bn light-blue w2-m f4 f1-l pa2
  shadow-1 br2
  ${({ disabled }) => (disabled ? 'o-30' : 'o-80')}
`;

const PageButton = ({ children, action, active }) => (
  <ButtonContainer direction={children}>
    <Button disabled={!active} onClick={action}>
      {children}
    </Button>
  </ButtonContainer>
);

export default PageButton;
