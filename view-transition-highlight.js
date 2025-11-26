class i {
  target = null;
  highlightElement;
  constructor() {
    this.highlightElement = document.createElement("div"), this.highlightElement.className = "highlight", this.highlightElement.style.viewTransitionName = "highlighter";
  }
  setTarget(t) {
    this.target !== t && (document.startViewTransition ? document.startViewTransition(() => {
      this.update(t);
    }) : this.update(t));
  }
  update(t) {
    this.target = t, this.target ? this.target.appendChild(this.highlightElement) : this.highlightElement.remove();
  }
  destroy() {
    this.highlightElement.remove(), this.target = null;
  }
}
export {
  i as Highlighter
};
