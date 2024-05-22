<template>
  <form @submit.prevent="submitTask">
    <input
      ref="taskInput"
      type="text"
      v-model="newTask"
      placeholder="Add a new task"
      id="taskInput"
      name="taskInput"
    />
    <button type="submit">Add</button>
    <slot name="extra-button"></slot>
    <!-- Slot untuk tombol tambahan -->
  </form>
</template>

<script setup>
import { ref, defineEmits, onMounted } from "vue";

const newTask = ref("");
const emit = defineEmits(["add-task"]);
const taskInput = ref(null);

const submitTask = () => {
  if (newTask.value.trim()) {
    emit("add-task", newTask.value);
    newTask.value = "";
    taskInput.value.focus(); // Fokus kembali ke input setelah submit
  }
};

// Mengatur fokus ke input saat komponen dipasang
onMounted(() => {
  if (taskInput.value) {
    taskInput.value.focus();
  }
});
</script>
