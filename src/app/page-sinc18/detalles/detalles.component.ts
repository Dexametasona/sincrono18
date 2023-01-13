import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
  id!:string | null;
  idConvert!:number
  ObjetoLlamado!:any


  constructor(private router:Router, private route:ActivatedRoute, private data:DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id!==null){
      this.idConvert=parseInt(this.id)
    }

    this.data.BD().subscribe(x=> this.ObjetoLlamado=x)
    this.ObjetoLlamado=JSON.parse(this.ObjetoLlamado)
    
    

  }

}
