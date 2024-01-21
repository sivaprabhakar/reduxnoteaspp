
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
    },
    editNote: (state, action) => {
      const { index, updatedNote } = action.payload;
      state[index] = updatedNote;
    },
    deleteNote: (state, action) => {
      const index = action.payload;
      state.splice(index, 1);
    },
  },
});

export const { addNote, editNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
