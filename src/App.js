import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { statusSelector } from './selectors';
import { fetchData} from './actions';
import PostsTable from './containers/PostsTable';

export const App = ({ status: {loading, error}, fetchData}) => {
  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="app">
      {
        loading
          ? <p>...Loading</p>
          : error
            ? <div>{error}</div>
            : <PostsTable />
      }
    </div>
  );
}

App.propTypes = {
  status: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  fetchData: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  status: statusSelector(),
})

export default connect(mapStateToProps, { fetchData })(App);
