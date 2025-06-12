# THEME Guidelines - Deploy Test Company

## Brand Identity

**Company:** Deploy Test Company
**Industry:** Technology

## Color Palette

### Primary Colors

**Primary Brand Color**
- Hex: #000000
- RGB: rgb(0, 0, 0)
- Usage: Main brand color, CTAs, primary buttons, key interactive elements
- Hover state: #000000



### Accent Colors

**Light Accent**
- Hex: #666666
- Usage: Hover states, subtle backgrounds, glass effects

**Dark Accent**
- Hex: #000000
- Usage: Text on light backgrounds, borders, shadows

### Neutral Colors

**Background Colors**
- Pure White: #FFFFFF - Main content backgrounds
- Off White: #FAFAFA - Section alternating backgrounds
- Light Gray: #F5F5F5 - Card backgrounds, subtle divisions

**Text Colors**
- Primary Text: #1A1A1A - Main body text
- Secondary Text: #666666 - Subtitles, meta information
- Light Text: #FFFFFF - Text on dark backgrounds

## Typography

### Font Style: modern

**Primary Font Stack**
- Headings: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- Body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- Font weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Type Scale

**Headings**
- H1: 3.5rem (56px) - Bold (700), Line height: 1.2
- H2: 2.5rem (40px) - Semibold (600), Line height: 1.3
- H3: 2rem (32px) - Semibold (600), Line height: 1.4
- H4: 1.5rem (24px) - Medium (500), Line height: 1.5
- H5: 1.25rem (20px) - Medium (500), Line height: 1.5
- H6: 1.125rem (18px) - Medium (500), Line height: 1.5

**Body Text**
- Large: 1.125rem (18px) - Regular (400), Line height: 1.7
- Regular: 1rem (16px) - Regular (400), Line height: 1.6
- Small: 0.875rem (14px) - Regular (400), Line height: 1.5

## Design Style: minimal

### Glassmorphism Effects

**Primary Glass Effect**
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
```

**Card Glass Effect**
```css
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.3);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
border-radius: 16px;
```

**Subtle Glass Effect**
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.25);
```

### Animation Guidelines

**Transition Timing**
- Default: 300ms ease-in-out
- Hover effects: 200ms ease-out
- Page transitions: 500ms ease-in-out
- Scroll animations: 800ms cubic-bezier(0.4, 0, 0.2, 1)

**Hover Effects**
- Buttons: Scale(1.05) and darken background
- Cards: TranslateY(-4px) and enhance shadow
- Links: Color transition with underline animation
- Images: Scale(1.05) with overflow hidden

**Scroll Animations**
- Fade in from bottom: opacity 0→1, translateY(20px)→0
- Fade in from sides: opacity 0→1, translateX(±30px)→0
- Scale in: opacity 0→1, scale(0.95)→1
- Stagger delay: 100ms between elements

### Component Patterns

**Navigation Bar**
- Glass effect with subtle blur
- Fixed/sticky positioning
- Height: 80px desktop, 64px mobile
- Logo left, menu items right
- Mobile: Hamburger menu with slide-in drawer

**Hero Section**
- Full viewport height with scroll indicator
- Large heading with gradient text option
- Subtle background pattern or gradient
- Floating glass elements for depth
- Parallax scrolling effects

**Content Cards**
- Glass morphism with white/transparent background
- 16px border radius
- Padding: 32px desktop, 24px mobile
- Hover: Lift effect with enhanced shadow
- Image cards: Aspect ratio 16:9 or 4:3

**Buttons**
- Primary: Solid fill with brand color
- Secondary: Glass effect with border
- Padding: 16px 32px
- Border radius: 8px
- Font weight: 500
- Text transform: none (sentence case)

**Forms**
- Glass card container
- Input fields: White background, subtle border
- Focus state: Brand color border with glow
- Labels: Above fields, smaller font size
- Validation: Inline with color indicators

### Spacing System

**Base Unit: 8px**

- xs: 4px (0.5x)
- sm: 8px (1x)
- md: 16px (2x)
- lg: 24px (3x)
- xl: 32px (4x)
- 2xl: 48px (6x)
- 3xl: 64px (8x)
- 4xl: 96px (12x)

**Container**
- Max width: 1200px
- Padding: 24px mobile, 32px tablet, 40px desktop
- Section spacing: 80px mobile, 120px desktop

### Visual Effects

**Shadows**
- Subtle: 0 2px 4px rgba(0, 0, 0, 0.05)
- Regular: 0 4px 16px rgba(0, 0, 0, 0.1)
- Elevated: 0 8px 32px rgba(0, 0, 0, 0.15)
- Glow: 0 0 40px rgba(brand-color, 0.3)

**Gradients**
- Primary gradient: Linear 135deg from brand color to accent
- Background gradient: Subtle radial from white to off-white
- Text gradient: For special headings only

**Background Patterns**
- Subtle dot grid: 1px dots, 24px spacing, 5% opacity
- Gradient mesh: Soft color blobs with blur
- Geometric shapes: Large, subtle, positioned absolutely
- Noise texture: Very subtle grain overlay

### Motion Principles

1. **Purpose**: Every animation should enhance UX, not distract
2. **Performance**: Use CSS transforms and opacity only
3. **Timing**: Natural easing, avoid linear transitions
4. **Subtlety**: Less is more - keep animations refined
5. **Consistency**: Same timing functions throughout

### Responsive Design

**Breakpoints**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large: > 1440px

**Mobile Considerations**
- Larger touch targets (min 44px)
- Simplified navigation
- Stack content vertically
- Reduce visual effects for performance
- Increase font sizes slightly

### Accessibility

- Maintain WCAG AA contrast ratios
- Focus states clearly visible
- Reduced motion option
- Semantic HTML structure
- ARIA labels where needed

### Performance Guidelines

- Optimize images (WebP with fallbacks)
- Lazy load below-the-fold content
- Minimize glass effects on mobile
- Use CSS containment for animations
- Implement progressive enhancement