# AGENTS.md - CuratePDF Landing Page Project Guide

## Project Overview

This is the landing page for **CuratePDF**, a professional PDF creation and automation tool. The project is built with **Astro** and uses **React** components with **Tailwind CSS** for styling.

### Key Product Information
- **Product Name**: CuratePDF
- **Primary Domain**: curatepdf.com
- **App Domain**: app.curatepdf.com
- **Core Value Proposition**: Professional PDF creation with drag-and-drop editor and API automation
- **Target Users**: Businesses, developers, and individuals needing automated document generation

## Technology Stack

- **Framework**: Astro 5.8.1
- **UI Library**: React 18.3.1
- **Styling**: Tailwind CSS 3.4.0
- **Authentication**: Clerk (for app integration)
- **Build Tool**: Vite (via Astro)
- **Language**: TypeScript

## Project Structure

```
pdf-landing/
├── src/
│   ├── pages/           # Astro pages (routing)
│   │   └── index.astro  # Main landing page
│   ├── components/      # Reusable components
│   │   ├── *.astro     # Astro components (server-side)
│   │   ├── *.tsx       # React components (client-side)
│   │   └── ui/         # UI component library
│   ├── layouts/        # Page layouts
│   │   └── Layout.astro # Main layout wrapper
│   ├── assets/         # Static assets managed by Astro
│   └── lib/           # Utility functions and helpers
├── public/            # Static assets (images, icons, etc.)
├── astro.config.mjs   # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── package.json       # Dependencies and scripts
```

## Coding Conventions

### File Naming
- **Astro components**: PascalCase with `.astro` extension (e.g., `Features.astro`)
- **React components**: PascalCase with `.tsx` extension (e.g., `ModernHeader.tsx`)
- **Pages**: lowercase with `.astro` extension (e.g., `index.astro`)
- **Utilities**: camelCase with `.ts` extension

### Component Architecture

#### Astro Components (.astro)
- Used for server-side rendered content
- Ideal for static sections like Features, Pricing, Footer
- Can include both frontmatter (JavaScript) and template sections
- Use for SEO-heavy content and static layouts

#### React Components (.tsx)
- Used for interactive, client-side functionality
- Require `client:load` directive in Astro files
- Use TypeScript interfaces for props
- Follow React functional component patterns with hooks

### Styling Guidelines

#### Tailwind CSS Usage
- **Primary Colors**: Blue-based palette (`blue-600`, `blue-700`)
- **Typography**: Inter font family as primary sans-serif
- **Spacing**: Consistent use of Tailwind spacing scale
- **Responsive Design**: Mobile-first approach with `md:` breakpoints

#### Custom Animations
- `fade-in`: 0.5s ease-in-out opacity transition
- `slide-up`: 0.5s ease-out upward slide with opacity
- `float`: 6s infinite floating animation
- `backdrop-blur-xs`: Custom 2px backdrop blur

#### Component Styling Patterns
```tsx
// Header with scroll-based styling
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled 
    ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm' 
    : 'bg-transparent'
}`}

// Button styling pattern
className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
```

### SEO and Accessibility Standards

#### SEO Requirements
- **Meta Tags**: Comprehensive title, description, keywords, and Open Graph tags
- **Structured Data**: Hidden content for search engines using `.sr-only` class
- **Image Optimization**: Proper alt text, titles, and loading attributes
- **Semantic HTML**: Use proper heading hierarchy and ARIA labels

#### Accessibility Features
- Skip-to-content links for keyboard navigation
- Proper ARIA labels and roles
- Focus management for interactive elements
- Screen reader friendly content structure

### Content Guidelines

#### Brand Voice
- **Professional yet approachable**
- **Focus on automation and efficiency benefits**
- **Emphasize ease of use and professional results**

#### Key Messaging Points
1. **Drag-and-drop PDF editor** - Intuitive interface
2. **Dynamic data binding** - Automation capabilities
3. **Professional templates** - Business-ready designs
4. **API integration** - Developer-friendly automation
5. **Scalable document generation** - Enterprise solutions

#### Call-to-Action Patterns
- Primary CTA: "Get Started" (links to app.curatepdf.com/signup)
- Secondary CTA: "Sign In" (links to app.curatepdf.com/login)
- Use action-oriented language focusing on immediate value

## Development Workflow

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Build Configuration
- **CSS Minification**: Enabled via Vite
- **HTML Compression**: Enabled
- **Inline Stylesheets**: Auto-optimization
- **Site URL**: https://dynamopdf.com (configured in astro.config.mjs)

### Performance Optimizations
- Image optimization with Astro's Image component
- Lazy loading for non-critical images
- CSS and JavaScript minification
- Backdrop blur effects for modern UI

## Component Integration Patterns

### Astro + React Integration
```astro
<!-- In Astro files -->
<ModernHeader client:load>
  <Image 
    slot="imageComponent" 
    src="/image.png" 
    alt="CuratePDF Logo" 
    width="70" 
    height="70" 
  />
</ModernHeader>
```

### Props Interface Pattern
```tsx
interface ComponentProps {
  imageComponent: React.ReactNode;
  // Other props with descriptive names
}
```

### State Management
- Use React hooks for component-level state
- Prefer `useState` and `useEffect` for simple interactions
- No global state management currently implemented

## Content Management

### Image Assets
- **Logo**: `/image.png` (70x70px)
- **Hero Image**: `/landingpic.png` (1200x800px)
- **Favicon**: Standard web favicon formats
- All images should have descriptive alt text and titles

### External Links
- **App Login**: https://app.curatepdf.com/login
- **App Signup**: https://app.curatepdf.com/signup
- **Main Site**: https://curatepdf.com/

## AI Agent Guidelines

### When Making Changes
1. **Maintain Brand Consistency**: Keep the professional, modern aesthetic
2. **Preserve SEO Structure**: Don't remove structured data or meta information
3. **Follow Accessibility Standards**: Maintain ARIA labels and semantic HTML
4. **Use Existing Patterns**: Follow established component and styling patterns
5. **Test Responsiveness**: Ensure changes work on mobile and desktop

### Common Tasks
- **Content Updates**: Modify text in components while preserving HTML structure
- **Styling Adjustments**: Use existing Tailwind classes and custom animations
- **Component Creation**: Follow the Astro/React hybrid pattern
- **SEO Optimization**: Update meta tags and structured content appropriately

### Avoid
- Breaking the Astro + React integration patterns
- Removing accessibility features
- Changing core brand messaging without context
- Introducing new dependencies without justification
- Modifying the build configuration without understanding implications

## Testing and Quality Assurance

### Manual Testing Checklist
- [ ] Mobile responsiveness (320px to 1920px)
- [ ] Scroll-based header behavior
- [ ] Mobile menu functionality
- [ ] All external links work correctly
- [ ] Images load with proper alt text
- [ ] Keyboard navigation works
- [ ] Page loads quickly (< 3s)

### Performance Targets
- **Lighthouse Score**: 90+ for all categories
- **Core Web Vitals**: Green scores for LCP, FID, CLS
- **Image Optimization**: WebP format when possible
- **Bundle Size**: Keep JavaScript minimal for landing page

---

This document should be updated as the project evolves. When making significant architectural changes, please update the relevant sections to maintain accuracy for future AI agents and developers. 