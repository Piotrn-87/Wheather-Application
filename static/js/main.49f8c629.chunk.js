(this["webpackJsonpwheather-application"]=this["webpackJsonpwheather-application"]||[]).push([[0],{14:function(e,t,a){e.exports=a(24)},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),s=a.n(c),i=a(7),l=a(8),m=a(12),u=a(9),o=a(13),p=function(e){return r.a.createElement("form",{className:"Form",onSubmit:e.submit},r.a.createElement("input",{className:"Form__input",type:"text",value:e.value,onChange:e.change,placeholder:"\u2315 Write City"}),r.a.createElement("button",{className:"Form__button"}," Search "))},h=a(10),d=a(11),E=function(e){var t=e.weather,a=t.date,n=t.city,c=t.country,s=t.sunrise,i=t.sunset,l=t.temp,m=t.maxTemp,u=t.minTemp,o=t.pressure,p=t.wind,E=t.error,f=null;if(!E&&n){var b=new Date(1e3*s).toLocaleTimeString(),v=new Date(1e3*i).toLocaleTimeString();f=r.a.createElement("div",{className:"Content"},r.a.createElement("h4",{className:"Content__description"},"Updated:"),r.a.createElement("h1",{className:"Content__date"}," ",a," "),r.a.createElement("h2",{className:"Content__localization"}," ",r.a.createElement(h.a,{className:"Content__icon",icon:d.a}),n,", ",c," "),r.a.createElement("div",{className:"ContentTemp"},r.a.createElement("h1",{className:"ContentTemp__temperature"},l," \xb0C"),r.a.createElement("span",{className:"ContentTemp__min-max"},r.a.createElement("h4",null," Min temp: ",u," \xb0C"),r.a.createElement("h4",null," Max temp: ",m," \xb0C"))),r.a.createElement("h2",null,"Pressure: ",o," hpa"),r.a.createElement("h2",null,"Wind: ",p," m/s"),r.a.createElement("h2",null,"Sunrise: ",b),r.a.createElement("h2",null,"Sunset: ",v))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"Error"},E?"Brak w bazie: ".concat(n):f," "))},f=(a(5),"4bea9bc8d4bfd24c6953bdb10a110b19"),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",date:"",city:"",country:"",sunrise:"",sunset:"",temp:"",minTemp:"",maxTemp:"",pressure:"",wind:"",error:!1},a.handleInputChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(a.state.value,"&appid=").concat(f,"&units=metric");fetch(t).then((function(e){if(e.ok)return e;throw Error("Error !! Spr\xf3buj jeszcze raz")})).then((function(e){return e.json()})).then((function(e){var t=(new Date).toLocaleString();a.setState((function(a){return{error:!1,date:t,sunrise:e.sys.sunrise,sunset:e.sys.sunset,temp:e.main.temp.toFixed(0),minTemp:e.main.temp_min.toFixed(0),maxTemp:e.main.temp_max.toFixed(0),pressure:e.main.pressure,wind:e.wind.speed,city:a.value,country:e.sys.country}}))})).catch((function(e){console.log(e),a.setState((function(e){return{error:!0,city:e.value}}))}))},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{value:this.state.value,change:this.handleInputChange,submit:this.handleSubmit}),r.a.createElement(E,{weather:this.state}))}}]),t}(r.a.Component),v=document.getElementById("root");s.a.render(r.a.createElement(b,null),v)},5:function(e,t,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.49f8c629.chunk.js.map