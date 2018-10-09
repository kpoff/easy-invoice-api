(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(64)},33:function(e,t,n){},35:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(25),l=n.n(o),s=(n(33),n(1)),i=n(3),c=n(5),u=n(4),h=n(6),m=(n(35),n(12)),p=n(9),d=n.n(p),g=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e,n,a,r,o){return t.service.post("/signup",{email:e,password:n,role:a,firstName:r,lastName:o}).then(function(e){return e.data})},this.login=function(e,n){return t.service.post("/login",{username:e,password:n}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})};var n=d.a.create({baseURL:"http://localhost:5000/api",withCredentials:!0});this.service=n},f=n(67),v=n(66),E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.email,a=n.state.password,r=n.state.role,o=n.state.firstName,l=n.state.lastName;n.service.signup(t,a,r,o,l).then(function(e){e.error&&console.log("Signup error:",e.error),n.setState({email:"",password:"",role:"",firstName:"",lastName:""}),e.email&&n.props.setTheUserInTheAppComponent(e)}).catch(function(e){console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(m.a)({},a,r))},n.state={email:"",password:"",role:"",firstName:"",lastName:""},n.service=new g,n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"showSignUpForm",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Contractor or Client:"),r.a.createElement("input",{type:"text",name:"role",value:this.state.role,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"First Name:"),r.a.createElement("input",{type:"text",name:"firstName",value:this.state.firstName,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Last Name:"),r.a.createElement("input",{type:"text",name:"lastName",value:this.state.lastName,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have account?",r.a.createElement(f.a,{to:"/login"}," Login")))}},{key:"render",value:function(){return this.props.userInSession?r.a.createElement(v.a,{to:"/"}):r.a.createElement("div",null,this.showSignUpForm())}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.email,a=n.state.password;n.service.login(t,a).then(function(e){n.setState({email:"",password:""}),n.props.setTheUserInTheAppComponent(e)}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(m.a)({},a,r))},n.state={email:"",password:""},n.service=new g,n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"showLoginForm",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("p",null,"Don't have an account?",r.a.createElement(f.a,{to:"/signup"}," Signup")))}},{key:"render",value:function(){return this.props.userInSession?r.a.createElement(v.a,{to:"/"}):r.a.createElement("div",null,this.showLoginForm())}}]),t}(a.Component),j=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).logout=function(){n.service.logout().then(function(){n.props.setTheUserInTheAppComponent(null)})},n.state={loggedInUser:null},n.service=new g,n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({loggedInUser:e.userInSession})}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("li",null,"Welcome, ",this.state.loggedInUser.firstName),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/projects",style:{textDecoration:"none"}},"Projects")),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return e.logout()}},"Log Out")))):r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(f.a,{to:"/login",style:{textDecoration:"none"}},"Login")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/signup",style:{textDecoration:"none"}},"Signup")))))}}]),t}(a.Component),C=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.location,a=n.state.description,r=n.state.estimate,o=n.state.clientRequests,l=n.state.status,s=n.state.type;d.a.post("http://localhost:5000/api/projects",{location:t,description:a,estimate:r,clientRequests:o,status:l,type:s},{withCredentials:!0}).then(function(){console.log("this.props",n.props),console.log("this.props",n.state),n.props.getData(),n.setState({location:"",description:"",estimate:"",clientRequests:"",status:"",type:"",invoiceHistory:[]})}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(m.a)({},a,r))},n.toggleForm=function(){n.setState({formShowing:!n.state.formShowing})},n.state={location:"",description:"",estimate:"",clientRequests:"",status:"",type:"",invoiceHistory:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Location:"),r.a.createElement("input",{type:"text",name:"location",value:this.state.location,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Estimate:"),r.a.createElement("input",{type:"text",name:"estimate",value:this.state.estimate,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Client Requests:"),r.a.createElement("textarea",{name:"clientRequests",value:this.state.clientRequests,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Status:"),r.a.createElement("input",{type:"text",name:"status",value:this.state.status,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Type:"),r.a.createElement("input",{type:"text",name:"type",value:this.state.type,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.email,a=n.state.password,r=n.state.firstName,o=n.state.lastName,l=n.state.address,s=n.state.phone,i=n.props.projectID;d.a.post("http://localhost:5000/api/addclient",{email:t,password:a,firstName:r,lastName:o,address:l,phone:s,projectID:i},{withCredentials:!0}).then(function(){n.props.hideForm(),n.props.getData()}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(m.a)({},a,r))},n.state={email:"",password:"",role:"",firstName:"",lastName:"",address:"",phone:""},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"First Name:"),r.a.createElement("input",{type:"text",name:"firstName",value:this.state.firstName,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Last Name:"),r.a.createElement("input",{type:"text",name:"lastName",value:this.state.lastName,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Address:"),r.a.createElement("input",{type:"text",name:"address",value:this.state.address,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Phone:"),r.a.createElement("input",{type:"text",name:"phone",value:this.state.phone,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(a.Component),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).getUserProjects=function(){d.a.get(Object({NODE_ENV:"production",PUBLIC_URL:""}).BASE_URL+"/projects",{withCredentials:!0}).then(function(t){e.setState({projectHistory:t.data.projectHistory})}).catch(function(e){console.log(e)})},e.toggleAddClientForm=function(t){e.state.addClientFormShowing===t?e.setState({addClientFormShowing:!1}):e.setState({addClientFormShowing:t})},e.toggleAddProjectForm=function(){e.setState({addProjectFormShowing:!e.state.addProjectFormShowing})},e.state={projectHistory:[],addClientFormShowing:!1,addProjectFormShowing:!1},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getUserProjects()}},{key:"showForm",value:function(e,t){if(this.state.addClientFormShowing===t)return r.a.createElement(w,{projectID:e._id,getData:this.getUserProjects,hideForm:this.toggleAddClientForm})}},{key:"showAddClientButton",value:function(e,t){var n=this;if(!e.client)return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return n.toggleAddClientForm(t)}},this.state.addClientFormShowing===t?"Hide the Form":"Add a New Client"))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{style:{width:"60%",float:"left"}},this.state.projectHistory.map(function(t,n){return r.a.createElement("div",{key:t._id},r.a.createElement(f.a,{to:"/projects/".concat(t._id)},r.a.createElement("h3",null,"Project ID: ",t._id)),r.a.createElement("p",{style:{maxWidth:"400px"}},t.description," "),e.showAddClientButton(t,n),e.showForm(t,n))})),r.a.createElement("div",{style:{width:"40%",float:"right"}},r.a.createElement("button",{onClick:function(){return e.toggleAddProjectForm()}},this.state.addProjectFormShowing?"Hide the Form":"Add a New Project"),this.state.addProjectFormShowing&&r.a.createElement(C,{getData:function(){return e.getUserProjects()}})))}}]),t}(a.Component),S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).getSingleProject=function(){var e=n.props.match.params;d.a.get("http://localhost:5000/api/projects/".concat(e.id)).then(function(e){var t=e.data;n.setState(t)}).catch(function(e){console.log(e)})},n.deleteProject=function(){var e=n.props.match.params;d.a.delete("http://localhost:5000/api/projects/".concat(e.id)).then(function(e){n.props.history.push("/projects")}).catch(function(e){console.log(e)})},n.state={},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getSingleProject()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Client: ",this.state.client),r.a.createElement("p",null,"Location: ",this.state.location),r.a.createElement("p",null,"Description: ",this.state.description),r.a.createElement("p",null,"Estimate: ",this.state.estimate),r.a.createElement("p",null,"Client Requests: ",this.state.clientRequests),r.a.createElement("p",null,"Project Status: ",this.state.status),r.a.createElement("p",null,"Project Type: ",this.state.type),r.a.createElement("h1",null,"The Invoices"),r.a.createElement("button",{onClick:function(){return e.deleteProject()}},"Delete project"),r.a.createElement(f.a,{to:"/projects"},"Back to projects"))}}]),t}(a.Component),O=n(69),U=n(68),F=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).setTheUser=function(e){n.setState({loggedInUser:e})},n.state={loggedInUser:null},n.service=new g,n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.fetchUser(),r.a.createElement("div",{className:"App"},r.a.createElement(j,{setTheUserInTheAppComponent:this.setTheUser,userInSession:this.state.loggedInUser}),r.a.createElement(O.a,null,r.a.createElement(U.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(b,{setTheUserInTheAppComponent:e.setTheUser,userInSession:e.state.loggedInUser})}}),r.a.createElement(U.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(E,{setTheUserInTheAppComponent:e.setTheUser,userInSession:e.state.loggedInUser})}}),r.a.createElement(U.a,{exact:!0,path:"/projects",render:function(){return r.a.createElement(y,{setTheUserInTheAppComponent:e.setTheUser,userInSession:e.state.loggedInUser})}}),r.a.createElement(U.a,{exact:!0,path:"/projects/:id",render:function(t){return r.a.createElement(S,Object.assign({},t,{setTheUserInTheAppComponent:e.setTheUser,userInSession:e.state.loggedInUser}))}})))}}]),t}(a.Component),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var k=n(65);l.a.render(r.a.createElement(k.a,null,r.a.createElement(F,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");I?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):N(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):N(e)})}}()}},[[28,2,1]]]);
//# sourceMappingURL=main.d0321726.chunk.js.map