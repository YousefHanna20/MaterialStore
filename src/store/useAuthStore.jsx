import { set } from 'react-hook-form';
import {create} from 'zustand';

export const useAuthStore = create(()=> ({
    token: localStorage.getItem('token'),
    login: (newToken) =>{
        localStorage.setItem('token' , newToken);
        set({token: newToken});
    },
    logout: () =>{
        localStorage.removeItem('token');
        set({token: null});
    }
}));