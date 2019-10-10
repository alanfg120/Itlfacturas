import axios from 'axios'

export default {
  namespaced: true,
  state: {
    registro: {
               requisicion:"",
               placa: "",
               recibo_cantera:"",
               obra: "",
               fecha:"",
               conductor: "",
               material: "",
               cantidad: "",
               kilometros: "",
               costo: "",
               cantera: "",
               transportador: "",
    },
    respuestaHttp:0,
    registros:[],
    placas: [],
    obras: [],
    conductores: [],
    materiales: [],
    canteras: [],
    transportadores: [],
  },
  mutations: {
    add_registro(state,resp){
     state.respuestaHttp=resp
   }


  },
  actions: {
        
   async new_registro({commit,state},registro){
     state.respuestaHttp=0;
     let resp= await axios.post("http://localhost:3000/registros/add",registro)
     commit('add_registro',resp.status)
   } 
  
  }



}