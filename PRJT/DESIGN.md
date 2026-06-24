---
name: Proactive Financial Guardian
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#424750'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#737781'
  outline-variant: '#c3c6d1'
  surface-tint: '#335f99'
  primary: '#003466'
  on-primary: '#ffffff'
  primary-container: '#1a4b84'
  on-primary-container: '#93bcfc'
  inverse-primary: '#a6c8ff'
  secondary: '#006492'
  on-secondary: '#ffffff'
  secondary-container: '#58bcfd'
  on-secondary-container: '#004a6d'
  tertiary: '#522900'
  on-tertiary: '#ffffff'
  tertiary-container: '#733c00'
  on-tertiary-container: '#f7a967'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a6c8ff'
  on-primary-fixed: '#001c3b'
  on-primary-fixed-variant: '#144780'
  secondary-fixed: '#cae6ff'
  secondary-fixed-dim: '#8ccdff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004b6f'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Noto Sans KR
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Sans KR
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Noto Sans KR
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Noto Sans KR
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Noto Sans KR
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  label-lg:
    fontFamily: Noto Sans KR
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  display-lg-mobile:
    fontFamily: Noto Sans KR
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 42px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-mobile: 20px
  container-padding-desktop: 40px
  gutter: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system is engineered for the "1-Second Tax Assistant," a service dedicated to Korean small business owners. The personality is a blend of **unshakable professional authority** and **approachable warmth**, personified by the mascot 'Seboki'. 

The aesthetic is **Warm Minimalism**. It strips away the complexity of tax law to present only what is necessary, using heavy whitespace to reduce cognitive load. By combining high-contrast elements with large, touch-friendly targets, the UI ensures accessibility for middle-aged users who require clarity and speed. The experience should feel like a conversation with a trusted, tech-savvy accountant: efficient, optimistic, and entirely dependable.

## Colors
This design system utilizes a high-contrast palette to ensure legibility and convey financial stability.
- **Primary (Deep Blue):** Used for global navigation, primary actions, and headers to instill a sense of institutional trust and security.
- **Secondary (Friendly Blue-Green):** Applied to growth indicators, successful status messages, and secondary interactive elements to represent financial health.
- **Accent (Gold/Yellow):** Reserved for the mascot 'Seboki', critical alerts, and '1-second' highlight moments. It provides a warm, human touch to the data-heavy environment.
- **Background:** An off-white (#F8F9FA) is used to reduce screen glare while maintaining a clean, modern dashboard feel.

## Typography
The typography system prioritizes **extreme legibility**. Noto Sans KR is chosen for its exceptional rendering of Hangul characters at various weights. 

Key constraints:
- **Minimum Size:** No body text shall fall below 16px to accommodate middle-aged users.
- **Contrast:** Maintain a minimum 4.5:1 contrast ratio for all textual information.
- **Hierarchy:** Use bold weights (700) for all primary data points (e.g., tax amounts, deadlines) to allow for quick scanning.
- **Spacing:** Increased line heights (minimum 1.5x) prevent text lines from crowding, facilitating easier reading.

## Layout & Spacing
The layout follows a **Fluid Grid with Generous Safe Zones**. 
- **Mobile:** A single-column layout is preferred for all forms and data entries to maintain focus. Padding is set to 20px to ensure thumbs don't accidentally trigger edge gestures.
- **Desktop/Tablet:** A 12-column grid is used for the dashboard, but content is capped at a 1200px max-width to prevent line lengths from becoming unreadable.
- **Rhythm:** An 8px base unit governs all dimensions. Vertical stack spacing is intentionally large (24px - 48px) to visually separate distinct financial sections, preventing the "wall of data" effect.

## Elevation & Depth
This design system uses **Tonal Layering and Soft Shadows** to define hierarchy without visual clutter.
- **Level 0 (Background):** Neutral off-white, flat.
- **Level 1 (Cards):** Pure white surfaces with a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.05)). This is the primary container for information.
- **Level 2 (Interactive/Floating):** Higher elevation shadow (0px 8px 30px rgba(0,0,0,0.1)) used for primary action buttons and the Seboki chat bubble.
- **Depth Cues:** 3D icons (glassmorphism style) are used sparingly to draw attention to specific financial categories like "VAT" or "Income Tax," adding a tactile feel to the digital interface.

## Shapes
The shape language is **Rounded and Friendly**. 
- **Main Components:** A radius of 0.5rem (8px) is the standard for cards and input fields, striking a balance between professional geometry and approachable soft edges.
- **Call to Action:** Primary buttons use `rounded-lg` (16px) to create a more inviting, "clickable" appearance.
- **Mascot Interaction:** Tooltips and speech bubbles from Seboki use `rounded-xl` (24px) to emphasize the character’s organic, soft nature.

## Components
- **Buttons:** Large-scale (minimum height 56px). Primary buttons use the Primary Deep Blue with white text. Secondary buttons use a light blue ghost style. All buttons include haptic feedback cues (visual state changes) when pressed.
- **Tax Cards:** White containers with a Primary Blue top-accent border. Key figures (tax to pay) are displayed in Display-LG size.
- **Input Fields:** Thick 2px borders in neutral gray, turning Primary Blue on focus. Labels are always persistent above the field (no floating labels) to ensure users never lose context.
- **The 'Seboki' Assistant:** A persistent floating action button in the bottom right. Upon interaction, it expands into a simple chat interface using the Accent Gold for message highlights.
- **Status Chips:** High-contrast background with bold text. Green for 'Paid', Gold for 'Pending', and Red for 'Overdue'.
- **Progress Steppers:** Thick lines and large circular nodes to guide business owners through multi-step tax filings without confusion.