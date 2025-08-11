<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header> -->

    <q-page-container>
      <router-view />
      <q-footer bordered style="background: white; color: grey">
        <MenusLink :menus="menus" />
      </q-footer>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

import MenusLink from "components/MenusLink.vue";
defineOptions({
  name: "MainLayout",
});
//use outlined icon
const menus = [
  {
    title: "Home",
    caption: "Home",
    icon: "home",
    link: "/",
  },
  {
    title: "Tasks",
    caption: "Tasks",
    icon: "list",
    link: "/tasks",
  },
  {
    title: "Stats",
    caption: "Stats",
    icon: "bar_chart",
    link: "/stats",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
