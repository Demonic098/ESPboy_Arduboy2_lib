(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),A=a(8),i=a.n(A),l=a(149),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var o=a(34);a.d(t,"waitForRouteChange",function(){return o.c});var s=a(151),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(35);a.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),m=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),A=a(8),i=a.n(A),l=a(36),c=a(1),o=function(e){var t=e.location,a=c.default.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:a})};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},153:function(e,t,a){},155:function(e,t,a){"use strict";a(50);var n=a(0),r=a.n(n),A=a(150);a(156),t.a=function(e){var t=e.pages;return r.a.createElement("nav",{className:"header"},r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",null,r.a.createElement(A.Link,{to:e.url},e.label))})))}},156:function(e,t,a){},163:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAABSCAAAAAAai+X1AAACqklEQVR4nO1b25bDIAiEPf3/X2YfGo0ixEusux0zD22TGCkOAYSWaQXkeOcl0iJ+1opbC2jloqGIeXYKJM4nay0Tmjlo5V7vN8nNpdN8TpNe7A4r2IG5G8hYXuwxKoBmDlq5+2Y5B0I036J3YI4nuQIuokoLguzKd0iSqDYR0MxBK2c7lB7rGrPEfmRC2iRuyNy/gxwvHA9aAM0ctHLRLKf5hVkhM+DMXSStNLWkNNDMQStX9ZaHIVwawJUlZn6uG9mN2RRZvubURfdk7nhkw2IMrv2Nql6Lx2A1TAmBZg5auVjao8IGeqyILbu7He9a7mYiiZLOYC1EjM/c7HqcfsxHJPRkS1yk0vL+DtDMQSv3arIYiS8B1XuybXMnuq2Y7YiKzVx9iLmO2UKVJ5UvMbn7VKP8nA+aOWjlXmZukcAJOGGXU+laWndrc8xal8M9g/CFtkmcX3QuGBEVC++vokm545OzKfW5zN84zqcb+LkltHKxhRVQqYacY8VyCeZlMi5f1mZGMnnJD5gInDlo5VobIbqIZvrE1BPW4mf2IJjymm1TisMncb4Hv/2gPJBYp6nMZa5mscRCMwetXGGWc1vcfhfBEWGmX6MZ2V7MOfB3IybVFfI//QsIfhLn70ZD87Es+pDyFKzT1uQyO/7A8hzBWsccSJkTbcycs4rmDlxdSdaR01TDKf/pie7hyVC+HAOJs6QP/lWByIlmZflvBjLvtcOWB1o5yyzLGFbWj27UF7ULZhK108/2/I1TGh+xmbPjiibLH2+mGdYAq85yMaxXjAlo5qCVa4tzLRW6qwF151Cx1bq1WiP2Zm7JfwYcmL2I40pLsg3NHLRya/40wdVA5sMJcYmjcp8caOaqGcpfOhSF5/9zKaCVc/n91C+zxqB/StLWm4Rm7hdB7bcAwjxoigAAAABJRU5ErkJggg=="},164:function(e,t,a){"use strict";var n=a(165),r=a(0),A=a.n(r),i=a(158),l=a.n(i),c=a(8),o=a.n(c),s=a(159),u=a.n(s),d=a(150),f=a(155),m=(a(153),[{url:"/tacklebox",label:"home"},{url:"/tacklebox/help",label:"help"},{url:"/tacklebox/contact",label:"contact"}]),g=function(e){var t=e.className,a=e.children,r=l()("layout",t);return A.a.createElement(d.StaticQuery,{query:"1816906826",render:function(e){return A.a.createElement(A.a.Fragment,null,A.a.createElement(u.a,{title:e.site.siteMetadata.tacklebox.title,meta:[{name:"description",content:e.site.siteMetadata.tacklebox.title},{name:"keywords",content:e.site.siteMetadata.tacklebox.keywords},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:e.site.siteMetadata.tacklebox.twitterHandle},{name:"twitter:title",content:e.site.siteMetadata.tacklebox.title},{name:"twitter:description",content:e.site.siteMetadata.tacklebox.description},{name:"twitter:image",content:"https://city41.games/tackleboxTitle.png"},{name:"og:title",content:e.site.siteMetadata.tacklebox.title},{name:"og:type",content:"website"},{name:"og:url",content:"https://city41.games/tacklebox"},{name:"og:description",content:e.site.siteMetadata.tacklebox.description},{name:"og:image",content:"https://city41.games/tackleboxTitle.png"},{name:"og:title",content:e.site.siteMetadata.tacklebox.title}]},A.a.createElement("html",{lang:"en"})),A.a.createElement(f.a,{pages:m}),A.a.createElement("div",{className:"layoutContainer"},A.a.createElement("div",{className:r},a)))},data:n})};g.propTypes={children:o.a.node.isRequired},t.a=g},165:function(e){e.exports={data:{site:{siteMetadata:{tacklebox:{title:"Tackle Box",keywords:"Arduboy, games, animal crosing style, fishing, adventure",description:"A fishing adventure game for the Arduboy"},twitterHandle:"@mattegreer"}}}}},176:function(e,t,a){},203:function(e,t,a){},205:function(e,t,a){e.exports=a.p+"static/collectionMenu-307db3960dfbc8561d95ff8da006bcd4.mp4"},206:function(e,t,a){e.exports=a.p+"static/catchLobster-e8259fab0408ff152294258a19b1144f.mp4"},207:function(e,t){e.exports="data:image/png;base64,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"},208:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACACAYAAADktbcKAAAFGUlEQVR4nO3dy5KbMBAFUDuV//9lZ5FiMcREEkigVp+zmxkP4EepL0Ju3q/X6/OCYD6fvx/b9/v98JHE9uvpAwCe835JAASyVf4jR4lg/3/7x53dbnQSACT2++kDgCtqK/P2uNpKX3rcKiQASGyZBHB2xF713G5V+wpdOrfvtZ9VSQCQWLgE0HtEPtqeZDCns+///v+O1hGsXvH3JABILNw6gKuzuK2zwczJSsA+JABILFwC2Iw6V1NRyEQCgMTCXQWoVbsmHDKTACCxZRPAfpZY5f9p1Aq6p9Re9Tn6OSsJABJbNgHwU+334aNVxNoVfSr/dxIAJLZ8Ash+7l+qkK2VcNYVlKMq+6zPtxcJABILlwCurvEvPX6Vc8TSrPfVc+LZrq6Ujv/q+zzb8+1FAoDEwiWAI60jerZ1AqNmwWd5/Uqz/r3M8nx7kQAgsTAJoHbELZ371v4cdS5g9Ln/fj9Pq30+Vyv3LM+3NwkAEpu+H8DVkbe18pe2M7vWlXGrWXXF4ygSACS2fALYnK38+/+PIkvFL/E6/J8EAImlSQBXqRysSAKAxMKsA9hrXft9dvuzJBAYQQKAxMIlgNH3eVf5yUQCgMSGXwV4qpKq5Kxk1FUoCQASu20O4OoIVtvl1covVjI6wUoAkFiYqwCl73mXHgf8SwKAxMIkgKvMDeSmD8B3EgAktmwCmK0zTK+Vi6UeeLX9DrJUwqP7AWyOXocsiVECgMSmSQC9KlXve+H11nonmk3v68GzvB53y34noD0JABKbJgFcdVc//N5qu/heNXr7szq638P+71lJAJDYMglgb/aKX1J7/K13TMqm152AZvsc9SIBQGK39QMYNXKWzv3vOg7mFvX9H33cEgAkttwcgL4AfOP9/04CgMTCJwAVH86TACCx8Algo+JDOwkAEjMAQGIGAEhsmTmAUj+B2hWDrMn7/Z0EAImFTwC136d/uvLf1evvaHtHfz97fKXHzaK1J2C053eVBACJhU8Am2jneL2Os3fyOVvpo/Qb6PX8VyEBQGLLJIDSyP50h5faSn309yOjKlWpEkapkGd7AkZNOK0kAEhsmQRQOvd9Wutx1Fag2qsH+5+vJp8ocy2tr/ssn5e7SACQWPiegKX9lK6fR6lkXBPtKtFGT0BgmGXmAForfLRKwDXe7+8kAEhsmQSwab3eDplJAJDYcglgT8WHYxIAJGYAgMQMAJCYAYAUPp9PunX+NQwAkNjyVwFaldZen12b3bvnXu/edaOOr7VPw9H2zhrVE3CVHooSACQWPgGMOq8b3WmntJ/ej6v11H5L279ru08ngrtJAJBY+ATQ6ulzrqd7/c2639EVv7Yn4NnvjkRNAhIAJBY+AczeDXjvbEUpXZXopfb4riaZs3MNra6+PrN3b75KAoDElukJWLv/UZWGuT39OTxLT0BgmPBzALVmv28AY0Wr/HeRACCx5RNA68ovyEQCgMQMAJCYAQASMwBAYgYASMwAQAp6An5nAIDEll8HMIunes3N3pNutLM9AUu/X+X1lwAgsfAJYFSX3k3vEfrpnoBPV5ynjXo/o3UC2kgAkFj4BLAZ3R347srZq9NMr553UbX2BNy0fp6iJgEJABJbJgFEmQM4u9/SHEBp9jqrs5W8djt6AgJhLd8TEF6vuJ9DPQGBYZaZA4D/iVb57yIBQGIGAEjMAACJGQAgMQMAJHbbVYBZV0JBZhIAJDZ8JSAwLwkAEjMAQGIGAEjsD4KNX0TqzoS1AAAAAElFTkSuQmCC"},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),A=a(164),i=(a(176),a(203),a(163)),l=a.n(i),c=a(205),o=a.n(c),s=a(206),u=a.n(s),d=a(207),f=a.n(d),m=a(208),g=a.n(m);t.default=function(){return r.a.createElement(A.a,{className:"home"},r.a.createElement("img",{className:"titleImage",src:l.a,alt:"Tackle Box Title Screen"}),r.a.createElement("p",null,"A fishing adventure in your pocket. Can you find all 20 fish? A casual Arduboy game, inspired by Animal Crossing."),r.a.createElement("a",{href:"https://github.com/city41/tacklebox/releases/tag/1.0.2",className:"downloadHere"},"Download Here"),r.a.createElement("div",{className:"mediaContainer"},r.a.createElement("video",{className:"catchLobster",src:u.a,muted:!0,width:"256",height:"128",autoPlay:!0,loop:!0,playsinline:!0,controls:!0}),r.a.createElement("div",{className:"divider"}),r.a.createElement("video",{className:"collectionMenu",src:o.a,muted:!0,width:"256",height:"128",autoPlay:!0,loop:!0,playsinline:!0,controls:!0}),r.a.createElement("img",{className:"bearsTackle",src:f.a,alt:"outside bear's tackle shop"}),r.a.createElement("img",{className:"buyInTheShop",src:g.a,alt:"buying things in the shop"})),r.a.createElement("div",{className:"features"},r.a.createElement("h3",null,"Features"),r.a.createElement("ul",null,r.a.createElement("li",null,"20 fish to catch"),r.a.createElement("li",null,"a day/night cycle, different things happen at different times of the day"),r.a.createElement("li",null,"Five bodies of water to fish in"),r.a.createElement("li",null,"Different fishes prefer different baits, are active at different hours, etc"),r.a.createElement("li",null,"A couple secrets to find"),r.a.createElement("li",null,"A full featured shop to buy equipment and sell your haul"))),r.a.createElement("p",null,"©2018 Matt Greer"))}}}]);
//# sourceMappingURL=component---src-pages-tbox-index-js-3f3eeb476ec5ec7d16f4.js.map