import { HOST_TAG_NAME } from '@angular/core';
import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';

export const routes: Routes = [

    {path: "home", component:Home},
    {path: "login", component:Login },
    {path: "dashboard", component:Dashboard },
    {path: redirectTo:"Login", pathMatch:"full"}
    
];
