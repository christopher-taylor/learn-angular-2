import {Component, Input, Output, EventEmitter} from 'angular2/core'
@Component({
    selector: 'downvote',
    template: `<i
    [class.inactive]="!isActive"
    [class.downvoted]="isActive" 
    class="glyphicon glyphicon-menu-down voter" (click)="onClick($event)"></i>`,
    styleUrls: [
        'app/components/voter/voter.styles.css'
    ]
})
export class DownvoteComponent {
    @Input('is-active') isActive: boolean = false;
    @Output('active-toggled') change = new EventEmitter();
    
    onClick($event){
        this.isActive = !this.isActive;
        this.change.emit({
            vote: (this.isActive) ? -1 : +1,
        });
    }