export const receivePosts = (posts) => ({
  type: 'RECEIVE_POSTS',
  posts
});

export const receiveUsers = (users) => ({
  type: 'RECEIVE_USERS',
  users
})

const apis = ['posts', 'users', 'comments']

const getMappingTable = (items, key) => items.reduce((acc, item) => {
  acc[item[key]] = item;
  return acc;
}, {});

const groupCommentsByPostId = (comments) => {
  return comments.reduce((acc, comment) => {
    if (acc[comment.postId]) {
      acc[comment.postId].push(comment.id)
    } else {
      acc[comment.postId] = [comment.id];
    }

    return acc;
  }, {})
}

const extendPostsWithComments = (posts, comments) => {
  const groupedComments = groupCommentsByPostId(comments);
  return posts.map(post => ({
    ...post,
    comments: groupedComments[post.id]
  }))
}

export const fetchData = () => (dispatch) => {
  return Promise.all(
    apis.map(api => fetch(`https://jsonplaceholder.typicode.com/${api}`).then(response => response.json()))
  )
    .then(([posts, users, comments]) => {
      dispatch(receivePosts(extendPostsWithComments(posts, comments.slice(1, comments.length - 2))));
      dispatch(receiveUsers(getMappingTable(users, 'id')));
    })
}