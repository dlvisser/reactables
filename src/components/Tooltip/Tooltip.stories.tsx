import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
    show: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const TooltipWithState = ({ children, ...props }: any) => {
  const [show, setShow] = useState(false);
  
  return (
    <Tooltip
      show={show}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      {...props}
    >
      {children}
    </Tooltip>
  );
};

export const Default: Story = {
  render: () => (
    <TooltipWithState content="This is a tooltip">
      <Button>Hover me</Button>
    </TooltipWithState>
  ),
};

export const Top: Story = {
  render: () => (
    <TooltipWithState content="Tooltip on top" position="top">
      <Button>Top Tooltip</Button>
    </TooltipWithState>
  ),
};

export const Bottom: Story = {
  render: () => (
    <TooltipWithState content="Tooltip on bottom" position="bottom">
      <Button>Bottom Tooltip</Button>
    </TooltipWithState>
  ),
};

export const Left: Story = {
  render: () => (
    <TooltipWithState content="Tooltip on left" position="left">
      <Button>Left Tooltip</Button>
    </TooltipWithState>
  ),
};

export const Right: Story = {
  render: () => (
    <TooltipWithState content="Tooltip on right" position="right">
      <Button>Right Tooltip</Button>
    </TooltipWithState>
  ),
};

export const AllPositions: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <TooltipWithState content="Top tooltip" position="top">
        <Button>Top</Button>
      </TooltipWithState>
      <TooltipWithState content="Bottom tooltip" position="bottom">
        <Button>Bottom</Button>
      </TooltipWithState>
      <TooltipWithState content="Left tooltip" position="left">
        <Button>Left</Button>
      </TooltipWithState>
      <TooltipWithState content="Right tooltip" position="right">
        <Button>Right</Button>
      </TooltipWithState>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <TooltipWithState content="Click to copy">
      <button className="p-2 text-secondary-600 hover:text-secondary-900">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </button>
    </TooltipWithState>
  ),
};

export const WithText: Story = {
  render: () => (
    <TooltipWithState content="This is a longer tooltip with more detailed information">
      <span className="text-primary-600 underline cursor-help">Hover for more info</span>
    </TooltipWithState>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <TooltipWithState content="Custom styled tooltip">
      <div className="inline-flex items-center px-3 py-2 bg-secondary-100 rounded-md cursor-help">
        <svg className="w-4 h-4 mr-2 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-sm text-secondary-700">Help</span>
      </div>
    </TooltipWithState>
  ),
};

const ControlledTooltip = () => {
  const [show, setShow] = useState(false);
  
  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Button onClick={() => setShow(true)}>Show Tooltip</Button>
        <Button onClick={() => setShow(false)}>Hide Tooltip</Button>
      </div>
      
      <Tooltip
        content="This tooltip is controlled programmatically"
        show={show}
        position="top"
      >
        <Button variant="outline">Controlled Tooltip</Button>
      </Tooltip>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledTooltip />,
};

export const MultipleTooltips: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <TooltipWithState content="Primary action" position="top">
          <Button>Primary</Button>
        </TooltipWithState>
        <TooltipWithState content="Secondary action" position="top">
          <Button variant="secondary">Secondary</Button>
        </TooltipWithState>
        <TooltipWithState content="Dangerous action" position="top">
          <Button variant="outline">Danger</Button>
        </TooltipWithState>
      </div>
      
      <div className="flex items-center space-x-4">
        <TooltipWithState content="Copy to clipboard">
          <button className="p-2 text-secondary-600 hover:text-secondary-900">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </TooltipWithState>
        <TooltipWithState content="Download file">
          <button className="p-2 text-secondary-600 hover:text-secondary-900">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        </TooltipWithState>
        <TooltipWithState content="Share content">
          <button className="p-2 text-secondary-600 hover:text-secondary-900">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
        </TooltipWithState>
      </div>
    </div>
  ),
}; 