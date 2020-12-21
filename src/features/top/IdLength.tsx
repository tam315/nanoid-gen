import { TextField } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { idLengthSelector, setIdLength } from './mainSlice';

export const IdLength: React.FC = () => {
  const idLength = useSelector(idLengthSelector);
  const dispatch = useDispatch();

  return (
    <TextField
      label="id length"
      type="number"
      value={idLength}
      onChange={(e) => dispatch(setIdLength(+e.target.value))}
    />
  );
};
