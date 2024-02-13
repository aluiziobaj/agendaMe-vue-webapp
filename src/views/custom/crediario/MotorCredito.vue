<template>
    <v-row>
        <v-col cols="12">
            <AnaliseDadosPesquisa/>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <v-row>
                <v-card >
                    <v-tabs
                    v-model="tab"
                    bg-color="primary" 
                    slider-color="red"
                    >
                        <v-tab value="tabResultado" style="font-size: 10px; font-family: 'Plus Jakarta Sans', sans-serif">Analise - Resultado</v-tab>
                        <v-tab value="tabDetalhe" style="font-size: 10px; font-family: 'Plus Jakarta Sans">Analise - Detalhe</v-tab>
                        <v-tab value="tabDadosEnviados" style="font-size: 10px; font-family: 'Plus Jakarta Sans">Analise - Proposta (Dados Enviados)</v-tab>
                        <v-tab value="tabDadosRetornados" style="font-size: 10px; font-family: 'Plus Jakarta Sans">Analise - Proposta (Dados Retornados)</v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item value="tabResultado">
                                <AnaliseResultadoComponente/>
                            </v-window-item>

                            <v-window-item value="tabDetalhe">
                                <AnaliseDetalheComponente/>
                            </v-window-item>

                            <v-window-item value="tabDadosEnviados">
                                <AnaliseDadosEnviados/>
                            </v-window-item>

                            <v-window-item value="tabDadosRetornados">
                                <AnaliseDadosRetornados/>
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>
            </v-row>
        </v-col>
    </v-row>
</template>
<script>
  export default {
    data: () => ({
      tab: null,
    }),
  }

</script>
<script setup>
    import AnaliseResultadoComponente from '@/components/custom/crediario/motorCredito/AnaliseResultadoComponente.vue'
    import AnaliseDetalheComponente from '@/components/custom/crediario/motorCredito/AnaliseDetalheComponente.vue'
    import AnaliseDadosEnviados from '@/components/custom/crediario/motorCredito/AnaliseDadosEnviadosComponente.vue'
    import AnaliseDadosRetornados from '@/components/custom/crediario/motorCredito/AnaliseDadosRetornadosComponente.vue'
    import AnaliseDadosPesquisa from '@/components/custom/crediario/motorCredito/AnaliseDadosPesquisaComponente.vue'
</script>
