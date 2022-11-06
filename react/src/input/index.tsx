import React, { useState } from 'react';
import { store } from '../redux';

export const InputName = () => {
  const [name, setName] = useState('Google');

  return (
    <>
      <p>{name}</p>
      <button
        children={'get name'}
        onClick={ () => setName(store.getState().name) }
      />
    </>
  );
}