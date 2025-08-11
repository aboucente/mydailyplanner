<template>
  <div>
    <Task v-for="task in tasks" :key="task.id" :task="task" />
    <template v-if="tasks.length === 0">
      <q-item-label style="text-align: center; font-size: 14px"
        >Aucune tâche trouvée</q-item-label
      >
    </template>
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
