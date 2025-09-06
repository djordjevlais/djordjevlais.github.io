# Favicon Setup

Place your favicon files in this directory:

- `favicon.ico` - Traditional favicon (32x32)
- `favicon-16x16.png` - 16x16 PNG
- `favicon-32x32.png` - 32x32 PNG
- `apple-touch-icon.png` - 180x180 for iOS
- `android-chrome-192x192.png` - Android Chrome 192x192
- `android-chrome-512x512.png` - Android Chrome 512x512

Then add these to your `<head>` section in the base layout:

```html
<link rel="icon" type="image/x-icon" href="/assets/images/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png">
<link rel="manifest" href="/assets/images/site.webmanifest">
```

You can generate favicons using tools like:
- https://favicon.io/
- https://realfavicongenerator.net/
- https://www.favicon-generator.org/
