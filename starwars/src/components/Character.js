import React from 'react';
import styled from 'tachyons-components';

const CharacterCardContainer = styled('div')`
  flex flex-column w-80 pa3 justify-center
  mb1 bg-light-red o-70 br3
`;

const NameContainer = styled('div')`
  f1 pa2 mb2 bg-purple br2 light-gray
`;

const Character = ({
  name,
  birth_year,
  mass,
  hair_color,
  eye_color,
  skin_color,
}) => (
  <CharacterCardContainer>
    <NameContainer>{name}</NameContainer>
    <div>
      <div>Birth Year: {birth_year}</div>
      <div>Mass: {mass}</div>
      <div>Hair Color: {hair_color}</div>
      <div>Eye Color: {eye_color}</div>
      <div>Skin Color: {skin_color}</div>
    </div>
  </CharacterCardContainer>
);

export default Character;
