import { Component, OnInit } from '@angular/core';

interface IProps {
  id: number,
  todo: string
}

@Component({
  selector: 'todo-component',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {


  todoText = 'Wanna do todo some app'
  todos: IProps[] = [
    { id: 11, todo: 'Just a young guy' },
    { id: 12, todo: 'With a quick fuse' },
    { id: 13, todo: 'I was uptight, wanna let loose' },
    { id: 14, todo: 'I was dreaming of bigger things' },
    { id: 15, todo: 'And wanna leave my own life behind' },
    { id: 16, todo: 'Not a "Yes, sir," not a follower' },
    { id: 17, todo: 'Fit the box, fit the mold' },
    { id: 18, todo: 'Have a seat in the foyer, take a number' },
    { id: 19, todo: 'I was lightning before the thunder' },
    { id: 20, todo: 'Thunder, thunder...' }
  ];

  currentTodo: string = ''

  handleOnChange = (event) => {
    this.currentTodo = event.target.value
  }

  handleAddTodo = () => {
    this.todos.push({id: this.todos[this.todos.length] ? this.todos[this.todos.length -1].id + 1 : 1, todo: this.currentTodo})
  }

  deleteTodo = (id) => {
    
    this.todos = this.todos.filter((todo) => todo.id != id)
  }

  ngOnInit() {
  }

}