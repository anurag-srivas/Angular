import { Component } from '@angular/core';

@Component({
    selector: "events-list",
    templateUrl: "./events.list.component.html",
    styles: [`
        .well div{
            color: orange;
        }
    `]
})

export class EventsListComponent{

    eventData = {
        name : "Angular Event",
        time: "10:00 am"
    }

    handleEventListClickMe(data){
        console.log(data);
    }
}