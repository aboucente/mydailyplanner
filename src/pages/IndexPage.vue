<template>
  <q-page class="q-pa-md">
    <div class="flex justify-between q-mb-xl">
      <div class="flex items-center" style="text-align: center; width: auto">
        <q-item-label style="font-size: 20px; font-weight: bold"
          >Today</q-item-label
        >
      </div>

      <q-btn size="md" flat icon="add" color="black" />
    </div>
    <div
      style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem"
    >
      <div>
        <q-card>
          <q-card-section>
            <q-item-label class=""
              >Tasks <br />
              completed</q-item-label
            >
            <q-item-label class="mycard text-bold">5</q-item-label>
          </q-card-section>
        </q-card>
      </div>
      <div>
        <q-card>
          <q-card-section>
            <q-item-label class=""
              >Meetings <br />
              Attended</q-item-label
            >
            <q-item-label class="mycard text-bold">2</q-item-label>
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
          <q-item-label>Project Alpha</q-item-label>
          <q-item-label caption>11:00 AM</q-item-label>
        </q-item-section>
        <q-item-section side></q-item-section>
      </q-item>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});
</script>

<style scoped>
.mycard {
  font-size: 18px;
}
</style>
