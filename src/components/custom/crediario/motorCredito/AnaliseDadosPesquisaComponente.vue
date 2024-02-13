<template>
  <v-container density="compact">
    <v-row>
      <v-col cols="12" md="4" lg="3">
        <v-text-field></v-text-field>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <v-text-field></v-text-field>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <v-text-field></v-text-field>
      </v-col>
    </v-row>
    <v-card-actions>
      <v-spacer cols="1" md="4" lg="12"></v-spacer>
      <v-btn prepend-icon="mdi-home" variant="text" >Limpar</v-btn>
      <v-btn prepend-icon="mdi-magnify" variant="tonal" color="info" >Pesquisar</v-btn>
    </v-card-actions>
 </v-container>

</template>
<script>
  export default {

  }
</script>
<style>
 
</style>