import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.Model';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {

  @Input() faceSnap!: FaceSnap

  constructor(
    private router: Router
    ){}

 onViewFacesnap() {
 this.router.navigateByUrl(`facesnap/${this.faceSnap.id}`)

  }
}
