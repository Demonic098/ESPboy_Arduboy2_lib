(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(e,t,a){"use strict";a.r(t),a(181),a(75),a(50);var n=a(12),r=a.n(n),i=a(0),l=a.n(i),o=a(160),s=a.n(o),c=a(161),u=a.n(c),m=a(162),d=(a(76),a(54),a(200),a(53),a(202)),A=a.n(d),h={CORNER:"the river",ADVANCED:"advanced pond",BEGINNER:"beginner pond",OCEAN:"the ocean",OCEAN_ISLAND:"island"},E=function(e){var t=e.habitats;return l.a.createElement("div",{className:A.a.habitats},l.a.createElement("h5",{className:A.a.foundIn},"found in:"),t.map(function(e){return l.a.createElement("div",null,l.a.createElement("img",{src:"/fishImages/"+e+".png",alt:h[e]}),h[e])}))},p=a(204),f=a.n(p),R=function(e){var t,a=e.className,n=e.data,r=s()(a,f.a.fish);return l.a.createElement("div",{className:r},l.a.createElement("div",{className:f.a.nameAndImage},l.a.createElement("h4",null,n.name),l.a.createElement("div",{className:f.a.imgContainer},l.a.createElement("img",{className:f.a[n.name],src:"/fishImages/"+n.name+".png",alt:n.name}))),l.a.createElement("div",{className:f.a.data},l.a.createElement(E,{habitats:n.habitats}),l.a.createElement("div",{className:f.a.stats},l.a.createElement("div",null,"active ",function(e){if(0===e[0]&&23===e[1])return"all day";var t=e[0],a=e[1];return"from "+(t>12?t-12:t)+(t>=12?"pm":"am")+" to "+(a>12?a-12:a)+(a>=12?"pm":"am")}(n.activeHours)),l.a.createElement("div",null,"likes: ",(t=n.baitPreference,Object.keys(t).reduce(function(e,a){return t[a]?e.concat(a):e},[]).join(", ").toLowerCase())),l.a.createElement("div",null,"size range: ",n.lengths[0],"cm to ",n.lengths[1],"cm"," "),l.a.createElement("div",null,"value: $",n.value," "))))},g=(a(206),a(208),a(210)),b=a.n(g),v=a(211),N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={agreedToNotTell:!1,okWithSpoilers:!1},a}return r()(t,e),t.prototype.render=function(){var e,t=this,a=this.state,n=a.agreedToNotTell,r=a.okWithSpoilers,i=s()("agreement",{agreed:n}),o=s()("agreement",{agreed:r});return e=n&&r?l.a.createElement(l.a.Fragment,null,v.fish.filter(function(e){return"OLD BOOT"!==e.name}).map(function(e){return l.a.createElement(R,{className:"fish",data:e})})):l.a.createElement("div",null,l.a.createElement("h1",null,"Please check these to see the guide"),l.a.createElement("div",{className:i},l.a.createElement("input",{onClick:function(){return t.setState({agreedToNotTell:!0})},type:"checkbox"}),"I won't tell other players about this page"),l.a.createElement("div",{className:o},l.a.createElement("input",{onClick:function(){return t.setState({okWithSpoilers:!0})},type:"checkbox"}),"I am OK with spoilers")),l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})),l.a.createElement(m.a,{className:"fg"},l.a.createElement("img",{className:"titleImage",src:b.a,alt:"Fish Guide Logo"}),l.a.createElement("div",{className:"guideContainer"},e),l.a.createElement("p",null,"©2018 Matt Greer")))},t}(l.a.Component);t.default=N},151:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return E}),a.d(t,"StaticQueryContext",function(){return A}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),i=a(8),l=a.n(i),o=a(150),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(34);a.d(t,"waitForRouteChange",function(){return c.c});var u=a(152),m=a.n(u);a.d(t,"PageRenderer",function(){return m.a});var d=a(35);a.d(t,"parsePath",function(){return d.a});var A=r.a.createContext({}),h=function(e){return r.a.createElement(A.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function E(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},152:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),l=a.n(i),o=a(36),s=a(1),c=function(e){var t=e.location,a=s.default.getResourcesForPathname(t.pathname);return r.a.createElement(o.a,{location:t,pageResources:a})};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},154:function(e,t,a){},156:function(e,t,a){"use strict";a(50);var n=a(0),r=a.n(n),i=a(151),l=a(157),o=a.n(l);a(158),t.a=function(e){var t=e.pages;return r.a.createElement("nav",{className:"header"},r.a.createElement("ul",null,r.a.createElement("li",{className:"city41Home"},r.a.createElement(i.Link,{to:"/"},r.a.createElement("img",{src:o.a,alt:"small city41 games logo"}))),t.map(function(e){return r.a.createElement("li",null,r.a.createElement(i.Link,{to:e.url},e.label))})))}},157:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAAAAADVHSBLAAAAMUlEQVQImW3KMQ6AQACEwOHi/7+8VhoL6Qg0aDKNI/lwrL0WRwu2vwOX1oT9H+cpDzcHJhEPXm6Z9AAAAABJRU5ErkJggg=="},158:function(e,t,a){},162:function(e,t,a){"use strict";var n=a(163),r=a(0),i=a.n(r),l=a(160),o=a.n(l),s=a(8),c=a.n(s),u=a(161),m=a.n(u),d=a(151),A=a(156),h=(a(154),[{url:"/tacklebox",label:"home"},{url:"/tacklebox/help",label:"help"},{url:"/tacklebox/contact",label:"contact"}]),E=function(e){var t=e.className,a=e.children,r=o()("layout",t);return i.a.createElement(d.StaticQuery,{query:"1816906826",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{title:e.site.siteMetadata.tacklebox.title,meta:[{name:"description",content:e.site.siteMetadata.tacklebox.title},{name:"keywords",content:e.site.siteMetadata.tacklebox.keywords},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:e.site.siteMetadata.tacklebox.twitterHandle},{name:"twitter:title",content:e.site.siteMetadata.tacklebox.title},{name:"twitter:description",content:e.site.siteMetadata.tacklebox.description},{name:"twitter:image",content:"https://city41.games/tackleboxTitle.png"},{name:"og:title",content:e.site.siteMetadata.tacklebox.title},{name:"og:type",content:"website"},{name:"og:url",content:"https://city41.games/tacklebox"},{name:"og:description",content:e.site.siteMetadata.tacklebox.description},{name:"og:image",content:"https://city41.games/tackleboxTitle.png"},{name:"og:title",content:e.site.siteMetadata.tacklebox.title}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(A.a,{pages:h}),i.a.createElement("div",{className:"layoutContainer"},i.a.createElement("div",{className:r},a)))},data:n})};E.propTypes={children:c.a.node.isRequired},t.a=E},163:function(e){e.exports={data:{site:{siteMetadata:{tacklebox:{title:"Tackle Box",keywords:"Arduboy, games, animal crosing style, fishing, adventure",description:"A fishing adventure game for the Arduboy"},twitterHandle:"@mattegreer"}}}}},181:function(e,t,a){var n=a(26).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(16)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},200:function(e,t,a){var n=a(27),r=a(38);a(201)("keys",function(){return function(e){return r(n(e))}})},201:function(e,t,a){var n=a(5),r=a(18),i=a(17);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],l={};l[e]=t(a),n(n.S+n.F*i(function(){a(1)}),"Object",l)}},202:function(e,t,a){e.exports={habitats:"habitats-module--habitats--1qGMx",foundIn:"habitats-module--foundIn--13ROL"}},204:function(e,t,a){e.exports={fish:"fish-module--fish--4jkej",nameAndImage:"fish-module--nameAndImage--36gdN",imgContainer:"fish-module--imgContainer--3lqcT",BASS:"fish-module--BASS--4gdKm",BETA:"fish-module--BETA--2Ik92",CATFISH:"fish-module--CATFISH--1eo9B",CRAWFISH:"fish-module--CRAWFISH--3RceR",GOLDFISH:"fish-module--GOLDFISH--3FwkR",GUPPY:"fish-module--GUPPY--370Nb",TROUT:"fish-module--TROUT--3wtAK",MINNOW:"fish-module--MINNOW--1zAHk",SARDINE:"fish-module--SARDINE--2xrDl",SEAHORSE:"fish-module--SEAHORSE--8pOPZ",CRAB:"fish-module--CRAB--2DnTu",FANGTOOTH:"fish-module--FANGTOOTH--3kGka",FLOUNDER:"fish-module--FLOUNDER--25LtX",LOBSTER:"fish-module--LOBSTER--2ZCYb",OCTOPUS:"fish-module--OCTOPUS--3i3jL",EEL:"fish-module--EEL--2-JZf",GROUPER:"fish-module--GROUPER--3L8-D",MARLIN:"fish-module--MARLIN--3lHTS",GRTWHITE:"fish-module--GRTWHITE--30WIy",SHARK:"fish-module--SHARK--3QZ3y",data:"fish-module--data--yXhOQ",stats:"fish-module--stats--eaIaZ"}},206:function(e,t,a){},208:function(e,t,a){},210:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAATCAAAAAAFGFRbAAAAx0lEQVQ4jaWSWRLDIAxDpUzuf+XXD9tg0tIlVSYsA3iRJP0JS5Lom58DcA2I5BosJBmzyXDmO+KvKFiWyMXuccu4dHRJ3uvaVrC2UhVkJ7hu7FsQbnXQ4i29vWthy9IHHDPrPRyNnaukXyE4CHaKhyLfaYE4JrilTlIkCQCUH6MbcpEzErlm7qSjyDZhN6QII8n03TPDMGUUnkqOm92JIe4Cq6lQJe3xWuJTq51HFazekpFjQHh4zabIntd+wrFqf8dOKeFdPADasnUDMYyeBwAAAABJRU5ErkJggg=="},211:function(e){e.exports={fish:[{name:"GOLDFISH",baitPreference:{WORM:1,GRUB:1,SHRIMP:0,MEAT:0},activeHours:[0,23],habitats:["BEGINNER","ADVANCED"],ratio:5,pull:3,proWindow:64,deepWater:!1,value:2,lengths:[3,20]},{name:"GUPPY",baitPreference:{WORM:1,GRUB:0,SHRIMP:0,MEAT:0},activeHours:[0,23],habitats:["BEGINNER","ADVANCED"],ratio:5,pull:2,proWindow:80,deepWater:!1,value:1,lengths:[1,4]},{name:"MINNOW",baitPreference:{WORM:0,GRUB:1,SHRIMP:0,MEAT:0},activeHours:[0,23],habitats:["ADVANCED","OCEAN","OCEAN_ISLAND"],ratio:8,pull:3,proWindow:64,deepWater:!1,value:3,lengths:[2,3]},{name:"BETA",baitPreference:{WORM:1,GRUB:0,SHRIMP:0,MEAT:0},activeHours:[5,15],habitats:["BEGINNER"],ratio:3,pull:4,proWindow:74,deepWater:!1,value:30,lengths:[2,4]},{name:"TROUT",baitPreference:{WORM:1,GRUB:1,SHRIMP:1,MEAT:0},activeHours:[0,23],habitats:["CORNER","ADVANCED"],ratio:3,pull:5,proWindow:54,deepWater:!1,value:14,lengths:[15,25]},{name:"BASS",baitPreference:{WORM:1,GRUB:1,SHRIMP:0,MEAT:0},activeHours:[3,11],habitats:["CORNER","ADVANCED"],ratio:10,pull:5,proWindow:60,deepWater:!0,value:25,lengths:[20,40]},{name:"CATFISH",baitPreference:{WORM:1,GRUB:1,SHRIMP:0,MEAT:0},activeHours:[12,20],habitats:["CORNER"],ratio:10,pull:5,proWindow:72,deepWater:!0,value:15,lengths:[10,40]},{name:"FLOUNDER",baitPreference:{WORM:0,GRUB:0,SHRIMP:1,MEAT:0},activeHours:[0,23],habitats:["OCEAN","OCEAN_ISLAND"],ratio:8,pull:4,proWindow:58,deepWater:!1,value:20,lengths:[20,40]},{name:"CRAB",baitPreference:{WORM:0,GRUB:1,SHRIMP:1,MEAT:0},activeHours:[10,16],habitats:["OCEAN","OCEAN_ISLAND"],ratio:2,pull:3,proWindow:64,deepWater:!1,value:25,lengths:[5,45]},{name:"OCTOPUS",baitPreference:{WORM:0,GRUB:1,SHRIMP:1,MEAT:0},activeHours:[18,23],habitats:["OCEAN_ISLAND"],ratio:1,pull:8,proWindow:70,deepWater:!1,value:80,lengths:[100,200]},{name:"GROUPER",baitPreference:{WORM:0,GRUB:0,SHRIMP:1,MEAT:1},activeHours:[0,23],habitats:["OCEAN_ISLAND"],ratio:4,pull:6,proWindow:62,deepWater:!1,value:10,lengths:[50,250]},{name:"SEAHORSE",baitPreference:{WORM:0,GRUB:1,SHRIMP:0,MEAT:0},activeHours:[3,9],habitats:["OCEAN"],ratio:8,pull:1,proWindow:64,deepWater:!1,value:4,lengths:[1,4]},{name:"EEL",baitPreference:{WORM:0,GRUB:1,SHRIMP:1,MEAT:0},activeHours:[0,23],habitats:["OCEAN","OCEAN_ISLAND"],ratio:6,pull:4,proWindow:60,deepWater:!1,value:8,lengths:[20,100]},{name:"SARDINE",baitPreference:{WORM:0,GRUB:1,SHRIMP:1,MEAT:0},activeHours:[4,11],habitats:["OCEAN"],ratio:8,pull:2,proWindow:64,value:2,lengths:[1,4]},{name:"CRAWFISH",baitPreference:{WORM:1,GRUB:1,SHRIMP:0,MEAT:0},activeHours:[4,9],habitats:["CORNER"],ratio:4,pull:6,proWindow:66,deepWater:!1,value:20,lengths:[4,8]},{name:"FANGTOOTH",baitPreference:{WORM:0,GRUB:0,SHRIMP:1,MEAT:0},activeHours:[0,23],habitats:["OCEAN_ISLAND"],ratio:4,pull:7,proWindow:68,deepWater:!0,value:40,lengths:[10,30]},{name:"LOBSTER",baitPreference:{WORM:0,GRUB:0,SHRIMP:1,MEAT:0},activeHours:[4,20],habitats:["OCEAN","OCEAN_ISLAND"],ratio:5,pull:5,proWindow:80,deepWater:!1,value:80,lengths:[10,30]},{name:"MARLIN",baitPreference:{WORM:0,GRUB:0,SHRIMP:1,MEAT:1},activeHours:[4,10],habitats:["OCEAN_ISLAND"],ratio:3,pull:7,proWindow:75,deepWater:!0,value:100,lengths:[80,170]},{name:"SHARK",baitPreference:{WORM:0,GRUB:0,SHRIMP:0,MEAT:1},activeHours:[0,14],habitats:["OCEAN_ISLAND"],ratio:2,pull:8,proWindow:80,deepWater:!0,value:200,lengths:[100,200]},{name:"GRTWHITE",baitPreference:{WORM:0,GRUB:0,SHRIMP:0,MEAT:1},activeHours:[13,23],habitats:["OCEAN_ISLAND"],ratio:1,pull:8,proWindow:95,deepWater:!0,value:250,lengths:[180,250]},{name:"OLD BOOT",baitPreference:{WORM:0,GRUB:0,SHRIMP:0,MEAT:0},activeHours:[30,30],habitats:["BEGINNER"],ratio:0,pull:3,proWindow:64,deepWater:!1,value:0,lengths:[1,10]}]}}}]);
//# sourceMappingURL=component---src-pages-fg-index-js-a952361f3449bb17e9d0.js.map