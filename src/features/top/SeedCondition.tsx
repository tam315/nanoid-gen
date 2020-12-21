import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { seedConditionsSelector, toggleSeedCondition } from './mainSlice';

export const SeedCondition: React.FC = () => {
  const dispatch = useDispatch();
  const { numbers, lowercases, uppercases, symbols, lookalikes } = useSelector(
    seedConditionsSelector,
  );

  return (
    <div>
      <FormControl>
        <FormGroup>
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                checked={numbers}
                onClick={() => dispatch(toggleSeedCondition('numbers'))}
              />
            }
            label="include numbers"
          />
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                checked={lowercases}
                onClick={() => dispatch(toggleSeedCondition('lowercases'))}
              />
            }
            label="include lower cases"
          />
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                checked={uppercases}
                onClick={() => dispatch(toggleSeedCondition('uppercases'))}
              />
            }
            label="include upper cases"
          />
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                checked={symbols}
                onClick={() => dispatch(toggleSeedCondition('symbols'))}
              />
            }
            label="include symbols(_-)"
          />
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                checked={lookalikes}
                onClick={() => dispatch(toggleSeedCondition('lookalikes'))}
              />
            }
            label="exclude look-alikes(1lI0Oouv5Ss)"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};
