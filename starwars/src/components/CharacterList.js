import React from 'react';
import styled from 'tachyons-components';

import Character from './Character';

const CharacterListContainer = styled('div')`
  flex flex-wrap justify-center
`;

const CharacterList = ({ list }) => (
  <CharacterListContainer>
    {list.map(
      ({
        created,
        name,
        birth_year,
        mass,
        hair_color,
        eye_color,
        skin_color,
      }) => (
        <Character
          key={created}
          name={name}
          birth_year={birth_year}
          mass={mass}
          hair_color={hair_color}
          eye_color={eye_color}
          skin_color={skin_color}
        />
      )
    )}
  </CharacterListContainer>
);

export default CharacterList;
