<template>
  <div class="q-mt-md">
    <q-item class="q-pa-none" style="border-radius: 10px">
      <q-item-section avatar style="width: 50px !important">
        <div
          class="q-pa-sm flex items-center justify-center"
          style="background-color: #f0f2f5; border-radius: 10px; width: 50px"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path
              d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"
            ></path>
          </svg>
        </div>
      </q-item-section>
      <q-item-section class="q-ml-sm">
        <q-item-label>{{ task.title }}</q-item-label>
        <q-item-label caption>Début: {{ task.time }}</q-item-label>
        <q-item-label caption
          >Temps de completion:
          {{ changeMinutesToHours(task.minutesToComplete) }} heure</q-item-label
        >
      </q-item-section>
      <q-item-section side></q-item-section>
    </q-item>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  task: {
    type: Object,
    required: true,
  },
});
defineOptions({
  name: "TaskComponent",
});

const changeMinutesToHours = (minutes) => {
  return minutes / 60;
};
</script>
<style scoped>
* {
  font-size: 12px;
}
</style>
