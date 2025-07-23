import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    isOpen: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ModalWithState = ({ children, ...props }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        {...props}
      >
        {children}
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => (
    <ModalWithState title="Example Modal">
      <p className="text-secondary-600">
        This is a basic modal with a title and some content. You can close it by clicking the overlay or pressing the Escape key.
      </p>
      <div className="mt-6 flex justify-end space-x-3">
        <Button variant="outline" onClick={() => {}}>Cancel</Button>
        <Button onClick={() => {}}>Save</Button>
      </div>
    </ModalWithState>
  ),
};

export const WithoutTitle: Story = {
  render: () => (
    <ModalWithState>
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-secondary-900 mb-2">Success!</h3>
        <p className="text-secondary-600">
          Your action has been completed successfully.
        </p>
        <div className="mt-6">
          <Button onClick={() => {}}>Continue</Button>
        </div>
      </div>
    </ModalWithState>
  ),
};

export const Small: Story = {
  render: () => (
    <ModalWithState size="sm" title="Small Modal">
      <p className="text-secondary-600">
        This is a small modal with limited content.
      </p>
      <div className="mt-4 flex justify-end">
        <Button size="sm" onClick={() => {}}>OK</Button>
      </div>
    </ModalWithState>
  ),
};

export const Large: Story = {
  render: () => (
    <ModalWithState size="lg" title="Large Modal">
      <div className="space-y-4">
        <p className="text-secondary-600">
          This is a large modal that can accommodate more content and complex layouts.
        </p>
        <div className="bg-secondary-50 p-4 rounded-md">
          <h4 className="font-medium text-secondary-900 mb-2">Additional Information</h4>
          <p className="text-sm text-secondary-600">
            You can include forms, tables, or any other complex content in larger modals.
          </p>
        </div>
        <div className="bg-secondary-50 p-4 rounded-md">
          <h4 className="font-medium text-secondary-900 mb-2">Another Section</h4>
          <p className="text-sm text-secondary-600">
            Multiple sections can be organized within the modal for better content structure.
          </p>
        </div>
      </div>
      <div className="mt-6 flex justify-end space-x-3">
        <Button variant="outline" onClick={() => {}}>Cancel</Button>
        <Button onClick={() => {}}>Save Changes</Button>
      </div>
    </ModalWithState>
  ),
};

export const ExtraLarge: Story = {
  render: () => (
    <ModalWithState size="xl" title="Extra Large Modal">
      <div className="space-y-6">
        <p className="text-secondary-600">
          This extra large modal is perfect for complex forms, detailed views, or content that requires significant space.
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-secondary-50 p-4 rounded-md">
            <h4 className="font-medium text-secondary-900 mb-2">Left Column</h4>
            <p className="text-sm text-secondary-600">
              You can use grid layouts to organize content in extra large modals.
            </p>
          </div>
          <div className="bg-secondary-50 p-4 rounded-md">
            <h4 className="font-medium text-secondary-900 mb-2">Right Column</h4>
            <p className="text-sm text-secondary-600">
              This allows for better content organization and user experience.
            </p>
          </div>
        </div>
        
        <div className="bg-secondary-50 p-4 rounded-md">
          <h4 className="font-medium text-secondary-900 mb-2">Full Width Section</h4>
          <p className="text-sm text-secondary-600">
            Some content can span the full width of the modal for better readability.
          </p>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end space-x-3">
        <Button variant="outline" onClick={() => {}}>Cancel</Button>
        <Button variant="secondary" onClick={() => {}}>Save Draft</Button>
        <Button onClick={() => {}}>Publish</Button>
      </div>
    </ModalWithState>
  ),
};

export const Confirmation: Story = {
  render: () => (
    <ModalWithState title="Confirm Action">
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
          <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-secondary-900 mb-2">Are you sure?</h3>
        <p className="text-secondary-600">
          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
        </p>
        <div className="mt-6 flex justify-center space-x-3">
          <Button variant="outline" onClick={() => {}}>Cancel</Button>
          <Button variant="primary" onClick={() => {}}>Delete Account</Button>
        </div>
      </div>
    </ModalWithState>
  ),
};

const ControlledModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Button variant="outline" onClick={() => setIsOpen(false)}>Close Modal</Button>
      </div>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Controlled Modal"
      >
        <p className="text-secondary-600">
          This modal is controlled externally. You can programmatically open and close it.
        </p>
        <div className="mt-6 flex justify-end space-x-3">
          <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button onClick={() => setIsOpen(false)}>Confirm</Button>
        </div>
      </Modal>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledModal />,
}; 