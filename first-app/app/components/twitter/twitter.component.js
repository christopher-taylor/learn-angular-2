System.register(['angular2/core', '../like/like.component'], function(exports_1, context_1) {
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
    var core_1, like_component_1;
    var TwitterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            TwitterComponent = (function () {
                function TwitterComponent() {
                }
                __decorate([
                    core_1.Input('profile-picture'), 
                    __metadata('design:type', String)
                ], TwitterComponent.prototype, "pic", void 0);
                __decorate([
                    core_1.Input('title'), 
                    __metadata('design:type', String)
                ], TwitterComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input('username'), 
                    __metadata('design:type', String)
                ], TwitterComponent.prototype, "handle", void 0);
                __decorate([
                    core_1.Input('message'), 
                    __metadata('design:type', String)
                ], TwitterComponent.prototype, "tweet", void 0);
                __decorate([
                    core_1.Input('starting-likes'), 
                    __metadata('design:type', Number)
                ], TwitterComponent.prototype, "likes", void 0);
                TwitterComponent = __decorate([
                    core_1.Component({
                        selector: 'twitter',
                        templateUrl: 'app/components/twitter/twitter.template.html',
                        styleUrls: [
                            'app/components/twitter/twitter.styles.css'
                        ],
                        directives: [like_component_1.LikeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TwitterComponent);
                return TwitterComponent;
            }());
            exports_1("TwitterComponent", TwitterComponent);
        }
    }
});
//# sourceMappingURL=twitter.component.js.map