import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './Hero';
import { MessageService } from './messages.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
