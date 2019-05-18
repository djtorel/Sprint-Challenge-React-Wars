import React from 'react';

import Character from './Character';

const CharacterList = ({ list }) => (
  <div>
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
  </div>
);

export default CharacterList;
