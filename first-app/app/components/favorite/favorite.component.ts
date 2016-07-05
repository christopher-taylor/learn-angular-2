import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favorite',
    templateUrl: `app/components/favorite/favorite.template.html`,
    styles: [`
        .glyphicon-star{
            color: orange;
        }
    `]
})
export class FavoriteComponent {
    //is-favorite is a public alias for a private field
    @Input('is-favorite') isFavorited: boolean = false;

    @Output('favorite-toggled') change = new EventEmitter();
    
    onClick($event){
        this.isFavorited = !this.isFavorited;
        $event.stopPropagation();
        this.change.emit({
            newValue: this.isFavorited,
            secretMessage: 'fuck you'
        });
    }
}