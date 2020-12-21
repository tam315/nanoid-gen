import { css } from '@emotion/react';
import { Button, Typography } from '@material-ui/core';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HowMany } from './HowMany';
import { IdLength } from './IdLength';
import {
  generateNanoIds,
  howManySelector,
  idLengthSelector,
  resultSelector,
  seedsSelector,
} from './mainSlice';
import { Result } from './Result';
import { SeedCondition } from './SeedCondition';
import { SeedTextField } from './SeedTextField';

export const Top: React.FC = () => {
  const dispatch = useDispatch();
  const seeds = useSelector(seedsSelector);
  const howMany = useSelector(howManySelector);
  const idLength = useSelector(idLengthSelector);
  const result = useSelector(resultSelector);

  const onGenerateButtonClicked = useCallback(async () => {
    dispatch(generateNanoIds({ seeds, idLength, howMany }));
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
      <Typography variant="h4">Nano ID Generator</Typography>
      <SeedCondition />
      <SeedTextField />
      <div css={styles.numbers}>
        <IdLength />
        <HowMany />
      </div>
      <Button
        color="primary"
        variant="contained"
        onClick={onGenerateButtonClicked}
      >
        generate
      </Button>
      {result.length > 0 && <Result value={result} />}
    </div>
  );
};
