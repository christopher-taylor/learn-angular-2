System.register(['angular2/core', './upvote.component', './downvote.component'], function(exports_1, context_1) {
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
    var core_1, upvote_component_1, downvote_component_1;
    var VoterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (upvote_component_1_1) {
                upvote_component_1 = upvote_component_1_1;
            },
            function (downvote_component_1_1) {
                downvote_component_1 = downvote_component_1_1;
            }],
        execute: function() {
            VoterComponent = (function () {
                function VoterComponent() {
                    this.votes = 10;
                    this.isUpvoted = false;
                    this.isDownvoted = false;
                }
                VoterComponent.prototype.onUpvote = function ($event) {
                    if (this.isDownvoted) {
                        this.isDownvoted = false;
                        this.votes += 1;
                    }
                    this.isUpvoted = !this.isUpvoted;
                    this.votes += $event.vote;
                };
                VoterComponent.prototype.onDownvote = function ($event) {
                    console.log($event);
                    if (this.isUpvoted) {
                        this.isUpvoted = false;
                        this.votes -= 1;
                    }
                    this.isDownvoted = !this.isDownvoted;
                    this.votes += $event.vote;
                };
                VoterComponent = __decorate([
                    core_1.Component({
                        selector: 'voter',
                        template: "\n        <div>\n            <upvote (active-toggled)=\"onUpvote($event)\" [is-active]=\"isUpvoted\"> </upvote><br/>\n            <span\n                class=\"voter\"\n                [class.inactive]=\"!isUpvoted && !isDownvoted\"\n                [class.upvoted]=\"isUpvoted\"\n                [class.downvoted]=\"isDownvoted\">\n                {{votes}}\n            </span><br />\n            <downvote (active-toggled)=\"onDownvote($event)\" [is-active]=\"isDownvoted\"></downvote>\n        </div>",
                        styleUrls: ['app/components/voter/voter.styles.css'],
                        directives: [upvote_component_1.UpvoteComponent, downvote_component_1.DownvoteComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoterComponent);
                return VoterComponent;
            }());
            exports_1("VoterComponent", VoterComponent);
        }
    }
});
//# sourceMappingURL=voter.component.js.map