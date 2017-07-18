import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }
  getHeroes(): Promise<Hero[]>  {
    return Promise.resolve(HEROES);
  }
}
