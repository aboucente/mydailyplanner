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
          <div class="row justify-between">
            <div class="col-xs-12 col-md-6">
              <q-input
                v-model="task.time"
                label="Heure début"
                format24h
                mask="##:##"
                @click="showTime = true"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer" />
                </template>
                <q-popup-proxy v-model="showTime">
                  <q-time
                    :rules="[(val) => !!val || 'Le champ est obligatoire']"
                    v-model="task.time"
                    label="Heure début"
                    format24h
                  />
                </q-popup-proxy>
              </q-input>
            </div>
          </div>
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
  task: {
    type: Object,
    required: false,
  },
});
const emit = defineEmits(["update:show"]);
const task = ref(
  props.task || {
    title: "",
    time: "",
    minutesToComplete: "",
    description: "",
    isCompleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
);
const internalShow = ref(props.show);
const showTime = ref(false);
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
  if (props.task) {
    await taskService.updateTask(task.value);
  } else {
    await taskService.addTask(task.value);
  }
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
