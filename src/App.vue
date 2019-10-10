<template>
  <v-app>
    <Drawer />
    <v-content>
    <div class="contenido">
          <router-view />
    </div>
   </v-content>
  </v-app>
</template>



<script>

import Drawer from "./components/DrawerNav";

export default {
 name: "App",
  components: {
                Drawer
              },
  data: () => ({
    //
  })
};
</script>

<style scoped>
 .contenido{
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
 }
</style>
