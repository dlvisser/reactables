# Reactables GitHub Pages Site

This is the GitHub Pages site for the Reactables UI library. It serves as the main documentation and showcase for the Reactables components.

## What's Included

- **Landing Page**: Modern, responsive landing page showcasing the Reactables library
- **Component Showcase**: Interactive examples of all available components
- **Installation Guide**: Quick start guide for developers
- **Documentation**: Comprehensive documentation with code examples

## Features

- 🎨 **Modern Design**: Clean, professional design using Tailwind CSS
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast Loading**: Optimized for performance with CDN resources
- 🎯 **Accessible**: Built with accessibility in mind
- 📚 **Documentation**: Comprehensive component documentation with code examples
- 🌈 **Syntax Highlighting**: Beautiful code examples with Prism.js

## Structure

```
docs/
├── index.html          # Main landing page
├── styles.css          # Custom styles and animations
└── README-pages.md     # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework
- **Prism.js**: Syntax highlighting for code examples
- **Vanilla JavaScript**: Smooth scrolling and interactions

## Deployment

This site is automatically deployed to GitHub Pages using the workflow in `.github/workflows/static.yml`. The workflow:

1. Triggers on pushes to the `main` branch
2. Uses GitHub Pages deployment action
3. Deploys the static content to `https://dlvissser.github.io/reactables`

## Customization

To customize the site:

1. Edit `docs/index.html` for content changes
2. Modify `docs/styles.css` for styling updates
3. Update component examples to match your actual components
4. Commit and push changes to trigger automatic deployment

## Local Development

To preview the site locally:

1. Clone the repository
2. Navigate to the `docs` folder: `cd docs`
3. Open `index.html` in a web browser
4. Or serve with a local server:
   ```bash
   cd docs
   python -m http.server 8000
   # or
   npx serve .
   ```

## Contributing

To contribute to the site:

1. Make your changes to the HTML/CSS files
2. Test locally to ensure everything works
3. Commit with a conventional commit message
4. Push to trigger automatic deployment

## License

This site is part of the Reactables project and follows the same MIT license. 