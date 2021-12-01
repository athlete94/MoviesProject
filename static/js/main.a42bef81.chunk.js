(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(8),r=a.n(s),i=(a(13),a(2)),o=a(3),l=a(5),h=a(4),j=a(0),d=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{className:"purple darken-2",children:Object(j.jsxs)("div",{class:"nav-wrapper",children:[Object(j.jsx)("a",{href:"#",class:"brand-logo",children:"Movies"}),Object(j.jsx)("ul",{id:"nav-mobile",class:"right hide-on-med-and-down",children:Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/athlete94",children:"Github"})})})]})})})},p=function(){return Object(j.jsx)("footer",{class:"page-footer purple lighten-3",children:Object(j.jsx)("div",{class:"footer-copyright purple darken-1",children:Object(j.jsxs)("div",{class:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(j.jsx)("a",{class:"grey-text text-lighten-4 right",href:"https://github.com/athlete94",children:"GitHub"})]})})})},u=a(7),b=function(e){var t=e.Title,a=e.Year,c=e.imdbID,n=e.Type,s=e.Poster;return Object(j.jsxs)("div",{id:c,className:"card",children:[Object(j.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===s?Object(j.jsx)("img",{src:"https://via.placeholder.com/150x210.png?text=".concat(t)}):Object(j.jsx)("img",{className:"activator",src:s})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(j.jsxs)("p",{children:[a," ",Object(j.jsx)("span",{className:"right",children:n})]})]})]})},O=function(e){var t=e.movies,a=void 0===t?[]:t;return Object(j.jsxs)("div",{className:"movies",children:[a.length?a.map((function(e){return Object(c.createElement)(b,Object(u.a)(Object(u.a)({},e),{},{key:e.imdbID}))})):Object(j.jsx)("h4",{children:"Nothing found"})," "]})},v=a.p+"static/media/245.ecffabde.png",m=function(){return Object(j.jsx)("div",{className:"preloader",children:Object(j.jsx)("img",{src:v,alt:"preloader"})})},x=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={search:"",type:"all"},e.updateSearch=function(t){if("Enter"===t.key){var a=e.state.search,c=e.state.type;e.props.updateMovies(a,c)}},e.handleFilter=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){e.props.updateMovies(e.state.search,e.state.type)}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{class:"row",children:[Object(j.jsx)("div",{class:"input-field col s12",children:Object(j.jsx)("input",{className:"validate",id:"search",type:"search",placeholder:"search",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.updateSearch})}),Object(j.jsxs)("form",{action:"#",children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",onChange:this.handleFilter,checked:"all"===this.state.type})," ",Object(j.jsx)("span",{children:"All"})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:this.handleFilter,checked:"movie"===this.state.type}),Object(j.jsx)("span",{children:"Movies"})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:this.handleFilter,checked:"series"===this.state.type}),Object(j.jsx)("span",{children:"Serias"})]})]})]})}}]),a}(n.a.Component),f="a3ca55c1",g=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={movies:[],loading:!0},e.componentDidMount=function(){fetch("http://www.omdbapi.com/?apikey=".concat(f,"&s=matrix")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))},e.updateMovies=function(t,a){e.setState({loading:!0}),fetch("http://www.omdbapi.com/?apikey=".concat(f,"&s=").concat(t).concat("all"!==a?"&type=".concat(a):"")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("main",{className:"container content",children:[Object(j.jsx)(x,{updateMovies:this.updateMovies}),this.state.loading?Object(j.jsx)(m,{}):Object(j.jsx)(O,{movies:this.state.movies})]})}}]),a}(n.a.Component),y=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).componentDidMount=function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){return e.setState({posts:t,loading:!1})}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(g,{}),Object(j.jsx)(p,{})]})}}]),a}(n.a.Component);r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a42bef81.chunk.js.map