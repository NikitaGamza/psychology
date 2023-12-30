import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import specReducer from './features/blogThemesSlice';
import methodsReducer from './features/methods/methods';
import experienceReducer from './features/experience/experience';
import sexReducer from './features/sex/sex';
import citiesReducer from './features/cities/cities';
import formatReducer from './features/format/format';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    specThemes: specReducer,
    methods: methodsReducer,
    experience: experienceReducer,
    sex: sexReducer,
    cities: citiesReducer,
    format: formatReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
