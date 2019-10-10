<template>
    <div>
         <v-navigation-drawer expand-on-hover fixed permanent>
      <template v-slot:prepend>
        <v-list>
          <v-list-item>
            <v-icon color="primary">mdi-apps</v-icon>
          </v-list-item>
        </v-list>
      </template>
     <v-divider></v-divider>
     <v-list nav dense v-for="item in menu" :key="item.menu">
        <v-list-item link :to="item.ruta">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{item.titulo}}</v-list-item-title>
        </v-list-item>
      
      </v-list>
    </v-navigation-drawer>  
    </div>
</template>

<script>
 import { mapState } from "vuex";


export default {
   name: 'drawer',
   computed:{
     ...mapState('drawermodule',['menu'])
   }
}
</script>