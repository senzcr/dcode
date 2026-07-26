export class Table extends HTMLElement {
    constructor() {
        super();
        
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        const headers = this.dataset.headers.split(",").map(header => header.trim());
        
        console.log(headers);
        
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/components/Table.css" />
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