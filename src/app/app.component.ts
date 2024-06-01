import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./navbar/navbar.component";
import { MainComponent } from "./main/main.component";
import { CardFilmesComponent } from "./card-filmes/card-filmes.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, MainComponent, CardFilmesComponent]
})
export class AppComponent {
  title = 'netflix';

  ngOnInit(): void {
    initFlowbite();
  }
}
