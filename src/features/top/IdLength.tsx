import { TextField } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { idLengthSelector, setIdLength } from './mainSlice';

export const IdLength: React.FC = () => {
  const idLength = useSelector(idLengthSelector);
  const dispatch = useDispatch();

  const isInvalidNumber = idLength === 0;

  return (
    <TextField
      label="id length"
      type="number"
      value={isInvalidNumber ? '' : idLength}
      onChange={(e) => dispatch(setIdLength(+e.target.value))}
      error={isInvalidNumber}
      InputLabelProps={{ shrink: true }}
    />
  );
};
