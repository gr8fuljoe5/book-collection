import { render } from '@redwoodjs/testing/web'

import BookLayout from './BookLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BookLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BookLayout />)
    }).not.toThrow()
  })
})
