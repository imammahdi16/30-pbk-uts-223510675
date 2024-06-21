<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#app {
  width: 100%;
  height: 100%;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: white; 
}

main {
  margin-top: 60px; 
  width: 100%;
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px; 
  margin: 0 auto;
}

.view-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
