import { createSelector } from 'reselect'

const dataState = state => state.data
const usersState = state => state.data.users
const postsState = state => state.data.posts
const commentsState = state => state.data.comments

export const statusSelector = () => createSelector(
  dataState,
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


