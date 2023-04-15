import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Chicken","Agood iem for digention sysem , if u know u know",
    "https://bigoven-res.cloudinary.com/image/upload/sweetandsourstickythaiboneless-3a944d.jpg"),

    new Recipe("Chicken","Agood iem for digention sysem , if u know u know",
    "https://bigoven-res.cloudinary.com/image/upload/sweetandsourstickythaiboneless-3a944d.jpg")
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
