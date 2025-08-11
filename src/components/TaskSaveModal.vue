<template>
  <q-dialog v-model="internalShow" full-width>
    <q-card>
      <q-card-section class="row justify-between">
        <div class="text-h6">Save Task</div>
        <div class="text-right">
          <q-btn flat icon="close" v-close-popup />
        </div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="saveTask">
          <q-input
            :rules="[(val) => !!val || 'Le champ est obligatoire']"
            v-model="task.title"
            label="Titre"
          />
          <q-input v-model="task.description" autogrow label="Description" />
          <q-input
            :rules="[(val) => !!val || 'Le champ est obligatoire']"
            v-model="task.time"
            label="Heure début"
          />
          <q-input
            :rules="[(val) => !!val || 'Le champ est obligatoire']"
            v-model="task.minutesToComplete"
            label="Minutes de completion"
          />
          <div class="flex justify-end q-mt-md">
            <q-btn
              flat
              label="Annuler"
              color="primary"
              @click="internalShow = false"
            />
            <q-btn
              flat
              label="Sauvegarder"
              color="primary"
              v-close-popup
              @click="saveTask"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch } from "vue";
import taskService from "../services/tasks";
defineOptions({
  name: "TaskSaveModal",
});
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["update:show"]);
const task = ref({
  title: "",
  time: "",
  minutesToComplete: "",
  description: "",
  isCompleted: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});
const internalShow = ref(props.show);

//Surveiller le prop show pour mettre à jour l'état interne
watch(
  () => props.show,
  (value) => {
    internalShow.value = value;
  },
);
//Surveiller l'état interne pour émettre un évenement vers le parent
watch(internalShow, (newValue) => {
  emit("update:show", newValue);
});

const saveTask = async () => {
  await taskService.addTask(task.value);
  //reset the form
  task.value = {
    title: "",
    time: "",
    minutesToComplete: "",
    description: "",
    isCompleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  // emit("update:show", false);
};
</script>
<style scoped></style>
