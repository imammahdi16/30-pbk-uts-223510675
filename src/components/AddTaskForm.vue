<template>
  <q-form @submit.prevent="submitTask" class="task-form">
    <q-input
      ref="taskInput"
      v-model="newTask"
      placeholder="Add a new task"
      outlined
      dense
      id="taskInput"
      name="taskInput"
      class="task-input"
    />
    <q-btn type="submit" label="Add" color="primary" class="add-button" />
    <slot name="extra-button"></slot>
    <!-- Slot untuk tombol tambahan -->
  </q-form>
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

<style scoped>
.task-form {
  display: flex;
  flex-direction:column;
  align-items: center;
}

.task-input {
  width: 100%;
  max-width: 500px;
  margin-bottom: 8px;
}

.add-button {
  width: 100%;
  max-width: 300px;
  margin-top: 8px;
}
</style>
