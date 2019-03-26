import {LitElement, html} from 'lit-element/lit-element.js';
import './components/TodoItem.js';

export class Todo extends LitElement {

  static get properties() {
    return {
      list: {type: Array},
      todo: {type: String},
    };
  }

  constructor() {
    super();
    this.list = [
      this.todoItem('to-do-1'),
      this.todoItem('to-do-2')
    ];
    this.todo = '';
  }

  todoItem(todo) {
    return {todo}
  }

  createNewTodoItem() {
    this.list = [
      ...this.list,
      this.todoItem(this.todo)
    ];
    this.todo = '';
  }

  handleInput(e) {
    this.todo = e.target.value;
  }

  deleteItem(indexToDelete) {
    this.list = this.list.filter((toDo, index) => index !== indexToDelete);
  }

  render() {
    return html`
    <div>
        <h1>*** todo-app-lit-element ***</h1>
        <div>
            <h2>add to-do item</h2>
            <input type="text" .value=${this.todo} @input=${this.handleInput} />
            <button @click=${this.createNewTodoItem}>+</button>
        </div>

        <div>
          </br>
          <h2>to-do item list</h2>
          ${this.list.map((item, key) => {
              return html`
                <todo-item
                  item=${item.todo}
                  .deleteItem=${this.deleteItem.bind(this, key)}
                ></todo-item>
              `;
            }
          )}
        </div>
    </div>
    `;
  }
}

customElements.define('to-do', Todo);