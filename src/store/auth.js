import {defineStore} from 'pinia';
import axios from 'axios';
import {useMeStore} from '@/store/me'

export const useAuthStore = defineStore('auth',{
    state: () =>({}),
    actions: {
        token(){
            return axios.get('/csrf');
        },
        userLogged(){
            return axios.get('/userLogged')
        },
        logout(){
            return axios.get('/logout')
        },
        logar(token, loginModel){
            return axios.post('/login',loginModel, 
            {
                header:{
                    'XSRF-TOKEN': token
                }
            }).then((response)=>{
                const meStore = useMeStore();
                meStore.user = response.data;
            })
        },
        registrar(loginModel){
            return axios.post('/create',loginModel);
        }
    },
});