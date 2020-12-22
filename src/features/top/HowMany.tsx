import { TextField } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { howManySelector, setHowMany } from './mainSlice';

type Props = {
  className?: string;
};

export const HowMany: React.FC<Props> = ({ className }) => {
  const howMany = useSelector(howManySelector);
  const dispatch = useDispatch();

  const isInvalidNumber = howMany === 0;

  return (
    <TextField
      className={className}
      label="How many"
      type="number"
      value={isInvalidNumber ? '' : howMany}
      onChange={(e) => dispatch(setHowMany(+e.target.value))}
      error={isInvalidNumber}
      InputLabelProps={{ shrink: true }}
    />
  );
};
