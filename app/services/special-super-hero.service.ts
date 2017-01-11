import { Injectable } from '@angular/core';
import { Hero } from '../domainobjects/hero';
import { HEROES } from '../mockdata/mock-heroes';

@Injectable()
export class HeroService{
    getHeroes() : Hero[]{

        return HEROES;
    }
}
