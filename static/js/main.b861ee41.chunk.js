(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__OGbzk",avatar:"Profile_avatar__3kdE4",description:"Profile_description__2geWC",name:"Profile_name__12f3X",stats:"Profile_stats__1fIb7",item:"Profile_item__1WJ4Z"}},function(e,a,t){e.exports={friendList:"FriendList_friendList__1NmtL",online:"FriendList_online__1dpHP",offline:"FriendList_offline__3UgvW",friendItem:"FriendList_friendItem__2b7Au",avatar:"FriendList_avatar__2x8LQ",name:"FriendList_name__e7C-W"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__2vin5",info:"TransactionHistory_info__bOLJY"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__3x5bK",tittle:"Statistics_tittle__21Qbi",statList:"Statistics_statList___X9iP",item:"Statistics_item__IsaWF",label:"Statistics_label__3Mtf6"}},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(0),c=t(6),i=t.n(c),n=t(9),r=t.n(n),l=(t(17),t(18),t(1)),d=t.n(l),o=function(e){var a=e.avatar,t=e.name,c=e.tag,i=e.location,n=e.stats;return Object(s.jsxs)("div",{className:d.a.profile,children:[Object(s.jsxs)("div",{className:d.a.description,children:[Object(s.jsx)("img",{src:a,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:d.a.avatar}),Object(s.jsx)("p",{className:d.a.name,children:t}),Object(s.jsxs)("p",{className:"tag",children:["@",c]}),Object(s.jsx)("p",{className:"location",children:i})]}),Object(s.jsxs)("ul",{className:d.a.stats,children:[Object(s.jsxs)("li",{className:d.a.item,children:[Object(s.jsx)("span",{className:d.a.label,children:"Followers"}),Object(s.jsx)("span",{className:d.a.quantity,children:n.followers})]}),Object(s.jsxs)("li",{className:d.a.item,children:[Object(s.jsx)("span",{className:d.a.label,children:"Views"}),Object(s.jsx)("span",{className:d.a.quantity,children:n.views})]}),Object(s.jsxs)("li",{className:d.a.item,children:[Object(s.jsx)("span",{className:d.a.label,children:"Likes"}),Object(s.jsx)("span",{className:d.a.quantity,children:n.likes})]})]})]})},b=t(3);var m=function(){var e=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),t=Math.floor(256*Math.random());return"#"+e.toString(16)+a.toString(16)+t.toString(16)},f=t(5),j=t.n(f);var u=function(e){var a=e.title,t=e.stats;return Object(s.jsxs)("section",{className:j.a.statistics,children:[a&&Object(s.jsx)("h2",{className:"title",children:a}),Object(s.jsx)("ul",{className:j.a.statList,children:t.map((function(e){return Object(s.jsxs)("li",{className:j.a.item,style:{backgroundColor:m()},children:[Object(s.jsx)("span",{className:j.a.label,children:e.label}),Object(s.jsxs)("span",{className:"percentage",children:[e.percentage,"%"]})]},e.id)}))})]})},p=t(8),h=t(2),O=t.n(h);var v=function(e){var a=e.avatar,t=e.name,c=e.isOnline;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("span",{className:c?O.a.online:O.a.offline,children:c}),Object(s.jsx)("img",{className:O.a.avatar,src:a,alt:"",width:"48"}),Object(s.jsx)("p",{className:O.a.name,children:t})]})};var y=function(e){var a=e.friends;return Object(s.jsx)("ul",{className:O.a.friendList,children:a.map((function(e){return Object(s.jsx)("li",{className:O.a.friendItem,children:Object(s.jsx)(v,{avatar:e.avatar,name:e.name,isOnline:e.isOnline})},e.id)}))})},x=t(10),_=t(4),g=t.n(_);var w=function(e){var a=e.items;return Object(s.jsxs)("table",{className:g.a.transactionHistory,children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{className:g.a.headings,children:[Object(s.jsx)("th",{children:"Type"}),Object(s.jsx)("th",{children:"Amount"}),Object(s.jsx)("th",{children:"Currency"})]})}),Object(s.jsx)("tbody",{className:g.a.info,children:a.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.type}),Object(s.jsx)("td",{className:g.a.amount,children:e.amount}),Object(s.jsx)("td",{className:g.a.currency,children:e.currency})]},e.id)}))})]})},N=t(11);var L=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(o,{name:b.name,tag:b.tag,location:b.location,avatar:b.avatar,stats:b.stats}),Object(s.jsx)(u,{title:"Upload stats",stats:p}),Object(s.jsx)(u,{stats:p}),Object(s.jsx)(y,{friends:x}),Object(s.jsx)(w,{items:N})]})};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(L,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.b861ee41.chunk.js.map