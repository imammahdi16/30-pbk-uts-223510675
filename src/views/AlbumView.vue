<template>
    <div>
      <h1>Albums</h1>
      <ul>
        <li v-for="album in albums" :key="album.id">
          <router-link :to="`/albums/${album.id}`">{{ album.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const albums = ref([]);
  
  onMounted(async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    albums.value = response.data;
  });
  </script>
  