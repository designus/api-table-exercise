import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'

const props = {
  fetchData: jest.fn(),
  status: {
    loading: false,
    error: null,
  },
}

describe('<App />', () => {
  it('renders without crashing', () => {
    const container = shallow(<App {...props} />)

    expect(container).toBeDefined()
  })
})
