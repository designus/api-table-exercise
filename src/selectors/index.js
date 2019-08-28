import { createSelector } from 'reselect'

const statusState = state => state.status
const usersState = state => state.users
const postsState = state => state.posts
const commentsState = state => state.comments

export const statusSelector = () => createSelector(
  statusState,
  ({ loading, error }) => ({ loading, error })
)

export const postsSelector = () => createSelector(
  usersState,
  postsState,
  commentsState,
  (users, posts, comments) => posts.map(post => ({
    ...post,
    userName: users.length && users.find(user => post.userId === user.id).name,
    commentsCount: comments.length && comments.filter(comment => comment.postId === post.id).length
  }))
)


