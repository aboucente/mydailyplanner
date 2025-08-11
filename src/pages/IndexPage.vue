<template>
  <q-page class="q-pa-md">
    <div class="flex justify-between q-mb-xl">
      <div class="flex items-center" style="text-align: center; width: auto">
        <q-item-label style="font-size: 20px; font-weight: bold"
          >Today</q-item-label
        >
      </div>

      <q-btn
        size="md"
        flat
        icon="add"
        color="black"
        @click="showTaskSaveModal = true"
      />
    </div>
    <div
      style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem"
    >
      <div>
        <q-card>
          <q-card-section>
            <q-item-label class=""
              >Tasks <br />
              Total</q-item-label
            >
            <q-item-label class="mycard text-bold">{{
              stats.total
            }}</q-item-label>
          </q-card-section>
        </q-card>
      </div>
      <div>
        <q-card>
          <q-card-section>
            <q-item-label class=""
              >Tasks <br />
              Completed</q-item-label
            >
            <q-item-label class="mycard text-bold">{{
              stats.completed
            }}</q-item-label>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="q-mt-lg">
      <q-item-label class="text-bold text-h6">Ongoing Task</q-item-label>
    </div>
    <div class="q-mt-md">
      <q-item class="bg-purple-2 q-pa-md" style="border-radius: 10px">
        <q-item-section avatar>
          <q-img
            height="50px"
            width="50px"
            src="~assets/quasar-logo-vertical.svg"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>Project Alpha</q-item-label>
          <q-item-label caption>Due: 11:00 AM</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label caption>
            <q-btn round color="blue-2" icon="play_arrow" />
          </q-item-label>
        </q-item-section>
      </q-item>
    </div>
    <div class="q-mt-lg">
      <q-item-label class="text-bold text-h6">Tasks</q-item-label>
    </div>
    <div class="q-mt-md">
      <TaskList :tasks="tasks" />
    </div>
    <TaskSaveModal
      :show="showTaskSaveModal"
      @update:show="showTaskSaveModalFn"
    />
  </q-page>
</template>

<script setup>
import TaskSaveModal from "components/TaskSaveModal.vue";
import taskService from "../services/tasks";
import TaskList from "../components/TaskList.vue";
import { ref, onMounted } from "vue";
defineOptions({
  name: "IndexPage",
});
const showTaskSaveModal = ref(false);
const showTaskSaveModalFn = (value) => {
  showTaskSaveModal.value = value;
};
const tasks = ref([]);
const stats = ref([]);
onMounted(async () => {
  tasks.value = await taskService.getLastFiveTasks();
  stats.value = await taskService.dashboardStats();
  console.log(stats);
});
</script>

<style scoped>
.mycard {
  font-size: 18px;
}
</style>
