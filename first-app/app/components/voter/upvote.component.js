System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var UpvoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UpvoteComponent = (function () {
                function UpvoteComponent() {
                    this.isActive = false;
                    this.change = new core_1.EventEmitter();
                }
                UpvoteComponent.prototype.onClick = function ($event) {
                    this.isActive = !this.isActive;
                    this.change.emit({
                        vote: (this.isActive) ? 1 : -1,
                    });
                };
                __decorate([
                    core_1.Input('is-active'), 
                    __metadata('design:type', Boolean)
                ], UpvoteComponent.prototype, "isActive", void 0);
                __decorate([
                    core_1.Output('active-toggled'), 
                    __metadata('design:type', Object)
                ], UpvoteComponent.prototype, "change", void 0);
                UpvoteComponent = __decorate([
                    core_1.Component({
                        selector: 'upvote',
                        template: "<i\n    [class.inactive]=\"!isActive\"\n    [class.upvoted]=\"isActive\" \n    class=\"glyphicon glyphicon-menu-up voter\" (click)=\"onClick($event)\"></i>",
                        styleUrls: [
                            'app/components/voter/voter.styles.css'
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], UpvoteComponent);
                return UpvoteComponent;
            }());
            exports_1("UpvoteComponent", UpvoteComponent);
        }
    }
});
//# sourceMappingURL=upvote.component.js.map