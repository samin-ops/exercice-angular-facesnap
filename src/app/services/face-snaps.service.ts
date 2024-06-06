import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { FaceSnap } from "../models/face-snap.Model";

@Injectable({
providedIn: 'root'
})

export class FaceSnapService {

  faceSnaps: FaceSnap[] = [

    {
      id:1,
      title: 'Danouin A.',
      description:'Mon meilleur ami',
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps:200,
      location:'Les basiliques de Yakro',
    },
    {
      id:2,
      title: 'Aaron N.',
      description:'Mon fils',
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps:80,
      location:'Cascade de Man'
    },
    {
      id:3,
      title: 'Samin S.',
      description:'Bienvenu a toi',
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps:2,
    },
    {
      id:4,
      title: 'Danouin A.',
      description:'Mon meilleur ami',
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps:9,
      location:'Les basiliques de Yakro',
    },
    {
      id:5,
      title: 'Aaron N.',
      description:'Mon fils',
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps:8,
      location:'Cascade de Man'
    },
    {
      id:6,
      title: 'Samin S.',
      description:'Bienvenu a toi',
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps:400,
    }

  ]

  getAllFacesnaps():FaceSnap[]{
    return this.faceSnaps
  }


  getFaceSnapById(id:number):FaceSnap {
    const facesnap = this.faceSnaps.find(faceSnap => faceSnap.id==id)
    if(!facesnap){
      throw new Error('Facesnap not found')
    }else{
      return facesnap
    }

  }

  snaps(id: number, snapType: 'like' | 'liked' ){
    const faceSnap = this.getFaceSnapById(id);
    snapType=='like' ? faceSnap.snaps++ : faceSnap.snaps--;

  }

  addFaceSnap(facesnap: FaceSnap): Observable<FaceSnap>{
    facesnap.id = // uuid.UUID()
      this.faceSnaps.push(facesnap)
    return  of(facesnap)
  }

}
