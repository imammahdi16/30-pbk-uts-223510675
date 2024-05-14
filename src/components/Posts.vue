<template>
  <div>
    <select v-model="selectedUser" @change="fetchPosts">
      <option v-for="user in users" :key="user.id" :value="user.id">
        {{ user.name }}
      </option>
    </select>

    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const users = ref([]);
const posts = ref([]);
const selectedUser = ref(null);

const fetchUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  users.value = response.data;
};

const fetchPosts = async () => {
  if (selectedUser.value) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${selectedUser.value}`
    );
    posts.value = response.data;
  }
};

onMounted(fetchUsers);
</script>

<style scoped>
select {
  margin-bottom: 20px;
}
</style>
