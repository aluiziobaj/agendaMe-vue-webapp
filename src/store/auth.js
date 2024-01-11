import {defineStore} from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth',{
    state: () =>({
        user: null,
    }),
    actions: {
        token(){
            return axios.get('/csrf');
            //.then(() => {
                //axios.post('/loginPost', 'teste@laravue') 
            //}).catch(()=>{
            //    feedbackMessage.value = 'Falha na comunicação com o servidor!'
            //})
        },
        login(email, senha){
            return axios.get('/login/' + email + '/' + senha);
            //.then(() =>{
                //router.push({path: '/'});
            //})       
            //.catch(()=>{
                //feedbackMessage.value = 'E-mail ou senha inválidos!'
            //});
        }
    },
    getters: {}
});