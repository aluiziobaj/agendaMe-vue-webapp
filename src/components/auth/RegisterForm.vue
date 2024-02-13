<template>
    <v-form @submit.prevent="submit">
        <v-row class="d-flex mb-3">
            <v-col cols="12">
                    <v-alert density="compact" icon="$error" v-if="feedbackMessage" color="error" 
                    >{{feedbackMessage}} </v-alert>
                    <v-alert density="compact" icon="$success" v-if="feedbackMessageSu" color="success" 
                    >{{feedbackMessageSu}} </v-alert>
                </v-col>
                <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Nome</v-label>
                <v-text-field v-model="nome" :error-messages="errors.nome" variant="outlined"  color="primary" ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Login</v-label>
                <v-text-field v-model="login" :error-messages="errors.login" variant="outlined"  color="primary" ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Senha</v-label>
                <v-text-field v-model="password" :error-messages="errors.password"  variant="outlined" type="password" color="primary"></v-text-field>
            </v-col>
            <v-col cols="12" >
                <v-btn type="submit" :loading="isSubmitting"  color="primary" size="large" block   flat>Registrar</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import {string} from 'yup';
    import {useForm, useField} from 'vee-validate';
    import {useAuthStore} from '@/store/auth';

    //const email = ref('aluizio@estreladistribuidora.com.br');
    //const senha = ref('123456');
    const feedbackMessage = ref('');
    const feedbackMessageSu = ref('');
    const authStore = useAuthStore();

    const schema = {
    nome: string().required().label('Nome'),
    login: string().required().label('Login'),
    password: string().required().matches(
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})/,
    'Pelo menos 6 caracteres com letra e numero'
  ).label('Senha'),
}

const {handleSubmit, errors, isSubmitting}  = useForm ({
   validationSchema: schema ,
   initialValues:{
        nome:'aluizio',
        login:'aluizio@estreladistribuidora.com.br',
        password: '123456'
   }
});

    const submit = handleSubmit(async (values) => {
    await registrar(values);
});

const {value: nome} = useField('nome');
const {value: login} = useField('login');
const {value: password} = useField('password');

let loginModel = {
        nome: null,
        login : null,
        password : null
    }

function registrar(values){
    loginModel.nome = values.nome;
    loginModel.login = values.login;
    loginModel.password = values.password;

    feedbackMessage.value = '';
    feedbackMessageSu.value = '';

    authStore
    .registrar(loginModel)
    .then(()=>{

        feedbackMessageSu.value = 'Registro realizado com sucesso!'
        }).catch((error)=>{
            feedbackMessage.value = error.message;
            if(error?.response?.data){
                feedbackMessage.value += ': ' + error?.response?.data;
            }                
        });
}
</script>
