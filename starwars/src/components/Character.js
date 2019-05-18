import React from 'react';

const Character = ({
  name,
  birth_year,
  mass,
  hair_color,
  eye_color,
  skin_color,
}) => (
  <div>
    <div>{name}</div>
    <div>
      <div>Birth Year: {birth_year}</div>
      <div>Mass: {mass}</div>
      <div>Hair Color: {hair_color}</div>
      <div>Eye Color: {eye_color}</div>
      <div>Skin Color: {skin_color}</div>
    </div>
  </div>
);

export default Character;
