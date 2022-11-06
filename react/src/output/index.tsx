import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { slice } from '../redux';

export const OutputName = () => {
  const [name, setName] = useState('Google');
  const dispatch = useDispatch();
  const { sendName } = slice.actions;

  return (
    <>
      <input
        type={'text'}
        value={name}
        onChange={ (e) => { setName(e.target.value) } }
      />
      <button
        children={'send name'}
        onClick={ () => dispatch(sendName(name)) }
      />
    </>
  );
}