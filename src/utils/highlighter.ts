export class Highlighter {
    private target: HTMLElement | null = null;
    private highlightElement: HTMLElement;

    constructor() {
        this.highlightElement = document.createElement('div');
        this.highlightElement.className = 'highlight';
        this.highlightElement.style.viewTransitionName = 'highlighter';
    }

    public setTarget(target: HTMLElement | null) {
        if (this.target === target) return;
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                this.update(target);
            });
        } else {
            this.update(target);
        }
    }

    private update(target: HTMLElement | null) {
        this.target = target;
        if (this.target) {
            this.target.appendChild(this.highlightElement);
        } else {
            this.highlightElement.remove();
        }
    }

    public destroy() {
        this.highlightElement.remove();
        this.target = null;
    }
}