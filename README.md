# Reactables

A modern, accessible React UI components library built with TypeScript and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, accessible components with a consistent design system
- 📦 **TypeScript**: Full TypeScript support with comprehensive type definitions
- 🎯 **Accessible**: Built with accessibility in mind, following WCAG guidelines
- 🚀 **Lightweight**: Tree-shakeable components with minimal bundle size
- 🎭 **Customizable**: Easy to customize with Tailwind CSS classes
- 📚 **Documented**: Comprehensive documentation with Storybook
- 🧪 **Tested**: Full test coverage with Jest and React Testing Library

## Installation

```bash
npm install reactables
# or
yarn add reactables
# or
pnpm add reactables
```

## Quick Start

```tsx
import { Button, Input, Card } from 'reactables';

function App() {
  return (
    <div className="p-6">
      <Card>
        <h2 className="text-xl font-semibold mb-4">Welcome to Reactables</h2>
        <Input 
          label="Email"
          placeholder="Enter your email"
          className="mb-4"
        />
        <Button variant="primary">
          Get Started
        </Button>
      </Card>
    </div>
  );
}
```

## Components

### Button
A versatile button component with multiple variants and sizes.

```tsx
import { Button } from 'reactables';

<Button variant="primary" size="md">
  Click me
</Button>
```

### Input
A form input component with support for labels, errors, and icons.

```tsx
import { Input } from 'reactables';

<Input 
  label="Email"
  placeholder="Enter your email"
  error="Please enter a valid email"
/>
```

### Card
A container component for grouping related content.

```tsx
import { Card } from 'reactables';

<Card padding="md" shadow="md">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

### Badge
A small component for displaying status or labels.

```tsx
import { Badge } from 'reactables';

<Badge variant="success" size="md">
  Success
</Badge>
```

### Avatar
A component for displaying user avatars or profile pictures.

```tsx
import { Avatar } from 'reactables';

<Avatar 
  src="/path/to/image.jpg"
  alt="User avatar"
  size="md"
/>
```

### Modal
A modal dialog component for overlaying content.

```tsx
import { Modal } from 'reactables';

<Modal 
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Modal Title"
>
  <p>Modal content goes here</p>
</Modal>
```

### Dropdown
A dropdown menu component.

```tsx
import { Dropdown } from 'reactables';

<Dropdown 
  trigger={<button>Open Menu</button>}
  isOpen={isDropdownOpen}
  onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
>
  <div className="p-2">
    <div className="px-4 py-2 hover:bg-secondary-100">Option 1</div>
    <div className="px-4 py-2 hover:bg-secondary-100">Option 2</div>
  </div>
</Dropdown>
```

### Tooltip
A tooltip component for showing additional information.

```tsx
import { Tooltip } from 'reactables';

<Tooltip content="This is a tooltip" position="top" show={showTooltip}>
  <button>Hover me</button>
</Tooltip>
```

## Styling

Reactables uses Tailwind CSS for styling. Make sure to include Tailwind CSS in your project:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Development

### Prerequisites

- Node.js 16+
- npm, yarn, or pnpm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/reactables.git
cd reactables
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Start Storybook:
```bash
npm run storybook
```

### Available Scripts

- `npm run build` - Build the library
- `npm run dev` - Build in watch mode
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📖 [Documentation](https://yourusername.github.io/reactables)
- 🐛 [Issues](https://github.com/yourusername/reactables/issues)
- 💬 [Discussions](https://github.com/yourusername/reactables/discussions) 