import { httpResource } from "@angular/common/http";
import { Component, effect, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CarteleraResponse } from "./shared/interfaces/cartelera-response";
import { Navbar } from "./core/layout/navbar/navbar";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, Navbar],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected readonly title = signal("PeliculasApp");

}
