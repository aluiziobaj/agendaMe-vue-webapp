<template>
    <v-form @submit.prevent="submit">
        <v-row class="d-flex mb-3">
            <v-col cols="12">
                <v-alert density="compact" icon="$error" v-if="feedbackMessage" color="error" 
                >{{feedbackMessage}} </v-alert>
                <v-alert density="compact" icon="$success" v-if="feedbackMessageSu" color="success" 
                >{{feedbackMessageSu}} </v-alert>
            </v-col>
            <v-col cols="12" >
                <v-label class="font-weight-bold mb-1">Login</v-label>
                <v-text-field v-model="login" :error-messages="errors.login" variant="outlined"  color="primary" ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Senha</v-label>
                <v-text-field v-model="password" :error-messages="errors.password"  variant="outlined" type="password" color="primary"></v-text-field>
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

<style scoped>
    .v-alert {
        font-size: 0.8em;
    }

</style>
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
    login: string().email().required().label('Login'),
    password: string().required().label('Senha'),
}

const {handleSubmit, errors, isSubmitting}  = useForm ({
   validationSchema: schema ,
   initialValues:{
        login:'aluizio@estreladistribuidora.com.br',
        password: '123456'
   }
})

const submit = handleSubmit(async (values) => {
    await logar(values);
})

const {value: login} = useField('login');
const {value: password} = useField('password');

function logar(values){
    feedbackMessage.value = ''
    feedbackMessageSu.value = ''

    let loginModel = {
        login : null,
        password : null
    }

    authStore
    .token()
    .then(response => {
        loginModel.login = values.login;
        loginModel.password = values.password;

        authStore
        .logar(response.data, loginModel)
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

