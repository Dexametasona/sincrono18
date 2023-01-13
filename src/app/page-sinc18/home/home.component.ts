import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  BBDD!:any
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.BD().subscribe(x=>this.BBDD=x);
    this.BBDD=JSON.parse(this.BBDD)
    
  }

}
