import { Component, Input,Output, EventEmitter} from '@angular/core';

@Component({
    selector: "event-thumbnail",
    templateUrl: "./event.list.thumbnail.html",
    styles: [`
        .thumbnail {min-height: 210px}
        .well div { color: #bbb;}`
    ]
})
export class EvenListThumbnailComponent{
    @Input() event : any;
    @Output() eventHandleClickMe = new EventEmitter();

    showChildProp = "CHILD PROPERTY";

    handleClickMe(){
        this.eventHandleClickMe.emit(this.event.name);
    }

    logTemplateRefrenceFunc(){
        console.log("Template Reference Fuction accessing from PARENT");
    }
}