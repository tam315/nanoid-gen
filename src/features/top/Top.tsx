import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@material-ui/core';
import React, { useState } from 'react';

export const Top: React.FC = () => {
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeLowercases, setIncludeLowercases] = useState(true);
  const [includeUppercases, setIncludeUppercases] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeLookalikes, setExcludeLookalikes] = useState(false);

  return (
    <div>
      <FormControl>
        <FormGroup>
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                checked={includeNumbers}
                onClick={() => setIncludeNumbers((current) => !current)}
              />
            }
            label="include numbers"
          />
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                checked={includeLowercases}
                onClick={() => setIncludeLowercases((current) => !current)}
              />
            }
            label="include lower cases"
          />
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                checked={includeUppercases}
                onClick={() => setIncludeUppercases((current) => !current)}
              />
            }
            label="include upper cases"
          />
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                checked={includeSymbols}
                onClick={() => setIncludeSymbols((current) => !current)}
              />
            }
            label="include symbols"
          />
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                checked={excludeLookalikes}
                onClick={() => setExcludeLookalikes((current) => !current)}
              />
            }
            label="exclude look-alikes(1, l, I, 0, O, o, u, v, 5, S, s)"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};
