import { HOST_TAG_NAME } from '@angular/core';
import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { authGuard } from './guard/auth-guard';

export const routes: Routes = [

    {path: "home", component:Home, canActivate:[authGuard]},
    {path: "contato", component:Contato },
    {path: "login", component:Login },
    {path: "dashboard", component:Dashboard },
    {path: "", redirectTo:"Login", pathMatch:"full"}
    
];
