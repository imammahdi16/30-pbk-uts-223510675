<template>
  <div class="task-filter-buttons">
    <q-btn @click="$emit('change-filter', 'all')" label="All" color="primary" />
    <q-btn @click="$emit('change-filter', 'unfinished')" label="Unfinished" color="primary" />
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["change-filter"]);
</script>
