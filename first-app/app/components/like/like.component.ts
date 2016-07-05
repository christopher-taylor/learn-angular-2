import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'like',
    templateUrl: `app/components/like/like.template.html`,
    styleUrls: [
        'app/components/like/like.style.css'
    ]
})
export class LikeComponent {
    @Input('is-liked') isLiked: boolean = false;
    @Input('starting-likes') likes: number;
    @Output('like-toggled') change = new EventEmitter();
    
    onClick($event){
        this.isLiked = !this.isLiked;
        this.likes += (this.isLiked) ? 1 : -1; 
        $event.stopPropagation();
        this.change.emit({
            newValue: this.isLiked
        });
    }
}