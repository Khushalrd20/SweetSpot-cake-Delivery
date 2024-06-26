import { Food } from "./app/shared/models/Food"
import { Tag } from "./app/shared/models/tag"

export const sample_foods: Food[] = [
    {
      id: '1',
      name: 'Chocky Slice',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['indian'],
      stars: 4.5,
      imageUrl: 'assets/food-1.jpg',
      tags: ['Choclate', 'Chocky slice', 'sweet'],
      length: undefined
    },
  {
    id: '2',
    name: 'Fox Cholite',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 4.7,
    imageUrl: 'assets/food-2.jpg',
    tags: ['creamy', 'Lunch', 'Pestry'],
    length: undefined
  },
  {
    id: '3',
    name: 'Butter Cake',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'assets/food-3.jpg',
    tags: ['butter', 'Cake'],
    length: undefined
  },
  {
    id: '4',
    name: 'Black Forest Cake',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.3,
    imageUrl: 'assets/food-4.jpg',
    tags: ['Black forest', 'cake'],
    length: undefined
  },
  {
    id: '5',
    name: 'Funfetti Cake',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    imageUrl: 'assets/food-5.jpg',
    tags: ['funfetti cake', 'Soup'],
    length: undefined
  },
  {
    id: '6',
    name: 'Tiramisu Cake',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/food-6.jpg',
    tags: ['Tiramisu Cake', 'pestry', 'Lunch'],
    length: undefined
  },
]

export const sample_tags:Tag[]=[
  { name: 'All', count: 6 },
  { name: 'Choclate', count: 4 },
  { name: 'Pestry', count: 2 },
  { name: 'Butter', count: 3 },
  { name: 'Ice cake', count: 2 },
  { name: 'Simple', count: 1 },
  
]