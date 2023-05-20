import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 27;
  }

  reset(): void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
