import {Component} from 'angular2/core';
import {UpvoteComponent} from './upvote.component'
import {DownvoteComponent} from './downvote.component'
@Component({
    selector: 'voter',
    template: `
        <div>
            <upvote (active-toggled)="onUpvote($event)" [is-active]="isUpvoted"> </upvote><br/>
            <span
                class="voter"
                [class.inactive]="!isUpvoted && !isDownvoted"
                [class.upvoted]="isUpvoted"
                [class.downvoted]="isDownvoted">
                {{votes}}
            </span><br />
            <downvote (active-toggled)="onDownvote($event)" [is-active]="isDownvoted"></downvote>
        </div>`,
    styleUrls: ['app/components/voter/voter.styles.css'],
    directives: [UpvoteComponent, DownvoteComponent]
})
export class VoterComponent {
    private votes: number = 10;
    private isUpvoted: boolean = false;
    private isDownvoted: boolean = false;

    onUpvote($event){
        if(this.isDownvoted){
            this.isDownvoted = false;
            this.votes += 1;
        }
        this.isUpvoted = !this.isUpvoted;
        this.votes += $event.vote
    }
    
    onDownvote($event){
        console.log($event)
        if(this.isUpvoted){
            this.isUpvoted = false;
            this.votes -= 1;
        }
        this.isDownvoted = !this.isDownvoted;
        this.votes += $event.vote
    }
}