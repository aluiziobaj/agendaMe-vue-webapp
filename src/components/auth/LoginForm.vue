<template>
    <v-form @submit.prevent="login()">
        <v-row class="d-flex mb-3">
            <v-col cols="12">
                <v-alert v-if="feedbackMessage" color="error">{{feedbackMessage}}</v-alert>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">E-mail</v-label>
                <v-text-field v-model="email" :rules="[rules.required, rules.email]" variant="outlined"  color="primary"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Senha</v-label>
                <v-text-field v-model="senha" :rules="[rules.required]" variant="outlined" type="password" color="primary"></v-text-field>
            </v-col>
            <v-col cols="12" class="pt-0">
                <div class="d-flex flex-wrap align-center ml-n2">
                    <div class="ml-sm-auto">
                        <RouterLink to="/"
                            class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">EEsqueceu sua senha?</RouterLink>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-btn type="submit" color="primary" size="large" block   flat>Entrar</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>


<script setup lang="ts">
import axios from 'axios';
import {ref} from 'vue';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

/* axios.post('http://localhost:8080/login', {login: 'teste@laravue', password: '123456'}) */

const email = ref('aluizio@estreladistribuidora.com.br');
const senha = ref('123456');
const feedbackMessage = ref('');
const rules = {
    required: value => !!value || 'Campo obrigatorio',
    email: value => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'E-mail invalido'
    }
}

function login(){
    axios.get('http://localhost:8080/csrf')
    .then(() => {
        this.feedbackMessage = '';
        axios.get('http://localhost:8080/login/' + this.email + '/' + this.senha)
        .catch(()=>{
            feedbackMessage.value = 'E-mail ou senha inválidos!'
        })
    }).catch(()=>{
        feedbackMessage.value = 'Falha na comunicação com o servidor!'
    });
}

</script>