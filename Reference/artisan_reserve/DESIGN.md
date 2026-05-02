# Design System Document: The Editorial Bistro

This design system is a comprehensive framework for a premium cafe ordering experience. It moves away from the "app-like" utility of standard digital interfaces and toward the tactile, intentional world of high-end editorial design.

---

## 1. Overview & Creative North Star: "The Digital Sommelier"

The Creative North Star for this system is **The Digital Sommelier**. Every interaction should feel curated, knowledgeable, and rhythmic. Rather than a flat grid of products, the UI is treated like a physical, multi-layered menu at a Michelin-star bistro.

To break the "template" look, we employ:
*   **Intentional Asymmetry:** Avoid perfectly centered blocks. Use staggered layouts for product imagery to create a sense of movement.
*   **Editorial Scaling:** Dramatic contrast between large, elegant serif displays and functional, hyper-legible sans-serif details.
*   **Tonal Breathability:** Space is not "empty"; it is a luxury. We use generous white space to signify premium quality.

---

## 2. Colors & Surface Philosophy

The palette is rooted in organic, earthy tones—creams, charcoals, and muted naturals—that mimic the environment of a specialty coffee house.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section off content. Traditional "boxes" make an interface feel cramped and technical. Instead:
*   Define boundaries through **background color shifts**. Use `surface-container-low` for secondary sections and `surface-container-highest` for prominent sidebars.
*   Let the content breathe. The transition from `surface` (#fcf9f4) to `surface-container` (#f0ede9) is all the separation the eye needs.

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of fine, heavy-stock paper. 
*   **Base:** `surface` (#fcf9f4)
*   **Subtle Lift:** `surface-container-low` (#f6f3ee) for large background regions.
*   **Interactive Focus:** `surface-container-highest` (#e5e2dd) for cards or elements that require immediate attention.

### The "Glass & Gradient" Rule
To add "soul," use subtle gradients in CTAs. A primary button shouldn't just be flat `primary` (#7f5041); it should have a soft linear gradient transitioning from `primary` to `primary_container` (#9b6858) at a 45-degree angle. 

For floating cart summaries or navigation overlays, use **Glassmorphism**:
*   **Background:** `surface` at 80% opacity.
*   **Backdrop-blur:** 12px–20px.
*   This ensures the "warmth" of the coffee photography bleeds through the interface.

---

## 3. Typography

The system uses a sophisticated pairing: **Noto Serif** for brand authority and **Manrope** for modern, functional clarity.

*   **Display (Noto Serif):** Use `display-lg` and `display-md` for hero headings (e.g., "The Morning Roast"). The serif adds a "legacy" feel that suggests expertise.
*   **Headline (Noto Serif):** Use `headline-sm` for category titles (e.g., *Espresso & Tonic*).
*   **Title & Body (Manrope):** Use `title-md` for product names and `body-md` for descriptions. Manrope’s geometric nature ensures high legibility on mobile screens during a busy morning rush.
*   **Labels (Manrope):** Use `label-md` in all-caps with 0.05rem letter spacing for tags like "VEGAN" or "HOUSE BLEND" to create a structured, professional look.

---

## 4. Elevation & Depth

We achieve hierarchy through **Tonal Layering** and **Ambient Light**, never through heavy drop shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#f6f3ee) background. This creates a natural "pop" that feels high-end and subtle.
*   **Ambient Shadows:** When an element must float (like a modal), use a shadow with a blur radius of 40px and an opacity of 6%. The shadow color should be a tinted version of `on_surface` (#1c1c19), giving it a warm, natural depth rather than a cold grey "software" look.
*   **The "Ghost Border":** If a border is required for accessibility, use the `outline_variant` (#d6c2bd) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** Rounded `xl` (1.5rem), using the Primary-to-Container gradient. Text is `on_primary` (#ffffff).
*   **Secondary (Sage Accent):** Use `secondary` (#5a6052) for "Add to Cart" or "Customization" actions to differentiate from the main checkout flow.
*   **Tertiary:** Text-only in `primary` (#7f5041) with an underlined hover state.

### Cards & Menu Items
*   **Strict Rule:** No dividers. Separate menu items using `spacing.xl` (vertical white space).
*   **Styling:** Use `surface-container-low` for the card body. Image should have a `md` (0.75rem) corner radius, while the container uses `lg` (1.0rem) to create a nested, professional look.

### Input Fields
*   Background: `surface_container_highest`. 
*   No bottom line; use a soft `md` corner radius.
*   Focus state: A subtle "Ghost Border" of `primary` at 40% opacity.

### Selection Chips
*   Unselected: `surface_container_high` with `on_surface_variant`.
*   Selected: `tertiary` (#36645d) background with `on_tertiary` (#ffffff) text. Use the `full` (9999px) roundedness for a pill-shaped organic feel.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical margins. A product image might bleed off the right side of the screen to create an "infinite" editorial feel.
*   **Do** prioritize high-quality photography. The interface is a frame; the food/coffee is the art.
*   **Do** use "soft" motion. Transitions should be longer (300ms–500ms) with elegant easing (e.g., `cubic-bezier(0.4, 0, 0.2, 1)`).

### Don't
*   **Don't** use pure black (#000000). Always use `on_background` (#1c1c19) to maintain the "charcoal/coffee" warmth.
*   **Don't** use standard "Select" dropdowns. Use elegant bottom sheets or full-screen overlays with glassmorphism for a premium feel.
*   **Don't** overcrowd the screen. If a page feels busy, increase the spacing scale rather than adding lines or boxes.