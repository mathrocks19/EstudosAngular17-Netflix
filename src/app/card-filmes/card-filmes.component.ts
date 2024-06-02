import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-filmes',
  standalone: true,
  imports: [],
  templateUrl: './card-filmes.component.html',
  styleUrl: './card-filmes.component.css'
})
export class CardFilmesComponent {
  @Input() images: string[] = [];

  constructor(){}

  ngOnInit(): void {
    
  }

}
