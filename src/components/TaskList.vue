<template>
  <q-list bordered>
    <q-item v-for="(task, index) in filteredTasks" :key="task.text">
      <q-item-section>
        <q-checkbox
          v-model="task.done"
          :label="task.text"
          @click.stop="toggleDone(task)"
        />
      </q-item-section>
      <q-item-section>
        <q-btn
          color="negative"
          icon="delete"
          @click.stop.prevent="removeTask(task)"
        />
        <q-btn
          color="warning"
          icon="cancel"
          @click.stop.prevent="cancelTask(task)"
        />
      </q-item-section>
    </q-item>
  </q-list>
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
