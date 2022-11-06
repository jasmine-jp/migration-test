import React from 'react';
import { useDispatch } from 'react-redux';
import { slice } from '../redux';

export const BtnGroup = () => {
  const dispatch = useDispatch();
  const { change, reset } = slice.actions;

  const group = ['React', 'javascript', 'typescript', 'redux'].map((s) =>
    <button
      children={s}
      onClick={ () => dispatch(change(s)) }
    />
  );

  return (
  <>
    {...group}
    <button
      children={'reset'}
      onClick={ () => dispatch(reset()) }
    />
  </>
  );
}