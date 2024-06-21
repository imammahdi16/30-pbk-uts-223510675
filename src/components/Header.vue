<template>
  <div>
    <nav>
      <ul class="header-menu">
        <li>
          <q-btn-dropdown
            flat
            color="primary"
            label="Menu"
            :ripple="{ color: 'grey-8' }"
          >
            <q-item to="/todos" clickable>
              <q-item-section> Todos </q-item-section>
            </q-item>
            <q-item to="/posts" clickable>
              <q-item-section> Posts </q-item-section>
            </q-item>
            <q-item to="/albums" clickable>
              <q-item-section> Albums </q-item-section>
            </q-item>
          </q-btn-dropdown>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
});
const router = useRouter();
</script>

<style scoped>
nav ul {
  list-style: none;
  padding: 0;
  margin-top: 10px;
  display: flex; 
  justify-content: center; 
}

.header-menu {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: flex-start;
}

.header-btn {
  margin-right: 10px;
  text-transform: capitalize;
}
</style>

