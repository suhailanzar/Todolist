import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  todolist: string[] = [];
  newtask: string = '';
  finishedtask: string[] = [];
  sametask:string = ''

  addTodo() {
    if (this.newtask.trim() !== '') {
      const taskExists = this.todolist.includes(this.newtask);
      if (taskExists) {
        this.sametask = 'Task already exists!';
        setTimeout(() => {
         this.sametask = '';
        }, 2000);
       
      } else {
        this.todolist.push(this.newtask);
        this.newtask = '';
        this.sametask = ''; 
      }
    }
  }
  


  removeTodo(index: number) {
    this.todolist.splice(index, 1);
  }

  completedtodo(index:number){

    this.finishedtask.push(this.todolist[index])
    this.todolist.splice(index, 1);


  }

  removeTodoFromFinished(index:number){
    this.finishedtask.splice(index,1)
  }
}