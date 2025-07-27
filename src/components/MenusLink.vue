<template>
  <div class="flex justify-evenly q-my-sm">
    <div v-for="menu in menus" :key="menu.title">
      <!--Quand c'est active la couleur doit etre noir et bold, mais quand ce n'est pas activ les couleurs doivent etre gris-->
      <router-link :to="menu.link" class="text-center">
        <div>
          <q-icon :name="menu.icon" size="24px" /> <br />
          <span>{{ menu.title }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "MenusLink",
});

const props = defineProps({
  menus: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
a {
  color: grey;
  text-decoration: none;
  font-size: 12px;
}

a.router-link-exact-active {
  color: black;
  font-weight: 600;
  font-size: 12px;
  text-decoration: none;
}
</style>
