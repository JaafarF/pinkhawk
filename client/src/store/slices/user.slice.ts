import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isLoggedIn: boolean;
  id: string;
  nickName: string;
  firstName: string;
  lastName: string;
  email: string;
}

const initialState: UserState = {
  isLoggedIn: false,
  id: '',
  nickName: '',
  firstName: '',
  lastName: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    activeUser: (state, action) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.familyName;
      state.email = action.payload.email;
      state.isLoggedIn = true;
      return state;
    },
  },
});

export const { activeUser } = userSlice.actions;

export default userSlice.reducer;
