import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapsListComponent } from './face-snaps-list/face-snaps-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFacesnapComponent } from './single-facesnap/single-facesnap.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'facesnap',
    component: FaceSnapsListComponent,
    title: 'la liste des facesnaps',
  },
  {
    path: 'facesnap/:id',
    component: SingleFacesnapComponent,
    title: 'aficher un facesnap',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
