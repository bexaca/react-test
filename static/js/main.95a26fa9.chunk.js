(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(28)},17:function(e,t,n){},18:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(4),i=n.n(o),r=(n(17),n(8)),u=n(5),l=n(6),s=n(9),h=n(7),m=n(10),d=(n(18),n(1)),p=n.n(d),y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={value:"",city:[]},n.handleChange=function(e){n.setState({value:e.target.value})},n.handleSubmit=function(e){p.a.get("https://api.weatherbit.io/v2.0/current").query({city:n.state.value}).query({key:"d5c3391c63af47658c84946c5fe654e5"}).then(function(e){e.body&&n.setState(function(t){return{city:[].concat(Object(r.a)(t.city),[e.body.data[0]])}})}),e.preventDefault()},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("test"),p.a.get("https://api.weatherbit.io/v2.0/current").query({city:"Belgrade"}).query({key:"d5c3391c63af47658c84946c5fe654e5"}).then(function(e){console.log(e.body)})}},{key:"render",value:function(){var e=this.state.city.map(function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("h5",null,e.city_name),c.a.createElement("h6",null,e.weather.description))});return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange}),c.a.createElement("input",{type:"submit",value:"Submit"})),this.state.city?e:c.a.createElement("h5",null,"Populate me")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.95a26fa9.chunk.js.map