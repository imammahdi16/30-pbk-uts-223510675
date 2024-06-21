import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks')) || [
      { text: 'Learn Vue.js', done: false },
      { text: 'Build a project', done: false },
    ],
    filter: 'all',
  }),
  getters: {
    filteredTasks: (state) => {
      if (state.filter === 'all') {
        return state.tasks;
      } else if (state.filter === 'unfinished') {
        return state.tasks.filter((task) => !task.done);
      }
    },
  },
  actions: {
    addTask(task) {
      this.tasks.push({ text: task, done: false });
    },
    clearTasks() {
      this.tasks = [];
    },
    toggleDone(task) {
      task.done = !task.done;
    },
    removeTask(task) {
      this.tasks = this.tasks.filter((t) => t !== task);
    },
    cancelTask(task) {
      task.done = false;
    },
  },
});
