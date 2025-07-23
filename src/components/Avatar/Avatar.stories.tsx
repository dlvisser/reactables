import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    src: {
      control: { type: 'text' },
    },
    alt: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: 'John Doe',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    alt: 'John Doe',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    alt: 'John Doe',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    alt: 'John Doe',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    alt: 'John Doe',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Avatar size="sm" alt="Small" />
      <Avatar size="md" alt="Medium" />
      <Avatar size="lg" alt="Large" />
      <Avatar size="xl" alt="Extra Large" />
    </div>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Avatar size="md">
        <span className="text-primary-600 font-bold">JD</span>
      </Avatar>
      <Avatar size="lg">
        <span className="text-secondary-600 font-bold">AB</span>
      </Avatar>
    </div>
  ),
}; 