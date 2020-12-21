import { TextField } from '@material-ui/core';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { seedsSelector, updateSeedsManually } from './mainSlice';

export const SeedTextField: React.FC = () => {
  const dispatch = useDispatch();
  const seeds = useSelector(seedsSelector);

  const onTextChange = useCallback((e) => {
    dispatch(updateSeedsManually(e.target.value));
  }, []);

  return (
    <TextField
      label="Seeds"
      variant="outlined"
      multiline
      rowsMax={4}
      value={seeds}
      onChange={onTextChange}
    />
  );
};
