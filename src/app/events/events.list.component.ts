import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ToastrService } from './shared/toastr.service';


@Component({
    selector: "events-list",
    templateUrl: "./events.list.component.html",
    styles: [`
        .well div{
            color: orange;
        }
    `]
})

export class EventsListComponent implements OnInit{
    eventData:any[];
    constructor(private eventService : EventService, private toastrService: ToastrService){
        
    }

   ngOnInit(){
        this.eventData = this.eventService.getEvents();
   }

    handleEventListClickMe(data){
        console.log(data);
    }

    handleThumbNailClick(eventName){
        this.toastrService.success(eventName);
    }
}