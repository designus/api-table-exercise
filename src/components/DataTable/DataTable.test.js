import React from 'react'
import { shallow } from 'enzyme'
import DataTable from './DataTable'

describe('<DataTable />', () => {
  const props = {
    cols: [
      { header: 'ID', name: 'id' },
      { header: 'Name', name: 'name' },
      { header: 'Email', name: 'email' }
    ],
    data: [
      { id: 5, name: 'John', email: 'john@example.com' },
      { id: 6, name: 'Liam', email: 'liam@example.com' },
      { id: 7, name: 'Maya', email: 'maya@example.com', someTest: 10 },
      { id: 8, name: 'Oliver', email: 'oliver@example.com', hello: 'hello world' },
      { id: 25, name: 'Amelia', email: 'amelia@example.com' }
    ]
  }
  const container = shallow(<DataTable {...props} />)
  const table = container.find('table')
  const thead = table.find('thead')
  const headers = thead.find('th')
  const tbody = table.find('tbody')
  const rows = tbody.find('tr')

  it('renders without crashing', () => {
    expect(table).toBeDefined()
  })

  it('should have ONLY 1 thead element', () => {
    expect(thead).toHaveLength(1)
  })

  it('The number of th tags should be equal to number of columns', () => {
    expect(headers).toHaveLength(props.cols.length)
  })

  it('Each th tag text should equal to column header', ()=> {
    headers.forEach((th, idx) => {
      expect(th.text()).toEqual(props.cols[idx].header)
    })
  })

  it('should have ONLY 1 tbody tag', () => {
    expect(tbody).toHaveLength(1)
  })

  it('tbody tag should have the same number of tr tags as data rows', () => {
    expect(rows).toHaveLength(props.data.length)
  })

  it('it should have the correct cell text', () => {
    rows.forEach((row, i) => {
      const cells = row.find('td')
      cells.forEach((cell, e) => {
        expect(cell.text()).toEqual(Object.values(props.data[i])[e].toString())
      })
    })
  })
})

