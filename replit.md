# GTA San Andreas Modded Multi-Page Website

## Overview
A comprehensive, multi-page gaming website promoting a heavily-modded version of GTA San Andreas. Features modern dark aesthetic with neon accents, SEO optimization, responsive design, and complete legal framework.

## Project Purpose
This multi-page website is designed to:
- Promote the modded GTA San Andreas with enhanced graphics and new vehicles
- Drive downloads through compelling design, clear CTAs, and multiple mirrors
- Target both Indian (.in) and global (.one) audiences
- Rank for high-volume keywords: "gta san andreas download", "gta san andreas android download", "gta san andreas apk download", "mod apk", "free download", "windows 10"
- Provide comprehensive information, tutorials, and legal transparency

## Tech Stack
- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript (no frameworks)
- **Fonts**: Bebas Neue (GTA-style headers), Rajdhani (body text)
- **Icons**: Font Awesome 6.4.0
- **Server**: Python HTTP server on port 5000

## Site Structure

### Main Pages
1. **index.html** (Home) - Landing page with hero, features, gallery preview, tutorials, platform info, FAQ
2. **gallery.html** - Full screenshot gallery with filters (All, Graphics, Vehicles, Gameplay) and lightbox
3. **download.html** - Platform-specific downloads (PC/Android) with 3 mirrors each (Google Drive, MEGA, MediaFire)

### Legal Pages
4. **about.html** - About the modding community and mission
5. **contact.html** - Contact methods (email support, bug reports, suggestions)
6. **disclaimer.html** - Legal disclaimer and trademark notice
7. **privacy.html** - Privacy policy and data collection info
8. **terms.html** - Terms of service and user agreement

## Key Features Implemented

### SEO & Content
✅ Multi-keyword targeting (download, android, apk, mod apk, free, windows 10)
✅ Optimized meta titles and descriptions on all pages
✅ Semantic HTML structure with proper headings
✅ Alt text on all images
✅ 500K+ downloads, 4.8/5 rating showcased

### Navigation
✅ Consistent navigation across all 8 pages
✅ Active states on current page
✅ Legal dropdown menu with Terms, Privacy, Disclaimer
✅ Mobile-responsive with toggle button
✅ Smooth scroll on anchor links

### Home Page Sections
✅ Hero with stats (downloads, rating, vehicles)
✅ Features grid (6 feature cards with icons)
✅ Gallery preview (6 screenshots)
✅ **YouTube Tutorials** (3 video embeds - PC download, Android APK, Mods installation)
✅ **Platform Cards** (Windows PC and Android APK with feature lists)
✅ **Why Download** section (Free, Safe, Fast, Support)
✅ Download CTA linking to download.html
✅ System requirements (minimum and recommended)
✅ FAQ accordion (6 questions)
✅ Footer with legal links

### Gallery Page
✅ 21 screenshots (Screenshot 969-989.webp in assets/images folder)
✅ Filter buttons (All, Graphics, Vehicles, Gameplay)
✅ Responsive grid layout
✅ Lightbox with prev/next navigation
✅ Keyboard support (arrow keys, ESC)
✅ Lazy loading images

### Download Page
✅ Platform tabs (PC / Windows, Android APK)
✅ Download statistics cards (File Size, Security, Downloads, Rating)
✅ **3 download mirrors per platform**:
  - Google Drive (primary)
  - MEGA (mirror 1)
  - MediaFire (mirror 2)
✅ Platform-specific installation instructions
✅ System requirements
✅ Download FAQ
✅ Android APK special instructions

### Legal Pages
✅ Professional content on About, Contact, Disclaimer, Privacy, Terms
✅ Accessible through footer on all pages
✅ Accessible through Legal dropdown in main nav
✅ Contact methods (support, bugs, feedback emails)
✅ Trademark disclaimers
✅ Data privacy information
✅ User agreements

## Design Elements

**Color Palette:**
- Primary Background: #0a0a0a (deep black)
- Secondary Background: #1a1a1a
- Card Background: rgba(26, 26, 26, 0.8)
- Neon Cyan: #00ffff
- Neon Magenta: #ff00ff
- Electric Purple: #7c3aed
- Text Primary: #ffffff
- Text Secondary: #e5e5e5
- Text Muted: #a0a0a0

**Typography:**
- Headers: Bebas Neue (GTA-style, all caps)
- Body: Rajdhani (clean, modern, excellent readability)

## Interactive Features

### Lightbox Gallery
- Click any screenshot to view fullscreen
- Previous/Next navigation buttons
- Keyboard controls (←/→ arrows, ESC to close)
- Click outside to close
- Smooth transitions

### Platform Tabs
- Switch between PC and Android download sections
- Animated tab transitions
- Active tab highlighting
- Platform-specific content and instructions

### Gallery Filters
- Filter screenshots by category (All, Graphics, Vehicles, Gameplay)
- Smooth show/hide animations
- Active filter highlighting

### Mobile Menu
- Hamburger toggle button on all pages
- Slide-in navigation from right
- Click outside to close
- Dropdown menu for Legal pages (click to expand on mobile)

### Accordion
- Installation guide with expandable steps
- FAQ with expandable answers
- One active section at a time

### Navigation Dropdown
- Desktop: Hover to show Legal submenu
- Mobile: Click to toggle Legal submenu
- Smooth animations and transitions

## File Structure
```
├── index.html              # Home page
├── gallery.html           # Screenshot gallery with filters
├── download.html          # Platform downloads with mirrors
├── about.html             # About page
├── contact.html           # Contact page
├── disclaimer.html        # Legal disclaimer
├── privacy.html           # Privacy policy
├── terms.html             # Terms of service
├── styles.css             # Complete styling (1400+ lines)
├── script.js              # Interactive features (230 lines)
├── screenshots/           # Placeholder images for home page
│   ├── img1.jpg
│   ├── img2.jpg
│   ├── img3.jpg
│   ├── img4.jpg
│   ├── img5.jpg
│   └── img6.jpg
├── assets/
│   └── images/           # User's actual screenshots
│       ├── Screenshot (969).webp
│       ├── Screenshot (970).webp
│       ├── ... (971-988)
│       └── Screenshot (989).webp
└── replit.md             # This file
```

## SEO Optimization

### Target Keywords
Primary: "gta san andreas download"
Secondary: "gta san andreas android download", "gta san andreas apk download", "gta sa download", "download gta san andreas mod apk", "gta san andreas free download", "gta san andreas download windows 10", "gta san andreas mod apk download"

### On-Page SEO
- Title tags include primary and secondary keywords
- Meta descriptions optimized for click-through
- Keywords naturally integrated throughout content
- Semantic HTML structure (h1, h2, h3 hierarchy)
- Alt text on all images
- Fast loading with optimized assets
- Mobile-responsive (Google ranking factor)

## Running the Project
The project uses Python's built-in HTTP server:
```bash
python -m http.server 5000
```
Access at: http://localhost:5000 or via Replit's webview

## CSS Features
- Dark gaming theme with neon accents
- Glassmorphism effects
- Gradient backgrounds
- Smooth hover animations
- Responsive grid layouts
- Mobile-first design with @media queries
- Custom scrollbar styling
- Button hover effects with glow
- Card shadows and borders
- Dropdown menu animations
- Platform tab transitions
- Gallery filter transitions

## JavaScript Features
- Page-aware (checks if elements exist before using)
- Mobile menu toggle with outside-click-to-close
- Lightbox with keyboard navigation
- Accordion functionality
- Smooth scroll to sections
- Platform tab switching
- Gallery filter switching
- Dropdown menu toggle for mobile
- Intersection Observer for scroll animations
- No external dependencies

## Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- Lazy loading images in gallery
- CSS transitions (hardware accelerated)
- Minimal JavaScript
- No external frameworks (fast page load)
- Optimized for both desktop and mobile

## Accessibility
- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation support
- Clear focus states
- Sufficient color contrast
- Responsive font sizes

## Future Enhancements
- Region-specific content for .in vs .one domains
- Download analytics tracking
- User testimonials/reviews section
- Video trailer showcase
- Newsletter signup for updates
- Multiple language support (Hindi, Spanish, etc.)
- Integration with actual download tracking APIs
- User authentication system
- Comment system for community feedback

## Notes
- All gallery images are user-provided (Screenshot 969-989.webp)
- Home page uses placeholder images (screenshots/img1-6.jpg)
- Download links are placeholder (#) - replace with actual Google Drive, MEGA, MediaFire links
- YouTube video IDs are placeholders (YOUR_VIDEO_ID_1/2/3) - replace with actual videos
- Contact emails are examples - replace with actual support emails
- All pages are fully responsive and mobile-friendly
- Compatible with all modern browsers
- No database required (static site)

## Recent Changes

**November 14, 2024**
- Expanded from single-page to complete 8-page website
- Created separate gallery.html with 21 screenshots and filter functionality
- Created download.html with platform tabs (PC/Android) and 3 mirrors each
- Added legal pages (about, contact, disclaimer, privacy, terms)
- Expanded index.html with YouTube tutorials, platform sections, "Why Download" section
- Implemented consistent navigation with Legal dropdown across all pages
- Added mobile menu toggle with slide-in functionality
- Enhanced CSS with dropdown styles, platform tabs, tutorial cards, contact cards
- Refactored JavaScript to be page-aware and handle all interactive elements
- Optimized SEO targeting multiple high-volume keywords
- Added active states on all pages including legal dropdown submenu
- Tested and verified all navigation, links, and interactive features

## User Preferences
- Clean, organized code structure
- Dark gaming aesthetic with neon accents
- Mobile-first responsive design
- No comments in code (per user preference)
- Semantic HTML and accessibility-minded development
