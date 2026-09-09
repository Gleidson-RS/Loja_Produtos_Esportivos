import { Routes } from '@angular/router';
import { Sobre } from './components/sobre/sobre';
import { TelaInicial } from './components/tela-inicial/tela-inicial';

export const routes: Routes = [
 {
    path:'',
    redirectTo:'/tela-inicial',
    pathMatch:'full',
 },
 {
    path:'tela-inicial',
    component:TelaInicial,
 },
 {
    path:'sobre',
    component:Sobre
 }
];
