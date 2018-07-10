import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  imageToShow: Blob ;
  
  constructor() { }

  ngOnInit() { }

  //Display the image
  setImage(image: Blob){
    this.imageToShow = image;
  }

  
}