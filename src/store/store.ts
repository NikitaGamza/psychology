import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import specReducer from './features/blogThemesSlice';
import methodsReducer from './features/methods/methods';

//action
const UPDATE_SELECTED_BLOG_THEME = 'UPDATE_SELECTED_BLOG_THEME';
//actionCreator
function updateSelectedBlogTheme() {
  return {
    type: UPDATE_SELECTED_BLOG_THEME,
    id: 1,
  };
}

const initialState = {
  blogThemes: [
    {
      id: 1,
      name: 'Травмы',
      isSelected: false,
    },
    {
      id: 2,
      name: 'Грусть',
      isSelected: false,
    },
  ],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_SELECTED_BLOG_THEME:
      const updTheme = state.blogThemes.find(
        (item: any) => item.id === action.payload.id
      );
      if (!updTheme) {
        return { ...state };
      } else {
        updTheme.isSelected = !updTheme?.isSelected;
      }
      state.blogThemes[updTheme.id].isSelected =
        !state.blogThemes[updTheme.id].isSelected;
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    specThemes: specReducer,
    methods: methodsReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
