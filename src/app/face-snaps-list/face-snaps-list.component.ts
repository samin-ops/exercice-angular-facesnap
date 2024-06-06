import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.Model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snaps-list',
  templateUrl: './face-snaps-list.component.html',
  styleUrls: ['./face-snaps-list.component.scss']
})
export class FaceSnapsListComponent implements OnInit {

  faceSnaps!:FaceSnap[]

  constructor(
    private facesnapService: FaceSnapService
    ){

  }

  ngOnInit(){
    this.faceSnaps = this.facesnapService.getAllFacesnaps()
  }

}
