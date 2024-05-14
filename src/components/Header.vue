<template>
  <header>
    <nav>
      <ul>
        <li @click="navigate('todos')">Todos</li>
        <li @click="navigate('posts')">Posts</li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["navigate"]);

const navigate = (section) => {
  emit("navigate", section);
};
</script>

<style scoped>
nav ul {
  display: flex;
  list-style-type: none;
  padding: 0;
}

nav li {
  margin-right: 20px;
  cursor: pointer;
}
</style>
