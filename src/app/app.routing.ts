import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { ErrorComponent } from "./components/error/error.component";
import { CourseComponent } from './components/course/course.component';
import { AsignaturaComponent } from './components/asignatura/asignatura.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "inicio", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "logout/:sure", component: LoginComponent },
  { path: "registro", component: RegisterComponent },
  { path: "courses", component: CourseComponent },
  { path: "course/:id", component: AsignaturaComponent },
  { path: "**", component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
