<template>
    <div>
      <h1>Posts</h1>
      <UserSelect :users="users" @select-user="selectUser" />
      <PostList :posts="filteredPosts" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import UserSelect from '../components/UserSelect.vue';
  import PostList from '../components/PostList.vue';
  
  const users = ref([]);
  const posts = ref([]);
  const selectedUser = ref(null);
  
  const selectUser = async (userId) => {
    selectedUser.value = userId;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    posts.value = await response.json();
  };
  
  const filteredPosts = computed(() => {
    return selectedUser.value ? posts.value : [];
  });
  
  onMounted(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    users.value = await response.json();
  });
  </script>
  