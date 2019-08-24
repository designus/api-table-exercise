import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { postsSelector } from '../selectors'

export const PostsTable = ({ posts }) => (
  <table id="postsTable">
    <thead>
      <tr>
        <th>Post title</th>
        <th>Post body</th>
        <th>User name</th>
        <th>Number of comments</th>
      </tr>
    </thead>
    <tbody>
      {
        posts.length
          ? posts.map(({ id, title, body, userName, commentsCount }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>{body}</td>
              <td>{userName}</td>
              <td style={{ textAlign: 'center' }}>{commentsCount}</td>
            </tr>
          )) : (
            <tr>
              <td>No data</td>
              <td>No data</td>
              <td>No data</td>
              <td>No data</td>
            </tr>
          )
      }
    </tbody>
  </table>
)

PostsTable.propTypes = {
  posts: PropTypes.instanceOf(Array).isRequired,
}

const mapStateToProps = createStructuredSelector({
  posts: postsSelector()
})

export default connect(mapStateToProps)(PostsTable)


