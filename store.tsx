import { configureStore } from '@reduxjs/toolkit'
import logBoxSlice from './slices/logBoxSlice'
import regBoxSlice from './slices/regBoxSlice'

export const store = configureStore({
  reducer: {
    logBox: logBoxSlice,
    regBox: regBoxSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch