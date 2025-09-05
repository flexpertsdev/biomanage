# Био Менидж - Modern Website

A modern, mobile-optimized, SEO-friendly website for BioManage built with Astro.

## 🚀 Features

- **Modern Tech Stack**: Built with Astro 4.0 for optimal performance
- **Mobile-First Design**: Fully responsive and optimized for all devices
- **SEO Optimized**: Complete meta tags, structured data, and sitemap
- **Performance**: Lazy loading, image optimization, and minimal JavaScript
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Multi-language Ready**: Prepared for Bulgarian and English content

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview the production build:
```bash
npm run preview
```

## 🏗️ Project Structure

```
/
├── public/
│   └── images/         # Static images and assets
├── src/
│   ├── components/     # Astro components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Page files
│   ├── data/           # Site configuration and data
│   ├── content/        # Content collections
│   └── styles/         # Global styles
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration
└── package.json        # Project dependencies
```

## 🎨 Design System

### Colors
- Primary: Green (#22c55e)
- Secondary: Red (#ef4444)
- Dark: #1a1a1a
- Light: #f5f5f5

### Typography
- Headings: Montserrat
- Body: Inter

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Environment Variables

No environment variables required for basic setup.

## 📝 Content Management

### Adding Services

Edit the services array in `src/components/Services.astro`

### Updating Contact Info

Edit `src/data/site.json`

### Adding Partners

Edit the partners array in `src/components/Portfolio.astro`

## 🔧 Performance Optimization

- Images are automatically optimized using `@astrojs/image`
- Lazy loading implemented for below-fold content
- Minimal JavaScript for maximum performance
- CSS is purged and minified in production

## 📊 Lighthouse Scores (Target)

- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## 🛠️ Technologies Used

- **Astro** - Static Site Generator
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **MDX** - Markdown with JSX support

## 📄 License

© 2024 Био Менидж. All rights reserved.

## 👥 Credits

Developed with ❤️ for BioManage
