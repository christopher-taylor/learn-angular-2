System.register(['angular2/core', './components/voter/voter.component', './components/twitter/twitter.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, voter_component_1, twitter_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (twitter_component_1_1) {
                twitter_component_1 = twitter_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.isActive = false;
                    this.defaultTitle = "Fake Twitter";
                    this.title = this.defaultTitle;
                    this.tweets = [
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
                }
                AppComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                    this.isActive = !this.isActive;
                    console.log($event);
                };
                AppComponent.prototype.onInput = function ($event) {
                    var input = $event.target.value;
                    this.title = ((input == "") || (input == undefined)) ? this.defaultTitle : input;
                };
                AppComponent.prototype.onDivClick = function () {
                    console.log("Handled by onDivClick");
                };
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.template.html',
                        directives: [twitter_component_1.TwitterComponent, voter_component_1.VoterComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map