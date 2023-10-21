import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: [
    {
      title: "Feedbacks",
      note: "lorem Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis.",
      updatedBefore: "10 days"
    },
  ],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
