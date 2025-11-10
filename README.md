# Mark Daniel's Portfolio — Enhanced GoldenToppers Theme v2.0

A premium, highly interactive developer portfolio for Mark Daniel, Application Developer & IT Supervisor. Built with React 18, TypeScript, Vite, and Tailwind CSS with futuristic white-gold "GoldenToppers" theme (#d4af37) and sophisticated animations powered by Framer Motion.

## Project Status

- **Project Type**: React 18 + TypeScript Modern Web Application
- **Entry Point**: `src/main.tsx` (React application entry)
- **Build System**: Vite 7.0.0 (Fast development and build)
- **Styling System**: Tailwind CSS 3.4.17 (Atomic CSS framework with custom gold theme)
- **Animation Library**: Framer Motion 11.0.8 + Intersection Observer
- **Particle System**: react-tsparticles for dynamic backgrounds
- **Portfolio Owner**: Mark Daniel (Application Developer & IT Supervisor)
- **Theme Support**: Dark/Light mode with smooth transitions and localStorage persistence

## 🎨 Enhanced Features

### 1. **Dark/Light Mode Theme Toggle**
- Smooth sun↔moon morphing button in navbar
- Full color adaptation across all components
- localStorage persistence for user preference
- System preference detection on first load
- Seamless transitions (0.3s duration)

### 2. **Scroll-Based Animations**
- useIntersectionObserver hook for viewport entry animations
- Fade-up, slide-in, and staggered element reveals
- TriggerOnce option to animate once or repeat
- Scroll progress bar at top of page (gold gradient)
- Smooth scroll behavior for all navigation

### 3. **Advanced Hero Section**
- Typewriter effect for title animation
- Word-by-word fade-up for tagline
- 20 falling animated golden particles
- Floating gradient blobs with parallax motion
- Animated tech stack badges with hover effects
- Dual animated CTA buttons with scale & glow effects

### 4. **Micro-Interactions & Hover Effects**
- Card elevation on hover (whileHover={{ y: -8 }})
- Smooth scale transforms on interactive elements
- Golden glow shadow effects
- Icon rotation and bounce animations
- Smooth color transitions (300ms duration)
- Button scale-up on hover with shadow glow
- Input focus ring effects

### 5. **Cursor Glow Effect**
- CursorGlow component with mouse position tracking
- Blurred golden glow circle following cursor
- Spring-physics animation for smooth trailing
- Two-layer effect (filled glow + border circle)

### 6. **Dynamic Backgrounds**
- Particle wave system in hero (react-tsparticles)
- Interactive particles (repulse on hover, push on click)
- Color-adaptive particles (gold for dark, darker gold for light)
- Smooth background transitions between themes

### 7. **Interactive Components**
- **Projects**: Hover reveals tech stack and action buttons
- **Skills**: Hover scales skill dots, highlights category
- **About**: Animated counters with Intersection Observer
- **Experience**: Timeline with animated connector dots, pulse animation

### 8. **Text Animations**
- useTypewriter hook with customizable speed
- Staggered text reveal animations
- Animated section header underlines
- Word-by-word fade-in transitions

### 9. **Accessibility & Performance**
- Semantic HTML structure
- Viewport-based animation triggers (no unnecessary loops)
- Reduced motion support via CSS (prefers-reduced-motion)
- Touch-friendly hover states
- Optimized bundle: 326KB (gzipped: 97.38KB)

### 10. **Easter Egg**
- Developer console message with styled output
- Welcome message for curious developers
- Tech stack acknowledgment in console

## Tech Stack

### Core Framework
- **React**: 18.3.1
- **TypeScript**: 5.8.3 (strict mode)
- **Vite**: 7.0.0
- **TailwindCSS**: 3.4.17

### Animation & Interaction
- **Framer Motion**: 11.0.8 (motion components, gestures)
- **react-tsparticles**: 2.12.2 (particle effects)
- **tsparticles**: 2.12.0 (particle engine)

### State & Context
- **React Context API**: Theme management
- **Custom Hooks**: useIntersectionObserver, useTypewriter, useMousePosition

### UI & Icons
- **Lucide React**: Icon library

## Directory Structure

```
src/
├── components/
│   ├── About.tsx           # About section with counters
│   ├── ContactForm.tsx     # Contact form with theme support
│   ├── CursorGlow.tsx      # Cursor glow effect (NEW)
│   ├── Experience.tsx      # Timeline section
│   ├── Footer.tsx          # Footer with social links
│   ├── Hero.tsx            # Hero with typewriter & particles
│   ├── Navbar.tsx          # Navigation with theme toggle
│   ├── ParticleBackground.tsx  # Particle system (NEW)
│   ├── Projects.tsx        # Projects grid with hover reveals
│   ├── ScrollProgress.tsx  # Scroll progress bar (NEW)
│   └── Skills.tsx          # Skills grid with animations
├── contexts/
│   └── ThemeContext.tsx    # Dark/Light mode provider (NEW)
├── hooks/
│   ├── useIntersectionObserver.ts  # Scroll animation hook (NEW)
│   ├── useMousePosition.ts         # Cursor tracking hook (NEW)
│   └── useTypewriter.ts            # Typewriter effect hook (NEW)
├── data/
│   └── projects.json       # Project data (6 projects)
├── types/
│   └── index.ts            # TypeScript interfaces
├── App.tsx                 # Main app component with ThemeProvider
├── index.css               # Global styles
└── main.tsx                # Entry point with console Easter egg
```

## Color Palette (GoldenToppers Theme)

### Dark Mode (Default)
- **Primary Gold**: #d4af37
- **Background Primary**: #0f172a (slate-900)
- **Background Secondary**: #1e293b (slate-800)
- **Background Tertiary**: #334155 (slate-700)
- **Text Primary**: #ffffff
- **Text Secondary**: #d1d5db (gray-300)
- **Text Tertiary**: #9ca3af (gray-400)

### Light Mode
- **Primary Gold**: #b8860b (darker gold for contrast)
- **Background Primary**: #f8f7f3 (off-white)
- **Background Secondary**: #f1f0ed (slate-100)
- **Background Tertiary**: #e8e7e4 (slate-200)
- **Text Primary**: #111827 (slate-900)
- **Text Secondary**: #4b5563 (slate-700)
- **Text Tertiary**: #6b7280 (slate-600)

## Development Commands

```bash
# Install dependencies
npm install

# Build production (MANDATORY after changes)
npm run build

# Preview build
npm run preview
```

## Component Architecture

### Theme Context Provider
```typescript
<ThemeProvider>
  <App />
</ThemeProvider>
```
All components access theme via `useTheme()` hook for consistent dark/light mode.

### Custom Hooks

**useIntersectionObserver**
- Triggers animations when elements enter viewport
- Options: threshold, margin (root margin), triggerOnce
- Returns: `ref` for element, `isVisible` for animation state

**useTypewriter**
- Character-by-character text animation
- Parameters: text, speed (ms), startDelay
- Returns: displayedText

**useMousePosition**
- Tracks mouse X/Y position
- Returns: {x, y} object
- Used by CursorGlow component

## Performance Metrics

- **Bundle Size**: 326.69KB (gzipped: 97.38KB)
- **Build Time**: ~13-15 seconds
- **Module Count**: 2028 modules
- **CSS Output**: 33.20KB (gzipped: 5.81KB)
- **FPS Target**: 60fps animations
- **Mobile Responsive**: Full support from 320px+

## Animation Specifications

### Scroll Progress Bar
- Fixed at top of viewport
- Width animates from 0% to 100% on scroll
- Color: gradient from gold-500 to gold-400
- 200ms transition duration

### Hero Typewriter
- Title: 80ms per character
- Blinking cursor: 500ms pulse
- Tagline: Staggered 100ms per word
- Total intro time: ~3 seconds

### Card Hover Effects
- Y translation: -4px to -8px
- Spring physics: stiffness 300, damping 20
- Scale: 1.02 on certain elements
- Shadow: glow effect with theme-aware color

### Particle System
- 40 particles in viewport
- Movement speed: 1 px/frame
- Interaction: repulse on hover (200px radius)
- Links between particles: 150px distance, 0.2 opacity

## Deployment Ready

✅ Production build verified with zero errors
✅ TypeScript strict mode enabled
✅ Dark/Light mode fully functional
✅ Responsive design (320px - 4K)
✅ Accessibility standards met
✅ Performance optimized (97.38KB gzipped)
✅ Easter egg implemented
✅ Compatible with Vercel, GitHub Pages, Netlify

## Future Enhancements

1. **Modal Project Preview** - Click project to see detailed modal with screenshots
2. **Backend Integration** - API endpoint for contact form submissions
3. **Resume PDF Download** - Link in contact section
4. **Blog Section** - Markdown-based blog posts
5. **Testimonials** - Client/colleague feedback section
6. **Analytics** - Google Analytics integration
7. **Email Notifications** - Send confirmation emails on form submission
8. **3D Enhancements** - Three.js for 3D background effects (optional)
9. **Keyboard Shortcuts** - Quick navigation (Cmd+K for search)
10. **Mobile Menu Animations** - Enhanced mobile navigation

## Known Limitations

- Particle background reduced on mobile for performance
- Some animations disabled on devices with `prefers-reduced-motion`
- Console message only appears in browser devtools

## Important Notes

⚠️ **Critical Files**:
- `index.html` entry point line must remain: `<script type="module" src="/src/main.tsx"></script>`
- `tailwind.config.js` custom gold color palette
- `src/contexts/ThemeContext.tsx` manages all theme state
- `src/hooks/` custom animation hooks

📝 **Always run after changes**:
```bash
npm run build  # Verify production build works
```

## Configuration Files

- `tailwind.config.js` - Theme colors, fonts, animations, gold color scale
- `vite.config.ts` - Build configuration
- `tsconfig.json` - TypeScript strict mode enabled
- `postcss.config.js` - CSS processing
- `package.json` - Dependencies and scripts

---

**Portfolio Enhanced**: November 2025
**Last Updated**: November 6, 2025
**Version**: 2.0 - Interactive & Animated
**Status**: Production Ready ✨

