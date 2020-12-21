import { css } from '@emotion/react';
import { Button, TextField, Typography } from '@material-ui/core';
import { customAlphabet } from 'nanoid/async';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HowMany } from './HowMany';
import { IdLength } from './IdLength';
import {
  howManySelector,
  idLengthSelector,
  resultSelector,
  seedsSelector,
  setResult,
} from './mainSlice';
import { SeedCondition } from './SeedCondition';
import { SeedTextField } from './SeedTextField';

export const Top: React.FC = () => {
  const dispatch = useDispatch();
  const seeds = useSelector(seedsSelector);
  const howMany = useSelector(howManySelector);
  const idLength = useSelector(idLengthSelector);
  const result = useSelector(resultSelector);

  const generateNanoIds = useCallback(async () => {
    if (seeds.length === 0) {
      alert('Seeds strings must be at least one character');
      return;
    }
    const nanoid = customAlphabet(seeds, idLength);
    const promises = [];
    for (let i = 0; i < howMany; i++) {
      promises.push(nanoid());
    }
    const ids = await Promise.all(promises);
    dispatch(setResult(ids.join('\n')));
  }, [dispatch, howMany, idLength, seeds]);

  const styles = {
    rootContainer: css`
      display: grid;
      grid-gap: 2rem;
      margin: auto;
      max-width: 700px;
      padding: 2rem 1rem;
    `,
    numbers: css`
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: 1fr 1fr;
    `,
  };

  return (
    <div css={styles.rootContainer}>
      <div>
        <Typography variant="h4">Nanoid Gen</Typography>
        <Typography>Simple online nanoid generator</Typography>
      </div>
      <SeedCondition />
      <SeedTextField />
      <div css={styles.numbers}>
        <IdLength />
        <HowMany />
      </div>
      <Button color="primary" variant="contained" onClick={generateNanoIds}>
        generate
      </Button>
      {result.length > 0 && (
        <TextField
          label="Results"
          variant="outlined"
          multiline
          value={result}
        />
      )}
    </div>
  );
};
