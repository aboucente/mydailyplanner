<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-xl">
      <!-- placer Today au milieur et le btn à droit -->
      <div class="col-4"></div>
      <div class="col-4 text-center">
        <q-item-label style="font-size: 20px; font-weight: bold"
          >Today</q-item-label
        >
      </div>
      <div class="col-4 text-right">
        <q-btn size="md" flat icon="add" color="black" />
      </div>
    </div>
    <div>
      <!--Filter btns: All,Done,Not Done-->
      <div class="q-gutter-x-md">
        <q-btn size="sm" color="grey-4" textColor="black" label="All" />
        <q-btn size="sm" color="grey-4" textColor="black" label="Done" />
        <q-btn size="sm" color="grey-4" textColor="black" label="Not Done" />
      </div>
    </div>
    <div class="q-mt-md">
      <TaskList :tasks="tasks" />
      <!-- <q-item class="q-pa-none" style="border-radius: 10px">
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
          <q-item-label>Project Alpha</q-item-label>
          <q-item-label caption>11:00 AM</q-item-label>
        </q-item-section>
        <q-item-section side></q-item-section>
      </q-item> -->
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import TaskList from "../components/TaskList.vue";
defineOptions({
  name: "IndexPage",
});

const tasks = ref([
  {
    title: "Task 1",
    description: "Description 1",
    time: "11:00 AM",
    minutesToComplete: 60,
    minutesSpent: 0,
    completed: false,
  },
  {
    title: "Task 2",
    description: "Description 2",
    time: "12:00 PM",
    minutesToComplete: 120,
    minutesSpent: 0,
    completed: false,
  },
]);
</script>
<style scoped>
* {
  font-size: 12px;
}
</style>
