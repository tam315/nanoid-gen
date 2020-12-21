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

  return (
    <TextField
      className={className}
      label="How many"
      type="number"
      value={howMany}
      onChange={(e) => dispatch(setHowMany(+e.target.value))}
    />
  );
};
