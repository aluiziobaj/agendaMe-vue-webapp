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
                <v-label class="font-weight-bold mb-1">E-mail</v-label>
                <v-text-field v-model="email" :error-messages="errors.email" variant="outlined"  color="primary"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Senha</v-label>
                <v-text-field v-model="senha" :error-messages="errors.senha" variant="outlined" type="password" color="primary"></v-text-field>
            </v-col>
            <v-col cols="12" class="pt-0" >
                <div class="d-flex flex-wrap ml-n2" style="float: right;">
                    <div class="ml-sm-auto">
                        <RouterLink to="/"
                            class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">Esqueceu sua senha?</RouterLink>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-btn type="submit" :loading="isSubmitting" color="primary" size="large" block flat>Entrar</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {string} from 'yup';
import {useForm, useField} from 'vee-validate'
import {useRouter} from 'vue-router'
import {useAuthStore} from '@/store/auth'

//const email = ref('aluizio@estreladistribuidora.com.br');
//const senha = ref('123456');
const feedbackMessage = ref('');
const feedbackMessageSu = ref('');
const authStore = useAuthStore();
const router = useRouter();

const schema = {
    email: string().email().required().label('E-mail'),
    senha: string().required().label('Senha'),
}

const {handleSubmit, errors, isSubmitting}  = useForm ({
   validationSchema: schema ,
   initialValues:{
        email:'aluizio@estreladistribuidora.com.br',
        senha: '123456'
   }
})

const submit = handleSubmit(async (values) => {
    await login(values);
})

const {value: email} = useField('email');
const {value: senha} = useField('senha');

function login(values){
    feedbackMessage.value = ''
    feedbackMessageSu.value = ''

    let loginModel = {
        login : null,
        password : null
    }

    authStore
    .token()
    .then(response => {
        loginModel.login = values.email;
        loginModel.password = values.senha;

        authStore
        .login(response.data, loginModel)
        .then(() =>{
            feedbackMessageSu.value = 'Login realizado com sucesso!'
            router.push({path: '/'});
        })       
        .catch(()=>{
            feedbackMessage.value = 'E-mail ou senha inválidos! '
        });
    }).catch(()=>{
        feedbackMessage.value = 'Falha na comunicação com o servidor! '
    })
}

</script>

<style>
    .v-alert {
        font-size: 0.8em;
    }
</style>