import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

type State = {
  seedConditions: {
    numbers: boolean;
    lowercases: boolean;
    uppercases: boolean;
    symbols: boolean;
    lookalikes: boolean;
  };
  manualSeeds: string | null;
};

const initialState: State = {
  seedConditions: {
    numbers: true,
    lowercases: true,
    uppercases: true,
    symbols: true,
    lookalikes: false,
  },
  manualSeeds: null,
};

type SeedType =
  | 'numbers'
  | 'lowercases'
  | 'uppercases'
  | 'symbols'
  | 'lookalikes';

const shopSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
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
});

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
  setSeedCondition,
  toggleSeedCondition,
  updateSeedsManually,
} = shopSlice.actions;

export default shopSlice.reducer;
