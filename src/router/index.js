import { createRouter, createWebHistory } from 'vue-router';
import TodoView from '../views/TodoView.vue';
import PostView from '../views/PostView.vue';
import AlbumView from '../views/AlbumView.vue';
import PhotoView from '../views/PhotoView.vue';

const routes = [
  { path: '/', redirect: '/todos' },
  { path: '/todos', component: TodoView },
  { path: '/posts', component: PostView },
  { path: '/albums', component: AlbumView },
  { path: '/albums/:id', component: PhotoView, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
