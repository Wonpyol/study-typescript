// let todoItems: object [] = [];
//타입 별칭
// type Todo = {
//   id: number;
//   title: string;
//   done: boolean;
// };
// let todoItems: Todo [] = [];
//interface
interface Todo {
  id: number;
  title: string;
  done: boolean;
}
let todoItems: Todo [] = [];

// api
function fetchTodoItems(): Todo[] {
  return [
    {id: 1, title: '안녕', done: false},
    {id: 2, title: '타입', done: false},
    {id: 3, title: '스크립트', done: false},
  ];
}

// crud methods
function fetchTodos(): Todo[] {
  return fetchTodoItems();
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo() : Todo {
  return todoItems[0];
}

function showCompleted(): Todo [] {
  return todoItems.filter(item => item.done);
}

function addTwoTodoItems() {
  addTodo({id: 9, title: '안녕', done: false});
  addTodo({id: 10, title: '안녕', done: false});
}

// NOTE: 유틸 함수
function log() {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
