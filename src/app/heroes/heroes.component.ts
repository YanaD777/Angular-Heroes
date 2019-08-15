import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from "../HeroService";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/

  public selectedHero: Hero;

  public heroes: Hero[];
  /*heroes = HEROES;*/
  
  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  private getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes: Hero[]) => this.heroes = heroes);
}
  /*getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }*/

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  

}
