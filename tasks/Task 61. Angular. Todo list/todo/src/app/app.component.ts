import { Component } from '@angular/core';
import { bufferToggle } from 'rxjs';
import { Item } from './item';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title:string = "";

    tasks:Item[] = [
                    {title:"Сварить яйца", done: false},
                    {title:"Прочитать книгу по Javascript", done: false},
                    {title:"Сходить на работу", done: true}
                ];

    addTask(title:string):void{
        if(title != "")
            this.tasks.push({
                title: title,
                done: false
            })
    }
    countTasks(done:boolean):number{
        return this.tasks.filter(function(item:Item){
            return item.done == done
        }).length
             
    }
    changeStatus(i:number):void{
       this.tasks[i].done = !this.tasks[i].done;
        }

    deleteTask(i:number):void{
        this.tasks.splice(i, 1);
    }  
    
}
