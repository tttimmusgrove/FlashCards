/// <reference path="../../typings/tsd.d.ts" />
System.register(['angular2/core', 'rxjs/Rx', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, Rx_1, router_1;
    var SearchResultsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SearchResultsComponent = (function () {
                function SearchResultsComponent() {
                    this.decks = {};
                    this.decks = {};
                }
                SearchResultsComponent.prototype.ngAfterViewInit = function () {
                    $(document).ready(function () {
                        var _this = this;
                        var keyups = Rx_1.Observable.fromEvent($("#searchForm"), "keyup")
                            .map(function (e) { return e.target.value; })
                            .filter(function (text) { return text.length >= 3; })
                            .debounceTime(400)
                            .distinctUntilChanged()
                            .flatMap(function (searchTerm) {
                            var url = "http://galvanize-cors-proxy.herokuapp.com/https://api.quizlet.com/2.0/search/sets?client_id=BGDhWP7Cth&whitespace=1&q=" + searchTerm;
                            var promise = $.getJSON(url);
                            return Rx_1.Observable.fromPromise(promise);
                        });
                        keyups.subscribe(function (data) {
                            _this.decks = data;
                            console.log(_this.decks);
                        });
                    });
                };
                SearchResultsComponent = __decorate([
                    core_1.Component({
                        selector: 'SearchResults',
                        template: "\n  <main>\n     <form class=\"form-inline\" >\n  \u00A0 \u00A0<div class=\"form-group\">\n\u00A0 \u00A0 \u00A0 <label for=\"searchForm\">Search</label>\n\u00A0 \u00A0 \u00A0 <input type=\"text\" class=\"form-control\" id=\"searchForm\" placeholder=\"Search\">\n\u00A0 \u00A0 </div>\n\u00A0 \u00A0 <button\u00A0id=\"mySearch\" type=\"submit\" class=\"btn btn-primary\">Search</button>\n\u00A0 </form>\n\n <div class=\"row\">\n\u00A0<ul>\n\u00A0   <div class=\"list-group\">\n\u00A0 \u00A0     <a href=\"#\" class=\"list-group-item list-group-item-action\" *ngFor=\"#deck of decks.sets\">1</a>\n\u00A0   </div>\n </ul>\n\u00A0</div>\n\u00A0</main>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchResultsComponent);
                return SearchResultsComponent;
            }());
            exports_1("SearchResultsComponent", SearchResultsComponent);
        }
    }
});
//    constructor(){
//      $(document).ready(function(){
//         var keyups = Observable.fromEvent($("#mySearch"), "keyup")
//           .map(e => e.target.value)
//           // .filter(text => text.length >= 3)
//           // .debounceTime(400)
//           .distinctUntilChanged()
//           .flatMap(searchTerm => {
//               console.log("BABABABABANNANANANA")
//               var url = "http://galvanize-cors-proxy.herokuapp.com/https://api.quizlet.com/2.0/search/sets?client_id=BGDhWP7Cth&whitespace=1&q="+searchTerm;
//               var promise = $.getJSON(url);
//               return Observable.fromPromise(promise);
//           });
//
//       keyups.subscribe(data => console.log(data))
//     });
// }
//   var text = e.target.value;
//
//   if(text.length < 3) {
//       return;
//   }
//
//   var url = "http://galvanize-cors-proxy.herokuapp.com/https://api.quizlet.com/2.0/search/sets?client_id=BGDhWP7Cth&whitespace=1&q="+text;
//   $.getJSON(url, function(cards){
//       console.log(cards);
//   })
//   })
// }
//# sourceMappingURL=SearchResults.component.js.map