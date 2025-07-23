# Contributing to Reactables

Thank you for your interest in contributing to Reactables! This document provides guidelines and information for contributors.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

- Use the GitHub issue tracker
- Include a clear and descriptive title
- Provide detailed steps to reproduce the bug
- Include browser/OS information
- Add screenshots if applicable

### Suggesting Enhancements

- Use the GitHub issue tracker
- Describe the enhancement clearly
- Explain why this enhancement would be useful
- Include mockups or examples if possible

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass (`npm test`)
6. Run linting (`npm run lint`)
7. Commit your changes using conventional commits
8. Push to the branch (`git push origin feature/amazing-feature`)
9. Open a Pull Request

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Start development: `npm run dev`
4. Start Storybook: `npm run storybook`

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Provide proper type definitions
- Use strict TypeScript configuration

### React

- Use functional components with hooks
- Use `React.forwardRef` for components that need refs
- Provide proper prop interfaces
- Use `displayName` for components

### Styling

- Use Tailwind CSS for styling
- Follow the design system
- Ensure accessibility (ARIA attributes, keyboard navigation)
- Test with screen readers

### Testing

- Write tests for all new components
- Use React Testing Library
- Aim for high test coverage
- Test accessibility features

### Documentation

- Update README.md if needed
- Add Storybook stories for new components
- Include JSDoc comments for complex functions
- Update component documentation

## Commit Message Format

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(button): add loading state prop
fix(input): resolve focus ring issue
docs(readme): update installation instructions
```

## Pull Request Guidelines

- Provide a clear description of changes
- Include screenshots for UI changes
- Link to related issues
- Ensure CI checks pass
- Request reviews from maintainers

## Getting Help

- Check existing issues and discussions
- Ask questions in GitHub Discussions
- Join our community chat (if available)

Thank you for contributing to Reactables! 🎉 