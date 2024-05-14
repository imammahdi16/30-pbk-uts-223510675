<template>
  <div>
    <Header @navigate="navigate" />
    <div v-if="currentView === 'todos'">
      <TaskFilter @change-filter="changeFilter" />
      <AddTaskForm @add-task="addTask" />
      <TaskList
        :tasks="tasks"
        :filter="filter"
        @toggle-done="toggleDone"
        @remove-task="removeTask"
        @cancel-task="cancelTask"
      />
    </div>
    <div v-else>
      <UserSelect :users="users" @select-user="selectUser" />
      <PostList :posts="filteredPosts" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Header from "./components/Header.vue";
import TaskFilter from "./components/TaskFilter.vue";
import AddTaskForm from "./components/AddTaskForm.vue";
import TaskList from "./components/TaskList.vue";
import UserSelect from "./components/UserSelect.vue";
import PostList from "./components/PostList.vue";

const tasks = ref([
  { text: "Learn Vue.js", done: false },
  { text: "Build a project", done: false },
]);

const filter = ref("all");
const users = ref([]);
const posts = ref([]);
const selectedUser = ref(null);
const currentView = ref("todos");

const changeFilter = (newFilter) => {
  filter.value = newFilter;
};

const addTask = (task) => {
  tasks.value.push({ text: task, done: false });
};

const toggleDone = (task) => {
  task.done = !task.done;
};

const removeTask = (task) => {
  tasks.value = tasks.value.filter((t) => t !== task);
};

const cancelTask = (task) => {
  task.done = false;
};

const navigate = (view) => {
  currentView.value = view;
};

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
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  users.value = await response.json();
});
</script>
