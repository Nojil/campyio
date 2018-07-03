import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './MainContent/events/events/events.component';
import { ParticipantsComponent } from './MainContent/participants/participants/participants.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'participants', component: ParticipantsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
