import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { DataTable } from '../components/DataTable'
import { postsSelector } from '../selectors'

export const PostsTable = ({ posts }) => (
  <DataTable
    cols={[
      { header: 'Post title', name: 'title' },
      { header: 'Post body', name: 'body' },
      { header: 'User Name', name: 'userName' },
      { header: 'Comments Count', name: 'commentsCount' }
    ]}
    data={posts}
  />
)

PostsTable.propTypes = {
  posts: PropTypes.instanceOf(Array).isRequired,
}

const mapStateToProps = createStructuredSelector({
  posts: postsSelector()
})

export default connect(mapStateToProps)(PostsTable)


