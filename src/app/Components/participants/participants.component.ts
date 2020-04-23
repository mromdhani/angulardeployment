import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from 'src/app/participants.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  participants: string[];

  constructor(private service:ParticipantsService) { }

  ngOnInit(): void {
    this.participants = this.service.getParticipants();
  }

}
