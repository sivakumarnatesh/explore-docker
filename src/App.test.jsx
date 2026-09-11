import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the starter heading and increments the counter', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /get start/i }),
    ).toBeInTheDocument()

    const button = screen.getByRole('button', { name: /count is 0/i })

    fireEvent.click(button)

    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })
})
