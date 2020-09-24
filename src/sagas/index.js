import { all } from "redux-saga/effects";
import { watchGetPosts } from "./getPosts";

export default function* rootSaga() {
  yield all([watchGetPosts()]);
}
