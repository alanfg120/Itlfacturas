import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import drawermodule from './modulos/DrawerModule'
import registromodule from './modulos/RegistroModule'

export default new Vuex.Store({
  
  modules:{
    drawermodule,
    registromodule
  }

})
