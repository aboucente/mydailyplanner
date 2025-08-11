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
        <q-btn
          size="md"
          flat
          icon="add"
          color="black"
          @click="showTaskSaveModal = true"
        />
      </div>
    </div>
    <div class="text-center">
      <!--Filter btns: All,Done,Not Done-->
      <div class="q-gutter-x-md">
        <q-btn
          size="sm"
          :color="filter === 'all' ? 'black' : 'grey-4'"
          :textColor="filter === 'all' ? 'white' : 'black'"
          label="All"
          @click="getTasks()"
        />
        <q-btn
          size="sm"
          :color="filter === 'completed' ? 'black' : 'grey-4'"
          :textColor="filter === 'completed' ? 'white' : 'black'"
          label="Done"
          @click="getCompletedTasks()"
        />
        <q-btn
          size="sm"
          :color="filter === 'awaiting' ? 'black' : 'grey-4'"
          :textColor="filter === 'awaiting' ? 'white' : 'black'"
          label="Not Done"
          @click="getAwaitingTasks()"
        />
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
    <TaskSaveModal
      :show="showTaskSaveModal"
      @update:show="showTaskSaveModalFn"
    />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TaskList from "../components/TaskList.vue";
import TaskSaveModal from "../components/TaskSaveModal.vue";
import taskService from "../services/tasks";
defineOptions({
  name: "IndexPage",
});
const showTaskSaveModal = ref(false);
const showTaskSaveModalFn = (value) => {
  showTaskSaveModal.value = value;
};
const filter = ref("all");
const tasks = ref([]);

const getTasks = async () => {
  filter.value = "all";
  tasks.value = await taskService.getTasks();
};
const getCompletedTasks = async () => {
  filter.value = "completed";
  tasks.value = await taskService.getCompletedTasks();
};
const getAwaitingTasks = async () => {
  filter.value = "awaiting";
  tasks.value = await taskService.getAwaitingTasks();
};
onMounted(() => {
  getTasks();
});
</script>
<style scoped>
* {
  font-size: 12px;
}
</style>
