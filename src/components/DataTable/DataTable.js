import React from 'react'
import PropTypes from 'prop-types'

const DataTable = ({data, cols}) => {
  const renderData = (data, cols) =>
    data.map(row =>
      <tr key={row.id}>
        {cols.map(col =>
          <td key={col.name}>{row[col.name]}</td>
        )}
      </tr>
    )

  const renderEmptyState = cols =>(
    <tr>
      <td colSpan={cols.length}>No data</td>
    </tr>
  )

  return (
    <table>
      <thead>
        <tr>
          {cols.map(col =>
            <th key={col.name}>{col.header}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? renderData(data, cols) : renderEmptyState(cols)}
      </tbody>
    </table>
  )
}

DataTable.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  cols: PropTypes.instanceOf(Array).isRequired,
}


export default DataTable
