import {Component} from 'angular2/core';
import {VoterComponent} from './components/voter/voter.component'
import {TwitterComponent} from './components/twitter/twitter.component'
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    directives: [TwitterComponent, VoterComponent]
})
export class AppComponent {
    isActive: boolean = false;
    private defaultTitle:string = "Fake Twitter"
    private title: string = this.defaultTitle;
    private tweets = [
        {
            profilePic: "app/assets/images/ghost.jpg",
            title: "New Wu-Tang Album,",
            username: "jerkface_killah",
            message: "RZA uninvolved, so it'll probably be good.",
            startingLikes: 10
        }, {
            profilePic: "app/assets/images/recette.jpg",
            title: "Boom in Weapons",
            username: "items4sale",
            message: "Those margins tho.",
            startingLikes: 7
        }, {
            profilePic: "app/assets/images/campbell.jpg",
            title: "I NEED SCISSORS",
            username: "daRealCampbell",
            message: "69",
            startingLikes: 1
        }, {
            profilePic: "app/assets/images/corey.jpg",
            title: "Unimpressed By Everything",
            username: "BUTT-FACE",
            message: "BLAHBLAHBLAH",
            startingLikes: -100000000000
        }];

    onClick($event){
        $event.stopPropagation();
        this.isActive = !this.isActive;
        console.log($event);
    }
    
    onInput($event){
        var input: string = $event.target.value;
        this.title = ((input == "") || (input == undefined)) ? this.defaultTitle : input;
    }

    onDivClick(){
        console.log("Handled by onDivClick");
    }

    onFavoriteChange($event){
        console.log($event);
    }
}