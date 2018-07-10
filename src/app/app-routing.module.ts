import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './MainContent/events/events/events.component';
import { ParticipantsComponent } from './MainContent/participants/participants/participants.component';
import { ParticipantComponent } from './MainContent/participants/participant/participant.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'participants', component: ParticipantsComponent },
  { path: 'participant/:id', component: ParticipantComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
