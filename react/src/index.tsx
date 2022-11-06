import React, { useState } from 'react';
import { BtnGroup } from './btn-group';
import { store } from './redux';

export const App = () => {
  const [state, setState] = useState('World');
  const s = 'Hello ' + state;
  return (
    <>
      <p children={s} />
      <button
        children={'Change State'}
        onClick={ () => setState(store.getState().text) }
      />
      <BtnGroup />
    </>
  );
}