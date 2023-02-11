import { PayloadAction, createSlice } from '@reduxjs/toolkit';
//import type { PayloadAction } from '@reduxjs/toolkit';

interface UserStateValue{
    username: string;
}
interface UserState {
   value:  UserStateValue
}
const initialState =  { value: { usename: "" } } as unknown as UserState;
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    showUser: (state:UserState, action:PayloadAction<UserStateValue>) => {
      state.value = action.payload
    },
    hideUser: (state:UserState) => {
      state.value = initialState.value;
    },
  },
})

// Action creators are generated for each case reducer function
export const { showUser, hideUser } = userSlice.actions

export default userSlice.reducer