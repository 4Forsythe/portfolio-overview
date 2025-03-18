import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IModalState {
  isOpen: boolean;
  content: React.ReactNode;
}

const initialState = {
  isOpen: false,
  content: null,
} satisfies IModalState as IModalState;

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ component: React.ReactNode }>
    ) => {
      state.isOpen = true;
      state.content = action.payload.component;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
