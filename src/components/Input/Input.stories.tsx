import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email...',
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password...',
    helperText: 'Must be at least 8 characters long',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email...',
    error: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
};

export const WithLeftIcon: Story = {
  render: () => (
    <Input
      label="Search"
      placeholder="Search for something..."
      leftIcon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      }
    />
  ),
};

export const WithRightIcon: Story = {
  render: () => (
    <Input
      label="Password"
      type="password"
      placeholder="Enter your password..."
      rightIcon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      }
    />
  ),
};

export const WithBothIcons: Story = {
  render: () => (
    <Input
      label="Amount"
      type="number"
      placeholder="0.00"
      leftIcon={
        <span className="text-secondary-500 font-medium">$</span>
      }
      rightIcon={
        <span className="text-secondary-500 text-sm">USD</span>
      }
    />
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <Input
        label="Text"
        type="text"
        placeholder="Enter text..."
      />
      <Input
        label="Email"
        type="email"
        placeholder="Enter email..."
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password..."
      />
      <Input
        label="Number"
        type="number"
        placeholder="Enter number..."
      />
      <Input
        label="Telephone"
        type="tel"
        placeholder="Enter phone number..."
      />
      <Input
        label="URL"
        type="url"
        placeholder="Enter URL..."
      />
    </div>
  ),
};

export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <Input
        label="Valid Input"
        placeholder="This input is valid"
        helperText="This is a valid input"
      />
      <Input
        label="Invalid Input"
        placeholder="This input has an error"
        error="This field is required"
      />
      <Input
        label="Disabled Input"
        placeholder="This input is disabled"
        disabled
      />
    </div>
  ),
}; 