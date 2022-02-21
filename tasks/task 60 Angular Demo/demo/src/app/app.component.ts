import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'My first project';//интерполяция
  age:number = 25;//интерполяция
  link:string = "https://www.mts.by/local/templates/ns_mts/img/svg/logo-new.svg";//привязка к атрибуту
  red = "";
addAge():void{
  this.age++;
}
decreaseAge():void{
  this.age--;
}
addClass():void{
  this.red = "hover";
}
removeClass():void{
  this.red = ""
}
}

