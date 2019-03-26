import {LitElement, html} from 'lit-element/lit-element.js';

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