<template>
    <div>
      <h1>Photos in Album</h1>
      <ul>
        <li v-for="photo in photos" :key="photo.id">
          <img :src="photo.thumbnailUrl" @click="viewPhoto(photo.url)" />
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  
  const route = useRoute();
  const photos = ref([]);
  
  onMounted(async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${route.params.id}`);
    photos.value = response.data;
  });
  
  const viewPhoto = (url) => {
    window.open(url, '_blank');
  };
  </script>
  