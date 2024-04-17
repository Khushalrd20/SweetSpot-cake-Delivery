import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //sample food data will be displayed
  foods:Food[] = [];
  constructor(private foodService:FoodService,activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params)=>{
      if(params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm'])
      else if(params['tag'])
        this.foods=this.foodService.getAllFoodsByTag(params['tag']);
      else
      this.foods = foodService.getAll();
    })
    
  }

  ngOnInit(): void {
  }

} 