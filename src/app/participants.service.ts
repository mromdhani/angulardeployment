import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor() { }

  getParticipants() {
    return ['** Laurent **', 'Maya', 'Teo', 'Petre'];
  }
}
