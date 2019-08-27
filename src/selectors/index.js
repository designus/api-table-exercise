import { createSelector } from 'reselect'

// const dataState = state => state.data
const usersState = state => state.users.data
const postsState = state => state.posts.data
const commentsState = state => state.comments.data

export const statusSelector = () => createSelector(
  usersState,
  postsState,
  commentsState,
  ({ loading, error }) => ({ loading, error })
)

export const postsSelector = () => createSelector(
  usersState,
  postsState,
  commentsState,
  (users, posts, comments) => posts.map(post => ({
    ...post,
    userName: users.find(user => post.userId === user.id).name,
    commentsCount: comments.filter(comment => comment.postId === post.id).length
  }))
)


