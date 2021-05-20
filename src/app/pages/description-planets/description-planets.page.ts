import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description-planets',
  templateUrl: './description-planets.page.html',
  styleUrls: ['./description-planets.page.scss'],
})
export class DescriptionPlanetsPage implements OnInit {

  planets:any;

  constructor(private obterRoute:ActivatedRoute, private obterserviSwapi:SwapiService) { }

  ngOnInit() {
    this.obterRoute.paramMap.subscribe((params)=>{
      let id = params.get('id');
      console.log(id);
      this.planets = this.obterserviSwapi.getSwapi(`planets/${id}`).subscribe(data => {
        this.planets = data;
        console.log(data);
      });
    });
  }

}
