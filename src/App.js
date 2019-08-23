import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData} from './actions'

const App = ({ data, fetchData}) => {

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="app">
      Render posts as a table here
    </div>
  );
}

const mapStateToProps = ({data}) => ({data})

export default connect(mapStateToProps, { fetchData })(App);
