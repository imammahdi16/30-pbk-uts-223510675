<template>
    <div>
      <h1>Hammam Todos</h1>
      <TaskFilter @change-filter="changeFilter" />
      <AddTaskForm @add-task="addTask">
        <template #extra-button>
          <button class="clear-button" @click="clearTasks">
            Clear All Tasks
          </button>
        </template>
      </AddTaskForm>
      <TaskList
        :tasks="filteredTasks"
        @toggle-done="toggleDone"
        @remove-task="removeTask"
        @cancel-task="cancelTask"
      />
    </div>
  </template>
  
  <script setup>
  import { useTaskStore } from '../stores/taskStore';
  import { computed } from 'vue';
  import TaskFilter from '../components/TaskFilter.vue';
  import AddTaskForm from '../components/AddTaskForm.vue';
  import TaskList from '../components/TaskList.vue';
  
  const taskStore = useTaskStore();
  
  const changeFilter = (newFilter) => {
    taskStore.filter = newFilter;
  };
  
  const addTask = (task) => {
    taskStore.addTask(task);
  };
  
  const clearTasks = () => {
    taskStore.clearTasks();
  };
  
  const toggleDone = (task) => {
    taskStore.toggleDone(task);
  };
  
  const removeTask = (task) => {
    taskStore.removeTask(task);
  };
  
  const cancelTask = (task) => {
    taskStore.cancelTask(task);
  };
  
  const filteredTasks = computed(() => taskStore.filteredTasks);
  </script>
  