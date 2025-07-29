<template>
  <div>
    <Task v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import Task from "./Task.vue";
defineOptions({
  name: "TaskList",
});

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
});
</script>
