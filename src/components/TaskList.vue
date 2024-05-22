<template>
  <ul>
    <li
      v-for="task in filteredTasks"
      :key="task.text"
      class="task-item"
      @click="toggleDone(task)"
    >
      <input
        type="checkbox"
        v-model="task.done"
        @click.stop="toggleDone(task)"
      />
      <span :class="{ done: task.done }">{{ task.text }}</span>
      <button @click.stop.prevent="cancelTask(task)">Void</button>
      <button @click.stop.prevent="removeTask(task)">Delete</button>
    </li>
    <slot></slot>
  </ul>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from "vue";

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

const cancelTask = (task) => {
  emit("cancel-task", task);
};
</script>
