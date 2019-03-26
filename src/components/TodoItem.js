import {LitElement, html} from 'https://unpkg.com/lit-element@2.0.0-rc.5/lit-element.js?module';

export class TodoItem extends LitElement {
  static get properties() {
    return {
      item: {type: String},
      deleteItem: {type: Function},
    };
  }

  render() {
    return html`
      <div>
        <span>${this.item}</span>
        <button @click=${this.deleteItem}>-</button>
      </div>
    `;
  }
}

customElements.define('todo-item', TodoItem);