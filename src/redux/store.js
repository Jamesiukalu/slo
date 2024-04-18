import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './actions/auth/loginAction';
import  registerSlice  from './actions/auth/registerAction';
import postSlice from './actions/posts/postActions'
import createPostSlice from './actions/posts/createPostActions'

const store = configureStore({
  reducer: {
    login: loginSlice,
    register: registerSlice,
    post_create: createPostSlice,
    posts: postSlice,
  },
});

export default store;
