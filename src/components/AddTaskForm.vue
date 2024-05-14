<template>
  <form @submit.prevent="submitTask">
    <input
      type="text"
      v-model="newTask"
      placeholder="Add a new task"
      id="taskInput"
      name="taskInput"
    />
    <button type="submit">Add</button>
  </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const newTask = ref("");
const emit = defineEmits(["add-task"]);

const submitTask = () => {
  if (newTask.value.trim()) {
    emit("add-task", newTask.value);
    newTask.value = "";
  }
};
</script>
