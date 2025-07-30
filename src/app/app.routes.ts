import { Routes } from "@angular/router";
import { Home } from "./pages/home/home";
import { Pelicula } from "./pages/pelicula/pelicula";
import { Buscar } from "./pages/buscar/buscar";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: Home,
  },
  {
    path: "pelicula/:id",
    component: Pelicula,
  },
  {
    path: "buscar/:texto",
    component: Buscar,
  },
];
