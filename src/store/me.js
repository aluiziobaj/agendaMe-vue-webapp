import axios from 'axios'
import {defineStore} from 'pinia'

export const useMeStore = defineStore('me',{
    state:() =>({
        user: null,
    }),
    actions: {
        verifyLoginState(){
            return axios.get('/userLogged')
            .then(response =>{
                this.user = response.data;
            })
        }
    },
    getters: {
        //As exclamações convertem a informação para booleano
        //As interrogações apos cada objeto indica que só chama a proxima propriedade se o objeto atual nao for nulo
        isLoggedIn: (state) => !!state?.user?.id 
    }
})