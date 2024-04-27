<!-- app.vue -->
<template>
  <div id="app">
    <h1>Hammam To Do List</h1>
    <AddTaskForm @add-task="addTask" />
    <TaskList
      :tasks="tasks"
      @toggle-done="toggleDone"
      @remove-task="removeTask"
      @cancel-task="cancelTask"
      :filter="filter"
    />
    <TaskFilter @change-filter="changeFilter" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import AddTaskForm from "./components/AddTaskForm.vue";
import TaskList from "./components/TaskList.vue";
import TaskFilter from "./components/TaskFilter.vue";

const tasks = ref([]);
const filter = ref("all");

const addTask = (newTask) => {
  tasks.value.push({ text: newTask, done: false });
};

const toggleDone = (task) => {
  task.done = !task.done;
};

const removeTask = (taskToRemove) => {
  tasks.value = tasks.value.filter((task) => task !== taskToRemove);
};

const cancelTask = (taskToCancel) => {
  const index = tasks.value.indexOf(taskToCancel);
  if (index !== -1) {
    tasks.value[index].done = false;
  }
};

const changeFilter = (newFilter) => {
  filter.value = newFilter;
};
</script>
