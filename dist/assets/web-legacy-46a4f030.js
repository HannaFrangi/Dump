System.register(["./index-legacy-442bfcdd.js"],(function(e,t){"use strict";var a,n,r,i;return{setters:[e=>{a=e.W,n=e.C,r=e.t,i=e.u}],execute:function(){class t extends a{async getPhoto(e){return new Promise((async(t,a)=>{if(e.webUseInput||e.source===n.Photos)this.fileInputExperience(e,t,a);else if(e.source===n.Prompt){let n=document.querySelector("pwa-action-sheet");n||(n=document.createElement("pwa-action-sheet"),document.body.appendChild(n)),n.header=e.promptLabelHeader||"Photo",n.cancelable=!1,n.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],n.addEventListener("onSelection",(async n=>{0===n.detail?this.fileInputExperience(e,t,a):this.cameraExperience(e,t,a)}))}else this.cameraExperience(e,t,a)}))}async pickImages(e){return new Promise((async(e,t)=>{this.multipleFileInputExperience(e,t)}))}async cameraExperience(e,t,a){if(customElements.get("pwa-camera-modal")){const o=document.createElement("pwa-camera-modal");o.facingMode=e.direction===r.Front?"user":"environment",document.body.appendChild(o);try{await o.componentOnReady(),o.addEventListener("onPhoto",(async n=>{const r=n.detail;null===r?a(new i("User cancelled photos app")):r instanceof Error?a(r):t(await this._getCameraPhoto(r,e)),o.dismiss(),document.body.removeChild(o)})),o.present()}catch(n){this.fileInputExperience(e,t,a)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),this.fileInputExperience(e,t,a)}fileInputExperience(e,t,a){let o=document.querySelector("#_capacitor-camera-input");const s=()=>{var e;null===(e=o.parentNode)||void 0===e||e.removeChild(o)};o||(o=document.createElement("input"),o.id="_capacitor-camera-input",o.type="file",o.hidden=!0,document.body.appendChild(o),o.addEventListener("change",(a=>{const n=o.files[0];let r="jpeg";if("image/png"===n.type?r="png":"image/gif"===n.type&&(r="gif"),"dataUrl"===e.resultType||"base64"===e.resultType){const a=new FileReader;a.addEventListener("load",(()=>{if("dataUrl"===e.resultType)t({dataUrl:a.result,format:r});else if("base64"===e.resultType){const e=a.result.split(",")[1];t({base64String:e,format:r})}s()})),a.readAsDataURL(n)}else t({webPath:URL.createObjectURL(n),format:r}),s()})),o.addEventListener("cancel",(e=>{a(new i("User cancelled photos app")),s()}))),o.accept="image/*",o.capture=!0,e.source===n.Photos||e.source===n.Prompt?o.removeAttribute("capture"):e.direction===r.Front?o.capture="user":e.direction===r.Rear&&(o.capture="environment"),o.click()}multipleFileInputExperience(e,t){let a=document.querySelector("#_capacitor-camera-input-multiple");const n=()=>{var e;null===(e=a.parentNode)||void 0===e||e.removeChild(a)};a||(a=document.createElement("input"),a.id="_capacitor-camera-input-multiple",a.type="file",a.hidden=!0,a.multiple=!0,document.body.appendChild(a),a.addEventListener("change",(t=>{const r=[];for(let e=0;e<a.files.length;e++){const t=a.files[e];let n="jpeg";"image/png"===t.type?n="png":"image/gif"===t.type&&(n="gif"),r.push({webPath:URL.createObjectURL(t),format:n})}e({photos:r}),n()})),a.addEventListener("cancel",(e=>{t(new i("User cancelled photos app")),n()}))),a.accept="image/*",a.click()}_getCameraPhoto(e,t){return new Promise(((a,n)=>{const r=new FileReader,i=e.type.split("/")[1];"uri"===t.resultType?a({webPath:URL.createObjectURL(e),format:i,saved:!1}):(r.readAsDataURL(e),r.onloadend=()=>{const e=r.result;"dataUrl"===t.resultType?a({dataUrl:e,format:i,saved:!1}):a({base64String:e.split(",")[1],format:i,saved:!1})},r.onerror=e=>{n(e)})}))}async checkPermissions(){if("undefined"==typeof navigator||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(await window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch(e){throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}async pickLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}async getLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}}e("CameraWeb",t),e("Camera",new t)}}}));
