# Local Legends Comic Shop

A modern comic shop website built with Astro and Sanity CMS, featuring a blog for comic news, reviews, and collectibles.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Start Sanity Studio
pnpm run studio
```

### Available Scripts

- `pnpm run dev` - Start Astro development server
- `pnpm run build` - Build for production
- `pnpm run studio` - Start Sanity Studio
- `pnpm run typecheck` - Run TypeScript checks
- `pnpm run typegen` - Generate Sanity types

## 📚 Documentation

### Content Creation

- **[Image Guidelines](docs/image-guidelines.md)** - Complete specifications for blog images and media
- **[Content Guidelines](docs/content-guidelines.md)** - Writing standards and publishing workflow _(Coming Soon)_

### Technical Documentation

- **[Development Setup](docs/development.md)** - Local development environment setup _(Coming Soon)_
- **[Deployment Guide](docs/deployment.md)** - Production deployment process _(Coming Soon)_

## 🏗️ Project Structure

```
├── src/
│   ├── components/     # Astro components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Astro pages
│   ├── schemaTypes/    # Sanity schema definitions
│   ├── structure/      # Sanity Studio structure
│   └── styles/         # Global styles
├── docs/               # Documentation
├── netlify/            # Netlify functions
└── public/             # Static assets
```

## 🎨 Tech Stack

- **Framework**: Astro
- **CMS**: Sanity
- **Styling**: Tailwind CSS
- **Deployment**: Netlify
- **Package Manager**: pnpm

## 📝 Naming Conventions

- **Repo/package**: kebab-case
- **Components/layouts**: PascalCase
- **Pages**: kebab-case
- **JS exports**: camelCase
- **CSS & assets**: kebab-case
- **Classes**: dashed (BEM allowed)

## 🔧 Environment Setup

1. Copy `.env.example` to `.env`
2. Add your Sanity project credentials
3. Add Marvel API keys for the Editor's Picks feature

## 📞 Support

For questions about content creation, see the [documentation](docs/README.md).
For technical issues, contact the development team.
