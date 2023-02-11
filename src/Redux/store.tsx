import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./CounterSlice";
import userReducer from "./UserSlice"

export const store = configureStore({
  reducer: {
    //created counterReducer a new Reducer now we came to store to add that to our reducer object, name we give counter it could be any string name
    counter: counterReducer,
    user: userReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch