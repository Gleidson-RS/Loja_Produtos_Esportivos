import { Routes } from '@angular/router';
import { TelaInicial } from './components/tela-inicial/tela-inicial';
import { Sobre } from './components/sobre/sobre';
import { Carrinho } from './components/carrinho/carrinho';

export const routes: Routes = [

    {
        path:"",
        redirectTo: "tela-inicial",
        pathMatch: "full",

    },

    { 
        path: "tela-inicial",
        component: TelaInicial },

    { 
        path: "sobre",
        component: Sobre },

    { 
        path: "carrinho",
        component: Sobre },
        

];