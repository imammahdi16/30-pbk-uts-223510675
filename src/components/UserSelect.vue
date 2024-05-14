<template>
  <div>
    <label for="user-select">Select User:</label>
    <select id="user-select" @change="handleChange">
      <option value="">--Choose a user--</option>
      <option v-for="user in users" :key="user.id" :value="user.id">
        {{ user.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  users: Array,
});

const emit = defineEmits(["select-user"]);

const handleChange = (event) => {
  emit("select-user", event.target.value);
};
</script>
