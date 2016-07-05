import {Component, Input, Output, EventEmitter} from 'angular2/core'
@Component({
    selector: 'upvote',
    template: `<i
    [class.inactive]="!isActive"
    [class.upvoted]="isActive" 
    class="glyphicon glyphicon-menu-up voter" (click)="onClick($event)"></i>`,
    styleUrls: [
        'app/components/voter/voter.styles.css'
    ]
})
export class UpvoteComponent {
    @Input('is-active') isActive: boolean = false;
    @Output('active-toggled') change = new EventEmitter();
    
    onClick($event){
        this.isActive = !this.isActive;
        this.change.emit({
            vote: (this.isActive) ? 1 : -1,
        });
    }
}