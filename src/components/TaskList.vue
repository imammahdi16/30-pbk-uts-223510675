<template>
  <ul>
    <li
      v-for="task in filteredTasks"
      :key="task.text"
      class="task-item"
      @click="toggleDone(task)"
    >
      <!-- Checkbox to mark the task as done -->
      <input
        type="checkbox"
        v-model="task.done"
        @click.stop="toggleDone(task)"
      />
      <!-- Task text -->
      <span :class="{ done: task.done }">{{ task.text }}</span>
      <!-- Cancel button -->
      <button @click.stop.prevent="cancelTask(task)">Void</button>
      <!-- Delete button -->
      <button @click.stop.prevent="removeTask(task)">Delete</button>
    </li>
  </ul>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  tasks: Array,
  filter: String,
});

const emit = defineEmits(["toggle-done", "remove-task", "cancel-task"]);

const filteredTasks = computed(() => {
  if (props.filter === "unfinished") {
    return props.tasks.filter((task) => !task.done);
  }
  return props.tasks;
});

const toggleDone = (task) => {
  task.done = !task.done;
  emit("toggle-done", task);
};

const removeTask = (task) => {
  emit("remove-task", task);
};

// Fungsi baru untuk membatalkan tugas
const cancelTask = (task) => {
  // Mengatur ulang status tugas ke belum selesai
  task.done = false;
  // Emit event pembatalan tugas
  emit("cancel-task", task);
};
</script>

<style scoped>
.task-item {
  cursor: pointer;
}

.done {
  text-decoration: line-through;
}
</style>
