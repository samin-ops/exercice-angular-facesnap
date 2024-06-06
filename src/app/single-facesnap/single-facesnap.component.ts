import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.Model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-facesnap',
  templateUrl: './single-facesnap.component.html',
  styleUrls: ['./single-facesnap.component.scss']
})
export class SingleFacesnapComponent {

  faceSnap!: FaceSnap
  buttonText!:string;

  constructor(
    private faceSnapService: FaceSnapService,
    private route: ActivatedRoute
    ){}

 ngOnInit(){
  this.buttonText = 'like';
  const faceSnapId = +this.route.snapshot.params['id']; // ici le id qu'on veut afficher est un entier, donc il faut (+)
  this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId)

 }

 onSnaps(){ // ajouter un like ou enlever
  if(this.buttonText ==='like'){
    this.faceSnapService.snaps(this.faceSnap.id, 'like')
    this.buttonText='liked'
  }else{
    this.faceSnapService.snaps(this.faceSnap.id, 'liked')
    this.buttonText ='like'
  }
 }

}
