export class Table extends HTMLElement {
    constructor() {
        super();
        
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Country</th>
                    </tr>
                </thead>
            </table>
        `;
    }
}