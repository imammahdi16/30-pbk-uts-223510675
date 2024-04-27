<template>
  <div class="task-filter-buttons">
    <button @click="$emit('change-filter', 'all')">All</button>
    <button @click="$emit('change-filter', 'unfinished')">Unfinished</button>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["change-filter"]);
</script>
