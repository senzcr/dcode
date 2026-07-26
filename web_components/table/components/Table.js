export class Table extends HTMLElement {
    constructor() {
        super();
        
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            
        `;
    }
}