---
name: Obsidian Red
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e1bfbb'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a88a86'
  outline-variant: '#59413e'
  surface-tint: '#ffb4ac'
  primary: '#ffb4ac'
  on-primary: '#690007'
  primary-container: '#991b1b'
  on-primary-container: '#ffaaa1'
  inverse-primary: '#b02d29'
  secondary: '#c8c6c5'
  on-secondary: '#303030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#ffb3ad'
  on-tertiary: '#68000a'
  tertiary-container: '#a10016'
  on-tertiary-container: '#ffaaa3'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ac'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#8e1214'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1b1c'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930013'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  surface-obsidian: '#060606'
  surface-charcoal: '#11131c'
  surface-raised: '#1e212b'
  border-subtle: '#2e3039'
  text-primary: '#ffffff'
  text-secondary: '#9ca3af'
  glow-red: rgba(153, 27, 27, 0.15)
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is built for technical audiences, developers, and researchers. It bridges the gap between high-end enterprise software and cutting-edge laboratory tools. The aesthetic is rooted in **Modern Minimalism** with a **Technical** edge, characterized by deep obsidian surfaces, crisp geometry, and high-contrast accents.

The visual narrative centers on "Precision through Darkness." By utilizing a nearly monochromatic dark palette, the interface recedes to let code, data, and logic take center stage. The introduction of a deep red accent shifts the mood from the typical "friendly" tech aesthetic to something more authoritative, powerful, and focused.

Key style principles:
- **Zero-Gravity Depth:** Using tonal layers and subtle glows rather than traditional shadows to suggest hierarchy.
- **Data-First Density:** Information-rich layouts that remain legible through generous line-heights and systematic spacing.
- **Kinetic Accents:** Strategic use of red for "live" states, primary interactions, and critical feedback loops.

## Colors

The palette is anchored in a true-black foundation (`#060606`) to ensure maximum contrast for technical content and deep black levels on OLED displays. 

- **Primary Red:** `#991b1b` is the core action color. It should be used sparingly for primary buttons, active navigation states, and branding elements.
- **Secondary Surfaces:** We use varying degrees of desaturated blue-grays (`#11131c`) to create logical separation between sidebars, code editors, and main content areas.
- **Functional Red:** A brighter `#ef4444` is reserved for error states or destructive actions to ensure they are visually distinct from the brand primary red.
- **The Glow:** To soften the technical "hardness," use the `glow-red` token for subtle radial gradients behind key components or as a 1px outer glow on active primary elements.

## Typography

This system uses a dual-font approach to balance personality with utility.

**Plus Jakarta Sans** is used for headings and display text. Its slightly geometric and open counters provide a modern, approachable feel to technical titles.

**Inter** is the workhorse for all UI elements, body copy, and labels. It is chosen for its exceptional legibility at small sizes and its "systematic" look that developers find familiar.

For code blocks and technical metadata, **JetBrains Mono** (or a similar monospace font) should be used to maintain the technical rigor of the design system. 

**Application Rules:**
- Keep tracking tight on large headings (`-0.02em`) to maintain a "locked-in" technical feel.
- Use uppercase labels for small metadata and section headers to create a rhythmic hierarchy.

## Layout & Spacing

The layout follows a **Fluid Grid** model with strict horizontal constraints to ensure readability of documentation and code.

- **Desktop (1280px+):** A 12-column grid with 24px gutters. Sidebars should be fixed (280px - 320px) while the main content area remains fluid up to the max-width.
- **Tablet:** 8-column grid with 24px margins. Sidebars typically collapse into a drawer or top-level navigation.
- **Mobile:** 4-column grid with 16px margins. Vertical stacking is mandatory for all components.

The spacing rhythm is built on a 4px baseline. All component padding and margins should be increments of 4 (8, 12, 16, 24, 32, etc.). Use "Stack" spacing for vertical flow between content blocks and "Gutter" spacing for horizontal separation between elements in a row.

## Elevation & Depth

In this system, depth is communicated through **Tonal Layers** and **Subtle Outlines** rather than heavy shadows.

- **Level 0 (Base):** `#060606` – Used for the background of the entire application.
- **Level 1 (Cards/Containers):** `#11131c` – Used for primary content containers. These should have a 1px border of `#2e3039`.
- **Level 2 (Popovers/Modals):** `#1e212b` – Higher contrast surfaces that appear to float. These are the only elements that receive a subtle, 15% opacity black shadow to provide a hint of separation.
- **Interactive State:** When an element is focused or active, use a 1px border of the `primary_color` (#991b1b) instead of a thick focus ring. A very soft, 4px blur "red glow" can be applied behind primary buttons to simulate a powered-on LED.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a subtle nod to modern hardware design (like a smartphone or a server rack) without feeling overly "bubbly" or consumer-grade.

- **Small Components:** Checkboxes, tags, and small buttons use the 0.25rem radius.
- **Large Components:** Cards and modals use `rounded-lg` (0.5rem) to provide a clear frame for internal content.
- **Interactive Surfaces:** Keep corners consistent across all inputs to ensure the "grid" feel of the UI is maintained.

## Components

### Buttons
- **Primary:** Solid `#991b1b` background with white text. High-contrast, no shadow.
- **Secondary:** Transparent background with a `#2e3039` border. On hover, the border brightens to white or the primary red.
- **Ghost:** Text-only with no border, used for secondary actions in dense layouts.

### Input Fields
- Dark backgrounds (`#060606`) with a 1px border of `#2e3039`. 
- On focus, the border changes to the primary red and a very faint red glow is applied.
- Labels are positioned above the field in `label-md` style.

### Cards
- Surfaces use `#11131c` with a 1px border of `#2e3039`.
- No shadows are used for standard cards.
- Title should be in `headline-md` or `body-lg` bold.

### Chips & Tags
- Used for metadata and status.
- Background: `#1e212b`.
- Border: `#2e3039`.
- Text: `body-sm` weight 500.
- For active "Live" tags, include a small 6px circular indicator in the primary red.

### Lists & Navigation
- Vertical nav items use a red vertical bar (2px width) on the left side to indicate the active state.
- Hover states should use a subtle background shift to `#1e212b`.

### Code Blocks
- Background should be slightly darker or distinct from the main surface (`#0d0f14`).
- Use subtle syntax highlighting that complements the red accent (pinks, grays, and whites).