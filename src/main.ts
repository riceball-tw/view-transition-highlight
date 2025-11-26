import './style.css'
import { Highlighter } from './utils/highlighter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>View Transition Highlight</h1>
    <button id="shuffle-button">Shuffle Cards</button>
    <a href="https://github.com/riceball-tw/view-transition-highlight">GitHub</a>
    <div class="grid-container" id="demo-container">
      <div class="card">
        <h3><span class="card-icon">✨</span> Interactive</h3>
        <p>Click any card to see the highlighter smoothly transition to it.</p>
      </div>
      <div class="card">
        <h3><span class="card-icon">📱</span> Responsive</h3>
        <p>The highlighter automatically adjusts its size and position.</p>
      </div>
      <div class="card">
        <h3><span class="card-icon">⚡</span> Performant</h3>
        <p>Uses View Transitions API for native 60fps animations.</p>
      </div>
      <div class="card">
        <h3><span class="card-icon">🌐</span> Framework Agnostic</h3>
        <p>Written in pure TypeScript, works with any DOM structure.</p>
      </div>
      <div class="card">
        <h3><span class="card-icon">📦</span> Zero Dependencies</h3>
        <p>No heavy libraries, just pure web standards.</p>
      </div>
      <div class="card">
        <h3><span class="card-icon">🎨</span> Customizable</h3>
        <p>Easy to style and configure to match your brand.</p>
      </div>
    </div>
  </div>
`
// Rainbow animation for primary color
const root = document.documentElement
let hue = 240
setInterval(() => {
  hue = (hue + 1) % 360
  const color = `hsl(${hue}, 100%, 60%)`
  root.style.setProperty('--primary', color)
  root.style.setProperty('--highlight-border', color)
}, 10)

const container = document.getElementById('demo-container') as HTMLElement
const cards = Array.from(container.querySelectorAll('.card')) as HTMLElement[]
const shuffleButton = document.getElementById('shuffle-button')
const highlighter = new Highlighter()

highlighter.setTarget(cards[0])

cards.forEach(card => {
  card.addEventListener('click', () => {
    highlighter.setTarget(card)
  })
})

shuffleButton?.addEventListener('click', () => {
  function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const updateDOM = () => {
    const shuffledCards = shuffleArray([...cards]);
    shuffledCards.forEach(card => {
      container.appendChild(card);
      // Randomly change card size (30% chance to expand)
      if (Math.random() > 0.7) {
        card.classList.add('expanded');
      } else {
        card.classList.remove('expanded');
      }
    });
  };

  if (document.startViewTransition) {
    document.startViewTransition(updateDOM);
  } else {
    updateDOM();
  }
});
