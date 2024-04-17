import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from '../../data';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm:String){ //search functionality based on tages
    return this.getAll().filter(food =>  food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getFoodById(foodId:string):Food{
    return this.getAll().find(food =>food.id == foodId) ?? new Food();
  }

  getAllTags():Tag[]{
    return sample_tags;
  }
  getAllFoodsByTag(tag:string):Food[]{
    return tag == "All" ?
    this.getAll():
    this.getAll().filter(food => food.tags?.includes(tag));
  }
} 
