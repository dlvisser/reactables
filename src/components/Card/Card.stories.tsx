import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    shadow: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a default card with medium padding and shadow.',
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: 'This card has no padding.',
  },
};

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: 'This card has small padding.',
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    children: 'This card has large padding.',
  },
};

export const NoShadow: Story = {
  args: {
    shadow: 'none',
    children: 'This card has no shadow.',
  },
};

export const SmallShadow: Story = {
  args: {
    shadow: 'sm',
    children: 'This card has a small shadow.',
  },
};

export const LargeShadow: Story = {
  args: {
    shadow: 'lg',
    children: 'This card has a large shadow.',
  },
};

export const AllPaddingVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Card padding="none">
        <h3 className="font-semibold mb-2">No Padding</h3>
        <p>This card has no padding.</p>
      </Card>
      <Card padding="sm">
        <h3 className="font-semibold mb-2">Small Padding</h3>
        <p>This card has small padding.</p>
      </Card>
      <Card padding="md">
        <h3 className="font-semibold mb-2">Medium Padding</h3>
        <p>This card has medium padding.</p>
      </Card>
      <Card padding="lg">
        <h3 className="font-semibold mb-2">Large Padding</h3>
        <p>This card has large padding.</p>
      </Card>
    </div>
  ),
};

export const AllShadowVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Card shadow="none">
        <h3 className="font-semibold mb-2">No Shadow</h3>
        <p>This card has no shadow.</p>
      </Card>
      <Card shadow="sm">
        <h3 className="font-semibold mb-2">Small Shadow</h3>
        <p>This card has a small shadow.</p>
      </Card>
      <Card shadow="md">
        <h3 className="font-semibold mb-2">Medium Shadow</h3>
        <p>This card has a medium shadow.</p>
      </Card>
      <Card shadow="lg">
        <h3 className="font-semibold mb-2">Large Shadow</h3>
        <p>This card has a large shadow.</p>
      </Card>
    </div>
  ),
};

export const ComplexContent: Story = {
  render: () => (
    <Card>
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
          <span className="text-primary-600 font-bold">JD</span>
        </div>
        <div>
          <h3 className="font-semibold text-lg">John Doe</h3>
          <p className="text-secondary-600">Software Engineer</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-secondary-700">
          This is an example of a card with complex content including an avatar,
          name, title, and description.
        </p>
      </div>
    </Card>
  ),
}; 