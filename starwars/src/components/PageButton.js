import React from 'react';
import styled from 'tachyons-components';

const ButtonContainer = styled('div')`
  fixed ma2
  ${({ direction }) => (direction === 'left' ? 'left-0' : 'right-0')}
`;

const Button = styled('button')`
  h5 bg-navy bn light-blue f4 f2-l f2-m pa2
  shadow-1 br2
  ${({ disabled }) => (disabled ? 'o-30' : 'o-80')}
`;

const PageButton = ({ direction, action, active }) => (
  <ButtonContainer direction={direction}>
    <Button disabled={!active} onClick={action}>
      {direction === 'left' ? '<' : '>'}
    </Button>
  </ButtonContainer>
);

export default PageButton;
