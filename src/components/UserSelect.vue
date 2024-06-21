<template>
  <div>
    <label for="user-select">Select User:</label>
    <select id="user-select" class="q-select" @change="handleChange">
      <option value="">--Choose a user--</option>
      <option
        v-for="user in users"
        :key="user.id"
        :value="user.id"
        class="q-option"
      >
        {{ user.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, watch } from "vue";

const props = defineProps({
  users: Array,
});

const emit = defineEmits(["select-user"]);

watch(() => props.selectedUser, (newValue, oldValue) => {
  console.log("Selected user changed:", newValue, oldValue);
  // Lakukan logika lain yang diperlukan ketika selectedUser berubah
});

const handleChange = (event) => {
  emit("select-user", event.target.value);
};
</script>

<style scoped>
.q-select {
  /* Style the select element */
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none; /* Remove default outline */
}

.q-option {
  /* Style the option elements */
  font-size: 14px;
  padding: 8px;
}
</style>
