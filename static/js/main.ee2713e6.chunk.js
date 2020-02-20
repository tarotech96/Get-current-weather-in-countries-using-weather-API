(this.webpackJsonpweather_app_using_react=this.webpackJsonpweather_app_using_react||[]).push([[0],{12:function(e,t,a){e.exports=a(21)},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),s=a.n(r),i=(a(17),a(7)),o=a.n(i),l=a(10),m=a(2),u=a(3),h=a(6),p=a(4),d=a(5);a(19),a(20);var y=function(e){return c.a.createElement("div",{className:"container text-light"},c.a.createElement("div",{className:"cards pt-4"},c.a.createElement("h1",{className:"city"},e.city),c.a.createElement("h5",{className:"py-4"},c.a.createElement("span",null,c.a.createElement("i",{className:"wi ".concat(e.iconWeather," display-1")}))),c.a.createElement("h4",null,e.celcius?c.a.createElement("h1",{className:"py-2"},e.celcius,"\xb0"):null),c.a.createElement("h4",null,function(e,t){if(e&&t)return c.a.createElement("h3",null,c.a.createElement("span",{className:"py-4"},"Min: ",e,"\xb0"),c.a.createElement("br",null),c.a.createElement("span",{className:"py-4"},"Max: ",t,"\xb0"))}(e.temp_min,e.temp_max)),c.a.createElement("h4",{className:"py-3"},e.description)))},b=a(11),f=a(1);var w=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).formSubmit=function(){return c.a.createElement("div",{className:"form"},c.a.createElement("div",null,a.props.error?c.a.createElement("div",{className:"alert alert-danger mx-5",role:"alert"},"Please Enter City And Country"):null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("span",{className:"label label-success mr-20"},"City"),c.a.createElement("input",{type:"text",className:"form-control",name:"city",placeholder:"City",autoComplete:"off",onChange:a.onChangeValue})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("span",{className:"label label-success mr-20"},"Country"),c.a.createElement("input",{type:"text",className:"form-control",name:"country",placeholder:"Country",autoComplete:"off",onChange:a.onChangeValue})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("button",{className:"btn btn-warning mr-10",onClick:a.submitForm},"Get Weather"))))},a.state={city:"",country:""},a.onChangeValue=a.onChangeValue.bind(Object(f.a)(a)),a.submitForm=a.submitForm.bind(Object(f.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"onChangeValue",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(b.a)({},t,a))}},{key:"submitForm",value:function(e){e.preventDefault();var t={city:this.state.city,country:this.state.country};this.props.loadWeather(e,t)}},{key:"render",value:function(){return this.formSubmit()}}]),t}(c.a.Component),v=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).getWeather=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var c,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c="http://api.openweathermap.org/data/2.5/"+"weather?q=".concat(n.city,",").concat(n.country,"&appid=").concat("88b4b25038244d071f187242bdc98206"),e.next=4,fetch(c);case 4:return r=e.sent,e.next=7,r.json();case 7:s=e.sent,console.log(s),a.setState({city:s.name,country:s.sys.country,main:s.main,celcius:a.calCelcius(s.main.temp),temp_min:a.calCelcius(s.main.temp_min),temp_max:a.calCelcius(s.main.temp_max),description:s.weather[0].description}),a.get_WeatherIcon(a.weatherIcon,s.weather[0].id);case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.state={city:"",country:"",iconWeather:"",main:{},celcius:0,temp_min:void 0,temp_max:void 0,description:"",error:!1},a.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"calCelcius",value:function(e){return Math.floor(e-273.15)}},{key:"get_WeatherIcon",value:function(e,t){switch(!0){case t>=200&&t<=232:this.setState({icon:this.weatherIcon.Thunderstorm});break;case t>=300&&t<=321:this.setState({icon:this.weatherIcon.Drizzle});break;case t>=500&&t<=531:this.setState({icon:this.weatherIcon.Rain});break;case t>=600&&t<=622:this.setState({icon:this.weatherIcon.Snow});break;case t>=701&&t<=781:this.setState({icon:this.weatherIcon.Atmosphere});break;case 800===t:this.setState({icon:this.weatherIcon.Clear});break;case t>=801&&t<=804:this.setState({icon:this.weatherIcon.Clouds});break;default:this.setState({icon:this.weatherIcon.Clouds})}}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(w,{loadWeather:this.getWeather,error:this.state.error}),c.a.createElement(y,{city:this.state.city,country:this.state.country,iconWeather:this.state.icon,main:this.state.main,celcius:this.state.celcius,temp_min:this.state.temp_min,temp_max:this.state.temp_max,description:this.state.description}))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.ee2713e6.chunk.js.map