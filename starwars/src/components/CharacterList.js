import React from 'react';

import Character from './Character';

const CharacterList = ({ list }) => (
  <div>
    {list.map(character => (
      <Character />
    ))}
  </div>
);

export default CharacterList;
