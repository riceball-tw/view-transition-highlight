(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();class u{target=null;highlightElement;constructor(){this.highlightElement=document.createElement("div"),this.highlightElement.className="highlight",this.highlightElement.style.viewTransitionName="highlighter"}setTarget(t){this.target!==t&&(document.startViewTransition?document.startViewTransition(()=>{this.update(t)}):this.update(t))}update(t){this.target=t,this.target?this.target.appendChild(this.highlightElement):this.highlightElement.remove()}destroy(){this.highlightElement.remove(),this.target=null}}document.querySelector("#app").innerHTML=`
  <div>
    <h1>View Transition Highlight</h1>
    <button id="shuffle-button">Shuffle Cards</button>
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
`;const l=document.documentElement;let a=240;setInterval(()=>{a=(a+1)%360;const n=`hsl(${a}, 100%, 60%)`;l.style.setProperty("--primary",n),l.style.setProperty("--highlight-border",n)},10);const d=document.getElementById("demo-container"),c=Array.from(d.querySelectorAll(".card")),p=document.getElementById("shuffle-button"),h=new u;h.setTarget(c[0]);c.forEach(n=>{n.addEventListener("click",()=>{h.setTarget(n)})});p?.addEventListener("click",()=>{function n(r){for(let i=r.length-1;i>0;i--){const e=Math.floor(Math.random()*(i+1));[r[i],r[e]]=[r[e],r[i]]}return r}const t=()=>{n([...c]).forEach(i=>{d.appendChild(i),Math.random()>.7?i.classList.add("expanded"):i.classList.remove("expanded")})};document.startViewTransition?document.startViewTransition(t):t()});
