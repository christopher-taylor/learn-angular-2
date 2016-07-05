import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {LikeComponent} from '../like/like.component'
@Component({
    selector: 'twitter',
    templateUrl: 'app/components/twitter/twitter.template.html',
    styleUrls: [
        'app/components/twitter/twitter.styles.css'
    ],
    directives: [LikeComponent]
})
export class TwitterComponent {
    @Input('profile-picture') pic: string;
    @Input('title') title: string;
    @Input('username') handle: string;
    @Input('message') tweet: string;
    @Input('starting-likes')likes: number;
}