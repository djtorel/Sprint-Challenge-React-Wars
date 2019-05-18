import React from 'react';
import styled from 'tachyons-components';

const CharacterCardContainer = styled('div')`
  flex flex-column w-75 w-80-ns pa2 justify-center
  mb1 bg-light-blue o-80 br3 shadow-1
  w-40-l
`;

const NameContainer = styled('div')`
  f2 pa2 mb2 bg-navy br2 light-blue
  shadow-1
`;

const StatContainer = styled('div')`
  bg-dark-blue br2 pa2 lightest-blue
  0-60
`;

const Stat = styled('div')`
  flex items-center bg-blue f4 h3 br2
  pa3 shadow-1
  ${({ last }) => (last ? 'mb0' : 'mb1')}
`;

const StatSplit = styled('span')`
  flex w-50 justify-center
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
    <StatContainer>
      <Stat>
        <StatSplit>Birth Year:</StatSplit> <StatSplit>{birth_year}</StatSplit>
      </Stat>
      <Stat>
        <StatSplit>Mass:</StatSplit> <StatSplit>{mass}</StatSplit>
      </Stat>
      <Stat>
        <StatSplit>Hair Color:</StatSplit> <StatSplit>{hair_color}</StatSplit>
      </Stat>
      <Stat>
        <StatSplit>Eye Color:</StatSplit> <StatSplit>{eye_color}</StatSplit>
      </Stat>
      <Stat last="true">
        <StatSplit>Skin Color:</StatSplit> <StatSplit>{skin_color}</StatSplit>
      </Stat>
    </StatContainer>
  </CharacterCardContainer>
);

export default Character;
