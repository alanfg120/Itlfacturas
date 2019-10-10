<template>
  <div>
    <ValidationObserver ref="obs" v-slot="{ invalid, validated, passes, validate }">
      <v-card class="mx-auto" color="#F9F9F9" max-width="1000" elevation="10">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">Registro De Material</v-list-item-title>
            <v-list-item-subtitle>Ingrese el Nuevo material</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-form class="registro">
            <ValidationProvider name="name" rules="required" v-slot="{ errors, valid }">
              <v-text-field
                label="Numero Requisicion"
                outlined
                dense
                :error-messages="errors"
                :success="valid"
                v-model="registro.requisicion"
                required
              ></v-text-field>
            </ValidationProvider>
            <v-combobox label="Placa" v-model="registro.placa" :items="placas" outlined dense></v-combobox>

            <v-text-field label="Recibo Cantera" v-model="registro.recibo_cantera" outlined dense></v-text-field>
            <v-dialog ref="dialog" v-model="modal" width="290px">
              <template v-slot:activator="{ on }">
                <v-text-field
                  label="Fecha"
                  :value="computedDateFormattedMomentjs"
                  append-icon="mdi-calendar"
                  readonly
                  outlined
                  dense
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="registro.fecha" scrollable locale="es" @input="modal = false">
                <div class="flex-grow-1"></div>
              </v-date-picker>
            </v-dialog>
            <v-text-field
              label="Kilometros Recorridos"
              v-model="registro.kilometros"
              outlined
              dense
            ></v-text-field>
            <v-text-field label="Costo" v-model="registro.costo" outlined dense></v-text-field>

            <v-combobox
              v-model="registro.conductor"
              :items="conductores"
              label="Conductor"
              outlined
              dense
              reque
            ></v-combobox>
            <v-combobox v-model="registro.obra" :items="obras" label="Obra" outlined dense></v-combobox>
            <v-combobox
              v-model="registro.material"
              :items="materiales"
              label="Material"
              outlined
              dense
            ></v-combobox>
            <v-combobox v-model="registro.cantera" :items="canteras" label="Cantera" outlined dense></v-combobox>
            <v-combobox
              v-model="registro.transportador"
              :items="transportadores"
              label="Transportador"
              outlined
              dense
            ></v-combobox>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="primary" @click="submit" class="float-right">Guardar</v-btn>
        </v-card-actions>
      </v-card>
      <v-snackbar v-model="snackbar">
        {{mensaje}}
        <v-btn color="pink" text @click="snackbar = false">Aceptar</v-btn>
      </v-snackbar>
    </ValidationObserver>
  </div>
</template>



<script>
import { mapState, mapMutations, mapActions } from "vuex";
import moment from "moment";
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "home",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    modal: false,
    snackbar: false,
    mensaje: "",
    name: ""
  }),
  methods: {
    ...mapMutations([]),
    ...mapActions("registromodule", ["new_registro"]),
    submit() {
      this.new_registro(this.registro);
    }
  },
  computed: {
    ...mapState("registromodule", [
      "registro",
      "placas",
      "conductores",
      "obras",
      "materiales",
      "canteras",
      "transportadores",
      "respuestaHttp"
    ]),
    computedDateFormattedMomentjs() {
      return this.registro.fecha
        ? moment(this.registro.fecha)
            .locale("es")
            .format("LL")
        : "";
    }
  },
  watch: {
    respuestaHttp: function resthttp() {
      if (this.respuestaHttp == 200) {
        this.mensaje = "Registro guardado";
        this.snackbar = true;
      }
    }
  }
};
</script>


<style scoped>
.registro {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
}
</style>>

