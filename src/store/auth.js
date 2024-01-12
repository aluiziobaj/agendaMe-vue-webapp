import {defineStore} from 'pinia';
import axios from 'axios';
import {useMeStore} from '@/store/me'

export const useAuthStore = defineStore('auth',{
    state: () =>({}),
    actions: {
        token(){
            return axios.get('/csrf');
        },
        login(email, senha){
            return axios.get('/login/' + email + '/' + senha).then((response)=>{
                const meStore = useMeStore();
                meStore.user = response.data;
            })
        },
        userLogged(){
            return axios.get('/userLogged')
        },
        logout(){
            return axios.get('/logout')
        }
        /*loginPost(token, email){
           
           
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const headers = new Headers();
            headers.append("Content-Type", "application/json;charset=UTF-8");
            headers.append('Accept-Encoding', 'gzip, deflate, br');
            headers.append("Access-Control-Allow-Origin", "*");
            headers.append("Bearer", token);
            console.log(token, email);
           
            return axios.post('/loginPost'
            , {
                data:{
                    email: email
                }
            }
            , {
                headers:{'Authorization': `Basic ${token}`}
            });
        }*/
    },
});