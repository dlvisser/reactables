import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Button variant="primary">Button</Button>);
    let button = screen.getByRole('button');
    expect(button).toHaveClass('btn-primary');

    rerender(<Button variant="secondary">Button</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveClass('btn-secondary');
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Button size="sm">Button</Button>);
    let button = screen.getByRole('button');
    expect(button).toHaveClass('h-8');

    rerender(<Button size="lg">Button</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveClass('h-12');
  });

  it('shows loading spinner when loading is true', () => {
    render(<Button loading>Button</Button>);
    const button = screen.getByRole('button');
    const spinner = button.querySelector('svg');
    expect(spinner).toBeInTheDocument();
  });

  it('is disabled when loading is true', () => {
    render(<Button loading>Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Button</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Button</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });
}); 