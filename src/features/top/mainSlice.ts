import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { customAlphabet } from 'nanoid/async';
import { RootState } from '../store/store';

const sliceName = 'main';

type State = {
  howMany: number | '';
  idLength: number | '';
  manualSeeds: string | null;
  result: string;
  seedConditions: {
    numbers: boolean;
    lowercases: boolean;
    uppercases: boolean;
    symbols: boolean;
    lookalikes: boolean;
  };
};

const initialState: State = {
  howMany: 10,
  idLength: 21,
  manualSeeds: null,
  result: '',
  seedConditions: {
    numbers: true,
    lowercases: true,
    uppercases: true,
    symbols: true,
    lookalikes: false,
  },
};

type SeedType =
  | 'numbers'
  | 'lowercases'
  | 'uppercases'
  | 'symbols'
  | 'lookalikes';

export const generateNanoIds = createAsyncThunk<
  string,
  { seeds: string; idLength: number; howMany: number }
>(`${sliceName}/generateNanoIds`, async ({ seeds, idLength, howMany }) => {
  if (seeds.length === 0 || idLength === 0 || howMany === 0) {
    alert('invalid setting');
    throw 'invalid setting';
  }

  const nanoid = customAlphabet(seeds, idLength);
  const promises = [];
  for (let i = 0; i < howMany; i++) {
    promises.push(nanoid());
  }
  const ids = await Promise.all(promises);
  return ids.join('\n');
});

const shopSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setHowMany: (state, action: PayloadAction<number>) => {
      state.howMany = action.payload;
    },
    setIdLength: (state, action: PayloadAction<number>) => {
      state.idLength = action.payload;
    },
    setResult: (state, action: PayloadAction<string>) => {
      state.result = action.payload;
    },
    setSeedCondition: (
      state,
      action: PayloadAction<{ seedType: SeedType; nextState: boolean }>,
    ) => {
      state.seedConditions[action.payload.seedType] = action.payload.nextState;
      state.manualSeeds = null;
    },
    updateSeedsManually: (state, action: PayloadAction<string>) => {
      state.manualSeeds = action.payload;
      state.seedConditions.numbers = false;
      state.seedConditions.lowercases = false;
      state.seedConditions.uppercases = false;
      state.seedConditions.symbols = false;
      state.seedConditions.lookalikes = false;
    },
    toggleSeedCondition: (state, action: PayloadAction<SeedType>) => {
      const currentState = state.seedConditions[action.payload];
      state.seedConditions[action.payload] = !currentState;
      state.manualSeeds = null;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(generateNanoIds.fulfilled, (state, action) => {
      const nanoIds = action.payload;
      state.result = nanoIds;
    }),
});

export const howManySelector = (state: RootState) => {
  return state.main.howMany;
};

export const idLengthSelector = (state: RootState) => {
  return state.main.idLength;
};

export const resultSelector = (state: RootState) => {
  return state.main.result;
};

export const seedConditionsSelector = (state: RootState) => {
  return state.main.seedConditions;
};

export const seedsSelector = (state: RootState): string => {
  if (state.main.manualSeeds !== null) {
    return state.main.manualSeeds;
  }

  const numberString = '0123456789';
  const lowercaseString = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const symbolString = '_-';
  const lookalikeString = /(1|l|I|0|O|o|u|v|5|S|s)/g;

  const {
    numbers,
    lowercases,
    uppercases,
    symbols,
    lookalikes,
  } = state.main.seedConditions;

  let seeds = '';

  if (numbers) {
    seeds += numberString;
  }
  if (lowercases) {
    seeds += lowercaseString;
  }
  if (uppercases) {
    seeds += uppercaseString;
  }
  if (symbols) {
    seeds += symbolString;
  }
  if (lookalikes) {
    seeds = seeds.replaceAll(lookalikeString, '');
  }
  return seeds;
};

export const {
  setHowMany,
  setIdLength,
  setResult,
  setSeedCondition,
  toggleSeedCondition,
  updateSeedsManually,
} = shopSlice.actions;

export default shopSlice.reducer;
