(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{36:function(n,e,t){},77:function(n,e,t){"use strict";t.r(e);var a,r,o,i,c,s,p=t(0),l=t.n(p),u=t(26),d=t.n(u),h=(t(36),t(15)),m=t(6),g=t(7),b=t(9),x=t(8),f=t(27),j=t.n(f),w=t(1),y=function(){return Object(w.jsx)(j.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80,timeout:3e3,style:{zIndex:"100",position:"fixed",top:"50%",left:"50%"}})},v=t(10),O=t.n(v),k=t(13),L=t(28),S=t.n(L),I="https://pixabay.com/api/?key=".concat("22399279-48a424365ce07e64d37e0f0c3","&\n  image_type=photo&orientation=horizontal&per_page=").concat(12),U=function(){var n=Object(k.a)(O.a.mark((function n(e,t){var a,r;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,S.a.get(I+"&q=".concat(e,"&page=").concat(t));case 3:return a=n.sent,r=a.data.hits.map((function(n){return{id:n.id,webformatURL:n.webformatURL,largeImageURL:n.largeImageURL}})),n.abrupt("return",r);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",[]);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),C=function(){var n=Object(k.a)(O.a.mark((function n(e,t,a){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",U(e,t).then(R(a)));case 1:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}(),R=function(n){return function(e){return new Promise((function(t){return setTimeout((function(){return t(e)}),n)}))}},F=t(4),z=t(5),N=z.a.button(a||(a=Object(F.a)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #303f9f;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  :hover,\n  :focus {\n    background-color: #303f9f;\n  }\n"]))),M=function(n){var e=n.onClick;return Object(w.jsx)(N,{type:"button",onClick:e,children:"Load more"})},T=z.a.li(r||(r=Object(F.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  .ImageGalleryItem-image {\n    width: 100%;\n    height: 260px;\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  .ImageGalleryItem-image:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),D=function(n){var e=n.id,t=n.imgURL,a=n.largeImageURL;return Object(w.jsx)(T,{children:Object(w.jsx)("img",{src:t,"data-large-image-url":a,alt:"",className:"ImageGalleryItem-image"},e)})},E=z.a.ul(o||(o=Object(F.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),B=function(n){var e=n.onItemClick,t=n.images;return Object(w.jsx)(E,{onClick:function(n){return e(n.target.dataset.largeImageUrl)},children:t.map((function(n){return Object(w.jsx)(D,{id:n.id,imgURL:n.webformatURL,largeImageURL:n.largeImageURL},n.id)}))})},A=z.a.div(i||(i=Object(F.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n\n  .Modal {\n    max-width: calc(100vw - 48px);\n    max-height: calc(100vh - 24px);\n  }\n"]))),G=function(n){Object(b.a)(t,n);var e=Object(x.a)(t);function t(){var n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).onKeyDown=function(e){"Escape"===e.key&&n.props.closeModal()},n}return Object(g.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){return Object(w.jsx)(A,{onClick:this.props.closeModal,children:Object(w.jsx)("div",{className:"Modal",children:Object(w.jsx)("img",{src:this.props.largeImageURL,alt:""})})})}}]),t}(p.Component),K=z.a.header(c||(c=Object(F.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),J=z.a.form(s||(s=Object(F.a)(['\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n\n  .SearchForm-button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n  }\n\n  .SearchForm-button:hover {\n    opacity: 1;\n  }\n\n  .SearchForm-button-label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n\n  .SearchForm-input {\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n\n  .SearchForm-input::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n']))),_=function(n){Object(b.a)(t,n);var e=Object(x.a)(t);function t(){var n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={searchTerm:""},n.onInputChange=function(e){n.setState({searchTerm:e.target.value})},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state.searchTerm)},n}return Object(g.a)(t,[{key:"render",value:function(){return Object(w.jsx)(K,{children:Object(w.jsxs)(J,{onSubmit:this.onSubmit,children:[Object(w.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(w.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(w.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.onInputChange})]})})}}]),t}(p.Component),q=100,H=function(n){Object(b.a)(t,n);var e=Object(x.a)(t);function t(){var n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={pageNum:1,searchTerm:"",images:[],modalLargeURL:"",showLoader:!1},n.componentDidUpdate=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},n.onSearchSubmit=function(e){n.showLoader(),C(e,1,q).then((function(t){return n.setState((function(n){return{images:t,pageNum:1,searchTerm:e}}),n.hideLoader)}))},n.onBtnClick=function(){n.showLoader(),C(n.state.searchTerm,n.state.pageNum+1,q).then((function(e){return n.setState((function(n){return{images:[].concat(Object(h.a)(n.images),Object(h.a)(e)),pageNum:n.pageNum+1}}),n.hideLoader)}))},n.onItemClick=function(e){n.setState({modalLargeURL:e})},n.closeModal=function(){n.setState({modalLargeURL:""})},n.showLoader=function(){n.setState((function(n){return n.showLoader?null:{showLoader:!0}}))},n.hideLoader=function(){n.setState((function(n){return n.showLoader?{showLoader:!1}:null}))},n}return Object(g.a)(t,[{key:"render",value:function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(_,{onSubmit:this.onSearchSubmit}),this.state.images.length>0&&Object(w.jsx)(B,{images:this.state.images,onItemClick:this.onItemClick}),this.state.images.length>0&&Object(w.jsx)(M,{onClick:this.onBtnClick}),this.state.modalLargeURL&&Object(w.jsx)(G,{largeImageURL:this.state.modalLargeURL,closeModal:this.closeModal}),this.state.showLoader&&Object(w.jsx)(y,{})]})}}]),t}(p.Component);d.a.render(Object(w.jsx)(l.a.StrictMode,{children:Object(w.jsx)(H,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.a1c594ca.chunk.js.map