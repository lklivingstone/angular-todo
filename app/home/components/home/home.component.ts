import { Component } from '@angular/core';

import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons"

export interface Task {
  id: number;
  name: string;
  status: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  tasks = [
    {
      id: 1,
      name: "task 1",
      status: 'incomplete'
    },
    {
      id: 2,
      name: "task 2",
      status: 'complete'
    },
    {
      id: 3,
      name: "task 3",
      status: 'complete'
    }
  ]

  task: string = '';
  status: string = '';
  addError: boolean = false;
  updateStatus: string = '';
  editingId: number = -1;
  displayDelete: boolean = false;
  selectedFilter: string = 'All';

  faTrash = faTrash;
  faPencil = faPencil;

  uniqueStatuses(): string[] {
    return Array.from(new Set(this.tasks.map(task => task.status)));
  }

  onStatusFilterChange(event: any) {
    this.selectedFilter = event.target.value;
  }

  addTaskSubmit() {
    if (this.task !== '' && this.status !== '') {
      this.addError = false;
      this.tasks.push({
        id: this.tasks.length + 1,
        name: this.task,
        status: this.status
      })
      this.task = '';
      this.status = '';
    }
    else {
      this.addError = true;
    }
  }

  getTasks(): Task[] | null {
    if (this.selectedFilter === 'All') {
      return this.tasks;
    }
    else {
      return this.tasks.filter(task => {
        return task.status === this.selectedFilter
      });
    }
  }

  isEditing(id: number) {
    return this.editingId === id;
  }

  editTask(id: number) {
    this.updateStatus = '';
    if (this.editingId !== -1 && this.editingId === id) {
      this.editingId = -1;
    }
    else {
      this.editingId = id;
    }
  }

  updateTask(id: number) {
    const taskToUpdate = this.tasks.find(task => task.id === id);

    if (taskToUpdate) {
      taskToUpdate.status = this.updateStatus;
    } else {
      console.error('Task not found for id:', id);
    }

    this.updateStatus = '';
  }

  allowDrop(ev: any) {
    ev.preventDefault();
  }

  drag(ev: any) {
    console.log(ev.target.id);
    ev.dataTransfer.setData("id", ev.target.id);
    this.displayDelete = true;
  }

  dropInvalid(ev: any) {
    ev.preventDefault();
    this.displayDelete = false;
  }

  drop(ev: any) {
    ev.preventDefault();
    this.displayDelete = false;

    if (ev.target.id === "delete") {
      var data = ev.dataTransfer.getData("id");
      this.tasks = this.tasks.filter(task => task.id !== parseInt(data, 10));
      console.log(ev.target.id)
      console.log("yo")
    }
  }


}
