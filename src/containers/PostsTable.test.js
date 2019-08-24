import React from 'react'
import { shallow } from 'enzyme'
import { PostsTable } from './PostsTable'

describe('<PostTable />', () => {
  const props = {
    posts: [
      { id: 1, title: 'Post title 1', body: 'Post body 1', userName: 'Name', commentsCount: 3 },
      { id: 2, title: 'Post title 2', body: 'Post body 2', userName: 'Name', commentsCount: 5 },
    ]
  }

  const container = shallow(<PostsTable {...props} />)
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

  it('The number of th tags should be correct', () => {
    const items = Object.keys(props.posts[0]).length - 1
    expect(headers).toHaveLength(items)
  })

  it('should have ONLY 1 tbody tag', () => {
    expect(tbody).toHaveLength(1)
  })

  it('should be render rows', () => {
    expect(rows).toHaveLength(props.posts.length)
  })

  it('The table row should have four cell', () => {
    rows.forEach((row, idx) => {
      const cell = row.find('td')
      expect(cell).toHaveLength(4)
    })
  })

  it('Check cell text', () => {
    rows.forEach((row, i) => {
      const cells = row.find('td')
      cells.forEach((cell, e) => {
        expect(cell.text()).toEqual(Object.values(props.posts[i])[e + 1].toString())
      })
    })
  })
})

