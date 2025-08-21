import { render, screen, fireEvent } from '@testing-library/react'
import Todo from './Todo'
import { describe, test, expect, vi } from 'vitest'
describe('Todo component', () => {
  const mockTodo = {
    text: 'Test todo',
    done: false
  }
  
  test('renders todo text', () => {
    render(<Todo todo={mockTodo} onDelete={() => {}} onComplete={() => {}} />)
    expect(screen.getByText('Test todo')).toBeDefined()
  })

  test('renders correct buttons when todo is not done', () => {
    render(<Todo todo={mockTodo} onDelete={() => {}} onComplete={() => {}} />)
    expect(screen.getByText('Delete')).toBeDefined()
    expect(screen.getByText('Set as done')).toBeDefined()
  })

  test('renders correct text when todo is not done', () => {
    render(<Todo todo={mockTodo} onDelete={() => {}} onComplete={() => {}} />)
    expect(screen.getByText('This todo is not done')).toBeDefined()
  })

  test('renders correct elements when todo is done', () => {
    const doneTodo = { ...mockTodo, done: true }
    render(<Todo todo={doneTodo} onDelete={() => {}} onComplete={() => {}} />)
    expect(screen.getByText('This todo is done')).toBeDefined()
    expect(screen.getByText('Delete')).toBeDefined()
    expect(screen.queryByText('Set as done')).toBeNull()
  })

  test('calls onDelete when delete button is clicked', () => {
    const mockDelete = vi.fn()
    render(<Todo todo={mockTodo} onDelete={mockDelete} onComplete={() => {}} />)
    fireEvent.click(screen.getByText('Delete'))
    expect(mockDelete).toHaveBeenCalledWith(mockTodo)
  })

  test('calls onComplete when set as done button is clicked', () => {
    const mockComplete = vi.fn()
    render(<Todo todo={mockTodo} onDelete={() => {}} onComplete={mockComplete} />)
    fireEvent.click(screen.getByText('Set as done'))
    expect(mockComplete).toHaveBeenCalledWith(mockTodo)
  })
})