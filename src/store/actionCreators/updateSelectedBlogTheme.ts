import { UPDATE_SELECTED_BLOG_THEMES } from '../actions/updateSelectedBlogThemes';
export default function updateSelectedBlogTheme(idBlogTheme: number) {
  return {
    type: UPDATE_SELECTED_BLOG_THEMES,
    idBlogTheme: idBlogTheme,
  };
}
