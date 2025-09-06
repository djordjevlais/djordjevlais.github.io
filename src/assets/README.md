# Assets Directory Structure

This directory contains all static assets for your Eleventy site.

## Directory Structure

```
src/assets/
├── css/          # Tailwind CSS source files
├── images/       # Images (will be optimized automatically)
├── js/           # JavaScript files
├── fonts/        # Web fonts
└── README.md     # This file
```

## Using Images

### Optimized Images (Recommended)
Use the `{% image %}` shortcode for automatic optimization:

```njk
{% image "profile.jpg", "Profile photo", "(max-width: 768px) 100vw, 50vw" %}
```

This will:
- Generate multiple sizes (300px, 600px, 900px, 1200px)
- Create modern formats (AVIF, WebP, JPEG)
- Add lazy loading
- Include responsive `sizes` attribute

### Responsive Images
Use `{% respImage %}` for simpler responsive images:

```njk
{% respImage "project-screenshot.jpg", "Project screenshot", "rounded-lg shadow-md" %}
```

### Direct Image References
For images that don't need optimization, place them in `src/assets/images/` and reference them directly:

```html
<img src="/assets/images/logo.svg" alt="Logo">
```

## JavaScript Files
Place JavaScript files in `src/assets/js/` and they'll be copied to `dist/assets/js/`.

## Fonts
Place font files in `src/assets/fonts/` and reference them in your CSS:

```css
@font-face {
  font-family: 'CustomFont';
  src: url('/assets/fonts/custom-font.woff2') format('woff2');
}
```

## Development
The build system watches for changes in all asset directories and will automatically rebuild when files are modified.
