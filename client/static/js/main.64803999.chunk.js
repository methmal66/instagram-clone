(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[0],{92:function(e,t,a){"use strict";a.r(t);var n=a(4),s=a(1),i=a.n(s),c=a(14),r=a.n(c),o=a(16),l=a(93),d=a(40),u=d.a.initializeApp({apiKey:"AIzaSyBeaF1bw6MsTLzwcNaCpouodRln3skWWTg",authDomain:"instagram-clone-adc81.firebaseapp.com",databaseURL:"https://instagram-clone-adc81.firebaseio.com",projectId:"instagram-clone-adc81",storageBucket:"instagram-clone-adc81.appspot.com",messagingSenderId:"499518177038",appId:"1:499518177038:web:7529dd7fc3e9675b58e15f",measurementId:"G-K3K540EWFM"}).firestore(),m=d.a.auth(),j=d.a.storage(),p=d.a,b=a(122),g=a(130),x=a(126),h=a(129),f=Object(b.a)((function(e){return{paper:{position:"absolute",width:300,backgroundColor:e.palette.background.paper,border:"2px solid lightgray",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),display:"flex",justifyContent:"space-between",flexDirection:"column",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},up:{height:"300px"},in:{height:"190px"},image:{maxWidth:"100%",objectFit:"contain"},modal:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}})),O=function(e){var t=e.userName,a=e.user,i=e.setUserName,c=e.setUser,r=f(),l=Object(s.useState)(!0),d=Object(o.a)(l,2),u=d[0],j=d[1],p=Object(s.useState)(null),b=Object(o.a)(p,2),O=b[0],v=b[1],y=Object(s.useState)(null),N=Object(o.a)(y,2),w=N[0],C=N[1],S=Object(s.useState)({up:!1,in:!1}),k=Object(o.a)(S,2),I=k[0],U=k[1],T=function(e){return v(e.target.value)},B=function(e){return C(e.target.value)};Object(s.useEffect)((function(){var e=m.onAuthStateChanged((function(e){c(e||null)}));return function(){e()}}),[a,t]);var z=Object(n.jsx)(g.a,{open:I.up,onClose:function(){return U({up:!1,in:!1})},children:Object(n.jsx)("form",{children:Object(n.jsxs)("div",{className:r.paper+" "+r.up,children:[Object(n.jsx)("img",{className:r.image,src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"instagram logo"}),Object(n.jsx)(h.a,{type:"text",label:"user name",variant:"outlined",size:"small",onChange:function(e){return i(e.target.value)}}),Object(n.jsx)(h.a,{type:"email",label:"e-mail address",variant:"outlined",size:"small",onChange:T}),Object(n.jsx)(h.a,{type:"password",label:"password",variant:"outlined",size:"small",onChange:B}),Object(n.jsx)(h.a,{type:"password",label:"confirm password",variant:"outlined",size:"small",onChange:function(e){return j((function(){var t=e.target.value;return!t||!w||t!==w}))}}),Object(n.jsx)(x.a,{type:"submit",onClick:function(e){e.preventDefault(),m.createUserWithEmailAndPassword(O,w).then((function(e){return e.user.updateProfile({displayName:t})})).catch((function(e){return alert(e.message)})),U({up:!1,in:!0}),v(null),C(null)},disabled:u,children:"Sign up"})]})})}),F=Object(n.jsx)(g.a,{open:I.in,onClose:function(){return U({up:!1,in:!1})},children:Object(n.jsx)("form",{children:Object(n.jsxs)("div",{className:r.paper+" "+r.in,children:[Object(n.jsx)("img",{className:r.image,src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"instagram logo"}),Object(n.jsx)(h.a,{type:"email",label:"e-mail address",variant:"outlined",size:"small",onChange:T}),Object(n.jsx)(h.a,{type:"password",label:"password",variant:"outlined",size:"small",onChange:B}),Object(n.jsx)(x.a,{type:"submit",onClick:function(e){e.preventDefault(),m.signInWithEmailAndPassword(O,w).catch((function(e){return alert(e.message)})),U({up:!1,in:!1}),v(null),C(null)},disabled:!1,children:"Sign in"})]})})});return Object(n.jsx)("div",{children:a?Object(n.jsx)(x.a,{onClick:function(){m.signOut(),c(null)},children:"Log out"}):Object(n.jsxs)(s.Fragment,{children:[Object(n.jsx)(x.a,{onClick:function(){return U({up:!0,in:!1})},children:"Sign up"}),z,Object(n.jsx)(x.a,{onClick:function(){return U({up:!1,in:!0})},children:"Sign in"}),F]})})},v=Object(l.a)((function(){return{root:{display:"flex",objectFit:"contain",justifyContent:"space-between",backgroundColor:"white",padding:"10px",border:"1px solid lightgray",marginBottom:"20px"},image:{objectFit:"contain"}}})),y=function(e){var t=e.user,a=e.setUser,s=e.userName,i=e.setUserName,c=v();return Object(n.jsxs)("div",{className:c.root,children:[Object(n.jsx)("img",{className:c.image,src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"instagram logo"}),Object(n.jsx)(O,{userName:s,user:t,setUserName:i,setUser:a})]})},N=a(132),w=a(127),C=a(62),S=a.n(C),k=Object(l.a)((function(){return{root:{display:"flex"},text:{flex:"1",marginLeft:"15px"}}})),I=function(e){var t=e.postId,a=e.addName,i=k(),c=Object(s.useState)(""),r=Object(o.a)(c,2),l=r[0],d=r[1];return Object(n.jsxs)("div",{className:i.root,children:[Object(n.jsx)("div",{className:i.text,children:Object(n.jsx)(h.a,{fullWidth:!0,size:"small",variant:"outlined",onChange:function(e){return d(e.target.value)}})}),Object(n.jsx)("div",{children:Object(n.jsx)(w.a,{onClick:function(){u.collection("posts").doc(t).collection("comments").add({useraddName:a,comment:l,like:!1,timeStamp:p.firestore.FieldValue.serverTimestamp()}),d(null)},disabled:!l,children:Object(n.jsx)(S.a,{})})})]})},U=a(63),T=a.n(U),B=a(64),z=a.n(B),F=a(68),E=a(131),D=Object(b.a)((function(e){return{avatar:{width:e.spacing(3),height:e.spacing(3),marginRight:"10px"},paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid lightgray",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},root:{paddingLeft:"20px",paddingRight:"20px",display:"flex",alignItems:"center",justifyContent:"space-between"},left:{display:"flex",flex:"1"},right:{flex:"0",display:"flex"},delete:{marginTop:"10px"}}})),W=function(){return{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},_=function(e){var t=e.postId,a=e.comId,i=e.name,c=e.text,r=e.logedIn,l=D(),d=Object(s.useState)(W),m=Object(o.a)(d,1)[0],j=Object(s.useState)(!1),p=Object(o.a)(j,2),b=p[0],h=p[1],f=Object(s.useState)(null),O=Object(o.a)(f,2),v=O[0],y=O[1],C=function(){y(null),h(!b)};return Object(n.jsxs)("div",{className:l.root,children:[Object(n.jsxs)("div",{className:l.left,children:[Object(n.jsx)(N.a,{src:"dummy",sizes:"small",alt:i,className:l.avatar}),Object(n.jsxs)("span",{children:[Object(n.jsxs)("strong",{children:[" ",i]})," ",c]})]}),Object(n.jsxs)("div",{className:l.right,children:[r?Object(n.jsx)(w.a,{children:Object(n.jsx)(T.a,{fontSize:"small"})}):null,Object(n.jsx)(w.a,{onClick:function(e){return y(e.currentTarget)},children:Object(n.jsx)(z.a,{fontSize:"small"})})]}),Object(n.jsx)("div",{children:Object(n.jsx)(F.a,{anchorEl:v,keepMounted:!0,open:v,onClose:function(){return y(null)},children:Object(n.jsx)(E.a,{onClick:C,children:"Delete"})})}),Object(n.jsx)(g.a,{open:b,onClose:C,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(n.jsx)("div",{style:m,className:l.paper,children:Object(n.jsxs)("center",{children:[Object(n.jsx)("span",{children:"This action can not undo. Are you sure want to delete this comment?"}),Object(n.jsx)("div",{className:l.delete,children:Object(n.jsx)(x.a,{variant:"contained",color:"secondary",onClick:function(){u.collection("posts").doc(t).collection("comments").doc(a).delete(),h(!b)},children:"DELETE"})})]})})})]})},L=Object(l.a)((function(){return{comments:{display:"flex",flexDirection:"column"}}})),A=function(e){var t=e.id,a=e.addUser,i=e.logedIn,c=L(),r=Object(s.useState)([]),l=Object(o.a)(r,2),d=l[0],m=l[1];Object(s.useEffect)((function(){return u.collection("posts").doc(t).collection("comments").orderBy("timeStamp","asc").onSnapshot((function(e){return m(e.docs.map((function(e){return{key:e.id,id:e.id,comment:e.data()}})))}))}),[]);var j=d.map((function(e){return Object(n.jsx)(_,{logedIn:i,postId:t,comId:e.id,name:e.comment.useraddName,text:e.comment.comment,like:e.comment.like})}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:c.comments,children:j}),i&&Object(n.jsx)(I,{postId:t,addName:a.displayName})]})},R=Object(l.a)((function(){return{root:{backgroundColor:"white",maxWidth:"500px",border:"1px solid lightgray",marginBottom:"40px"},header:{display:"flex",padding:"20px",alignItems:"center"},date:{color:"rgb(145, 143, 143)"},namedate:{display:"flex",flexDirection:"column"},image:{width:"100%",objectFit:"contain",borderBottom:"1px solid lightgray",borderTop:"1px solid lightgray"},footer:{padding:"20px"},avatar:{marginRight:"10px"}}})),P=function(e){var t=e.user,a=e.postId,s=e.userName,i=e.caption,c=e.imageUrl,r=e.date,o=R();return Object(n.jsxs)("div",{className:o.root,children:[Object(n.jsxs)("div",{className:o.header,children:[Object(n.jsx)(N.a,{className:o.avatar,src:"dummy",alt:s}),Object(n.jsxs)("div",{className:o.namedate,children:[Object(n.jsx)("span",{children:s}),Object(n.jsx)("span",{className:o.date,children:r})]})]}),Object(n.jsx)("img",{className:o.image,src:c,alt:"post"}),Object(n.jsx)("div",{className:o.footer,children:Object(n.jsxs)("span",{children:[Object(n.jsxs)("strong",{children:[s," "]}),i]})}),Object(n.jsx)(A,{id:a,addUser:t,logedIn:Boolean(t)})]})},M=a(128),K=a(65),G=a.n(K),J=Object(b.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"flex-start",backgroundColor:"white",border:"1px solid lightgray",marginBottom:"40px",maxWidth:"500px"},text:{width:"501px"},progress:{width:"375px",marginLeft:"12px"},chooser:{marginBottom:"10px",marginTop:"10px",maxWidth:"500px"},footer:{display:"flex",alignItems:"center"}}})),V=function(e){var t=e.user,a=J(),i=Object(s.useState)(),c=Object(o.a)(i,2),r=c[0],l=c[1],d=Object(s.useState)(null),m=Object(o.a)(d,2),b=m[0],g=m[1],f=Object(s.useState)(null),O=Object(o.a)(f,2),v=O[0],y=O[1];return Object(n.jsxs)("div",{className:a.root,children:[Object(n.jsx)("input",{className:a.chooser,type:"file",accept:"images/*",onChange:function(e){var t=e.target.files[0];t&&(g(t),y(null),l(""))}}),Object(n.jsx)(h.a,{className:a.text,variant:"outlined",placeholder:"Enter your caption here",rows:"5",width:"200px",multiline:!0,onChange:function(e){l(e.target.value)},children:r}),Object(n.jsxs)("div",{className:a.footer,children:[Object(n.jsx)(x.a,{onClick:function(){j.ref("images/"+b.name).put(b).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);y(t)}),(function(e){console.log(e),alert(e.message)}),(function(){j.ref("images/").child(b.name).getDownloadURL().then((function(e){u.collection("posts").add({timeStamp:p.firestore.FieldValue.serverTimestamp(),caption:r,url:e,userName:t.displayName})}))}))},disabled:!b,children:"Upload"}),Object(n.jsx)(M.a,{className:a.progress,variant:"determinate",value:v}),Object(n.jsx)("span",{children:function(){if(v)return 100===v?Object(n.jsx)(G.a,{color:"primary"}):v+"%"}()})]})]})},q=a(66),H=Object(l.a)((function(){return{root:{backgroundColor:"#fafafa"},left:{marginRight:"10px"},header:{position:"sticky",top:"0"},body:{display:"flex",justifyContent:"center"}}})),Q=function(){var e=H(),t=Object(s.useState)([]),a=Object(o.a)(t,2),i=a[0],c=a[1],r=Object(s.useState)(null),l=Object(o.a)(r,2),d=l[0],m=l[1],j=Object(s.useState)(""),p=Object(o.a)(j,2),b=p[0],g=p[1];Object(s.useEffect)((function(){return u.collection("posts").orderBy("timeStamp","desc").onSnapshot((function(e){return c(e.docs.map((function(e){return{key:e.id,id:e.id,post:e.data()}})))}))}),[]);var x=i.map((function(e){var t=e.post,a=e.key;return Object(n.jsx)(P,{postId:a,user:d,userName:t.userName,caption:t.caption,imageUrl:t.url},a)}));return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)("div",{className:e.header,children:Object(n.jsx)(y,{user:d,setUser:m,userName:b,setUserName:g})}),Object(n.jsxs)("div",{className:e.body,children:[Object(n.jsxs)("div",{className:e.left,children:[d&&Object(n.jsx)(V,{user:d}),x]}),Object(n.jsx)("div",{className:e.right,children:Object(n.jsx)(q.a,{clientAccessToken:"982232292263767|60af9d31ba0df4e4dd6ce24166ed553c",url:"https://www.instagram.com/p/B_uf9dmAGPw/",maxWidth:375,hideCaption:!1,containerTagName:"div",injectScript:!0,protocol:""})})]})]})},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,133)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(Q,{})}),document.getElementById("root")),X()}},[[92,1,2]]]);
//# sourceMappingURL=main.64803999.chunk.js.map