import { type RootState } from '@/redux/store';

export const selectPortfolio = (state: RootState) => state.portfolio;
