<template>
  <section>
    <h1>Todo List</h1>
    <AddTaskForm @add-task="addTask">
      <template #extra-button>
        <button class="clear-button" @click="clearTasks">
          Clear All Tasks
        </button>
      </template>
    </AddTaskForm>
    <TaskList
      :tasks="tasks"
      :filter="currentFilter"
      @toggle-done="toggleDone"
      @remove-task="removeTask"
      @cancel-task="cancelTask"
    />
    <div class="filter-buttons">
      <button class="filter-button" @click="setFilter('all')">All</button>
      <button class="filter-button" @click="setFilter('unfinished')">
        Unfinished
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import AddTaskForm from "./components/AddTaskForm.vue";
import TaskList from "./components/TaskList.vue";

const tasks = ref([]);
const currentFilter = ref("all");

const addTask = (task) => {
  tasks.value.push({ text: task, done: false });
};

const clearTasks = () => {
  tasks.value = [];
};

const toggleDone = (task) => {
  const foundTask = tasks.value.find((t) => t.text === task.text);
  if (foundTask) {
    foundTask.done = !foundTask.done;
  }
};

const removeTask = (task) => {
  tasks.value = tasks.value.filter((t) => t.text !== task.text);
};

const cancelTask = (task) => {
  const foundTask = tasks.value.find((t) => t.text === task.text);
  if (foundTask) {
    foundTask.done = false;
  }
};

const setFilter = (filter) => {
  currentFilter.value = filter;
};
</script>

<style src="./style.css"></style>
