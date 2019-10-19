import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions/data';

function App(props) {
  const { fetchData, posts, users } = props;
  useEffect(() => {
    fetchData();
  }, [fetchData])

  const renderPost = post => {
    const user = users.byId[post.userId]
    return (
      <tr key={post.id}>
        <td>{post.title}</td>
        <td>{post.body}</td>
        <td>{user && user.username}</td>
        <td>{post.comments.length}</td>
      </tr>
    );
  }

  return (
    <div className="app">
      <div className="posts">
        {posts && (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Body</th>
                <th>User name</th>
                <th>Comments count</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(renderPost)}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts,
  users: state.users
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
