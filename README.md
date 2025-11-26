# Dynamic Highlight

A lightweight, framework-agnostic TypeScript utility that creates smooth, high-performance active state highlights using the modern **View Transitions API**.

## 🚀 The Problem

Animating a "highlight" or "active" indicator between different DOM elements is notoriously difficult in web development.

**Traditional challenges include:**
*   **Complex Math**: You typically have to calculate the `getBoundingClientRect` of the current and new target, compute the delta, and apply a FLIP (First, Last, Invert, Play) animation manually.
*   **Z-Index Wars**: Moving a highlight element often requires it to be a direct child of the `body` or a specific container to avoid `overflow: hidden` or stacking context issues.
*   **Performance**: JavaScript-driven animations can cause layout thrashing if not optimized perfectly.
*   **DOM Manipulation**: Manually appending/removing elements or changing `transform` properties can be messy to manage.

## 💡 The Solution

**Dynamic Highlight** solves these problems by leveraging the native **View Transitions API**.

Instead of manually calculating positions and animating pixels, this utility simply moves a highlighting DOM element from one parent to another. The browser's View Transition mechanism handles the magic: it takes a snapshot of the old state and the new state, and automatically interpolates the position and size of the highlighter element smoothly (at 60fps).

**Key Benefits:**
*   **Zero Dependencies**: Written in pure TypeScript.
*   **Native Performance**: Uses the browser's compositor thread via View Transitions.
*   **Framework Agnostic**: Works with React, Vue, Svelte, Vanilla JS, etc.
*   **Responsive**: Automatically adapts if the target element changes size (as seen in the "Shuffle" demo).

## 🛠️ Usage

### 1. Setup

Ensure you have the `Highlighter` class in your project (e.g., copied to `src/utils/Highlighter.ts`).

### 2. Initialize

Create an instance of the highlighter.

```typescript
import { Highlighter } from './utils/Highlighter';

const highlighter = new Highlighter();
```

### 3. Apply Styles

The highlighter creates a `div` with the class `highlight`. You must style this class to define how your highlighter looks.

```css
/* style.css */
.highlight {
  position: absolute;
  inset: 0; /* Fills the target element */
  background-color: rgba(0, 123, 255, 0.1);
  border: 2px solid #007bff;
  border-radius: 8px;
  pointer-events: none; /* Important: lets clicks pass through to the content */
  z-index: -1; /* Place behind text if needed */
  
  /* 
   * CRITICAL: view-transition-name must match what is set in Highlighter.ts
   * This tells the browser to track this specific element during transitions.
   */
  view-transition-name: highlighter;
}
```

### 4. Update Target

Whenever you want to move the highlight, call `setTarget` with the new DOM element.

```typescript
const items = document.querySelectorAll('.menu-item');

items.forEach(item => {
  item.addEventListener('click', (e) => {
    // Move the highlighter to the clicked element
    highlighter.setTarget(e.currentTarget as HTMLElement);
  });
});
```

## 📦 Installation & Running the Demo

This project uses **Vite** and **pnpm**.

1.  **Install dependencies:**
    ```bash
    pnpm install
    ```

2.  **Start the development server:**
    ```bash
    pnpm dev
    ```

3.  **Open the link** shown in your terminal (usually `http://localhost:5173`) to see the interactive demo.

## 🧪 Browser Support

This project relies on the **View Transitions API**.
*   Chrome / Edge 111+ (Supported)
*   Safari / Firefox (Check [Can I Use](https://caniuse.com/view-transitions) - may require a polyfill or fallback behavior).

The `Highlighter` class includes a graceful fallback: if `document.startViewTransition` is not supported, it simply moves the element instantly without crashing.
