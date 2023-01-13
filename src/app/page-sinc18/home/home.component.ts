import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  BBDD!:any
  constructor(private data:DataService,private router:Router, private route:ActivatedRoute) { }

  consulta(id:number){
    this.router.navigate(['/detalles',id])
  }
  ngOnInit(): void {
    this.data.BD().subscribe(x=>this.BBDD=x);
    this.BBDD=JSON.parse(this.BBDD)
    
  }

}
