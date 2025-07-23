import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../Button/Button';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const DropdownWithState = ({ trigger, children, ...props }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Dropdown
      trigger={trigger}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      {...props}
    >
      {children}
    </Dropdown>
  );
};

export const Default: Story = {
  render: () => (
    <DropdownWithState
      trigger={<Button>Open Dropdown</Button>}
    >
      <div className="py-1">
        <a href="#" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100">
          Profile
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100">
          Settings
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100">
          Sign out
        </a>
      </div>
    </DropdownWithState>
  ),
};

export const WithCustomTrigger: Story = {
  render: () => (
    <DropdownWithState
      trigger={
        <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-secondary-300 rounded-md shadow-sm hover:bg-secondary-50">
          <span>Options</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      }
    >
      <div className="py-1">
        <a href="#" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100">
          Edit
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100">
          Delete
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100">
          Share
        </a>
      </div>
    </DropdownWithState>
  ),
};

export const WithDividers: Story = {
  render: () => (
    <DropdownWithState
      trigger={<Button variant="outline">Actions</Button>}
    >
      <div className="py-1">
        <a href="#" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100">
          View Details
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100">
          Edit
        </a>
        <hr className="my-1 border-secondary-200" />
        <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">
          Delete
        </a>
      </div>
    </DropdownWithState>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <DropdownWithState
      trigger={<Button variant="ghost">Menu</Button>}
    >
      <div className="py-1">
        <a href="#" className="flex items-center px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Profile
        </a>
        <a href="#" className="flex items-center px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Settings
        </a>
        <a href="#" className="flex items-center px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sign out
        </a>
      </div>
    </DropdownWithState>
  ),
};

const ControlledDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </div>
      <Dropdown
        trigger={<Button variant="outline">Controlled Dropdown</Button>}
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      >
        <div className="py-1">
          <a href="#" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100">
            Option 1
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100">
            Option 2
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100">
            Option 3
          </a>
        </div>
      </Dropdown>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledDropdown />,
}; 