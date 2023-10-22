(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=e(a);fetch(a.href,n)}})();const j=`
  <div class="shk-player">
    <div class="shk-bar_wrap">
      <div class="shk-bar" aria-label="progress bar">
        <div class="shk-bar_loaded"
          role="progressbar"
          aria-label="loaded progress"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="1"></div>
        <div class="shk-bar_played"
          role="progressbar"
          aria-label="played progress"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="1">
          <button class="shk-bar-handle"
            role="slider"
            aria-label="seek progress"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-orientation="horizontal"
            aria-valuemax="1"></button>
        </div>
      </div>
    </div>
    <div class="shk-body">
      <div class="shk-cover">
        <div class="shk-img"></div>
      </div>
      <div class="shk-main">
        <div class="shk-text">
          <div class="shk-artist_wrap">
            <span class="shk-artist"></span>
          </div>
          <div class="shk-title_wrap">
            <div class="shk-title_inner">
              <span class="shk-title"></span>
            </div>
          </div>
        </div>
        <div class="shk-controls">
          <div class="shk-controls_basic">
            <button class="shk-btn shk-btn_speed"
              aria-label="toggle playback rate"
              title="change playback rate"
              aria-live="polite">1.0x</button>
            <button class="shk-btn shk-btn_backward"
              aria-label="rewind 10 seconds"
              title="rewind 10 seconds">
              <svg aria-hidden="true">
                <use xlink:href="#shk-icon_backward" />
              </svg>
            </button>
            <button class="shk-btn shk-btn_toggle" aria-label="toggle play and pause">
              <svg class="shk-btn_play" aria-hidden="true">
                <use xlink:href="#shk-icon_play" />
              </svg>
              <svg class="shk-btn_pause" aria-hidden="true">
                <use xlink:href="#shk-icon_pause" />
              </svg>
            </button>
            <button class="shk-btn shk-btn_forward" aria-label="forward 10 seconds" title="forward 10 seconds">
              <svg aria-hidden="true">
                <use xlink:href="#shk-icon_forward" />
              </svg>
            </button>
            <button class="shk-btn shk-btn_more" aria-label="more controls" title="more controls">
              <svg aria-hidden="true">
                <use xlink:href="#shk-icon_more" />
              </svg>
            </button>
          </div>
          <div class="shk-controls_extra">
            <button class="shk-btn shk-btn_volume" aria-label="toggle volume" title="volume">
              <svg class="shk-btn_unmute" aria-hidden="true">
                <use xlink:href="#shk-icon_unmute" />
              </svg>
              <svg class="shk-btn_mute" aria-hidden="true">
                <use xlink:href="#shk-icon_mute" />
              </svg>
            </button>
          </div>
        </div>
        <div class="shk-display">
          <span class="shk-loader" aria-live="polite">
            <span class="shk-visuallyhidden" tabindex="-1">loading</span>
            <svg aria-hidden="true" aria-label="loading" aria-live="polite" viewbox="0 0 66 66">
              <circle cx="33" cy="33" r="30" fill="transparent" stroke="url(#shk-gradient)" stroke-dasharray="170"
                stroke-dashoffset="20" stroke-width="6" />
              <lineargradient id="shk-gradient">
                <stop offset="50%" stop-color="currentColor" />
                <stop offset="65%" stop-color="currentColor" stop-opacity=".5" />
                <stop offset="100%" stop-color="currentColor" stop-opacity="0" />
              </lineargradient>
            </svg>
          </span>
          <span class="shk-time">
            <span class="shk-time_now">00:00</span><span class="shk-time_duration">00:00</span>
          </span>
          <div class="shk-live">live</div>
        </div>
      </div>
    </div>
  </div>
`,U=`
  <svg class="shk-icons" xmlns="http://www.w3.org/2000/svg">
    <symbol id="shk-icon_play" viewbox="0 0 64 64">
      <path
        d="M32 0a32 32 0 1 1 0 64 32 32 0 0 1 0-64zm-9 17.8c-1 0-1.7.6-1.7 1.4v25.6c0 .8.8 1.4 1.7 1.4 0 0 25-12 26.2-13.1 1-1 .3-1.9.1-2.1z" />
    </symbol>

    <symbol id="shk-icon_pause" viewbox="0 0 64 64">
      <path fill-rule="nonzero"
        d="M32 0a32 32 0 1 0 0 64 32 32 0 0 0 0-64zm-4 40a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V24c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16zm16 0a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V24c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16z" />
    </symbol>

    <symbol id="shk-icon_download" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </symbol>

    <symbol id="shk-icon_forward" viewbox="0 0 128 139">
      <path
        d="M64 11v14h-.8A50 50 0 1 0 114 75h14a64 64 0 1 1-64-64zm16.9 35c6.6 0 11.8 2.7 15.6 8.3a38 38 0 0 1 5.3 21.4c0 9-1.8 16-5.3 21.3-3.8 5.6-9 8.4-15.6 8.4-6.7 0-12-2.8-15.6-8.4A38 38 0 0 1 60 75.7c0-9 1.8-16.1 5.3-21.4C69 48.7 74.2 46 80.9 46zm-32.5 1v57.1H39V58.3a32.3 32.3 0 0 1-13 7V56a34 34 0 0 0 15.4-9h7zm32.5 7c-4.6 0-7.8 2.4-9.6 7.5-1.3 3.5-2 8.2-2 14.2 0 5.9.7 10.6 2 14.1 1.8 5 5 7.6 9.6 7.6 4.5 0 7.7-2.5 9.6-7.6 1.3-3.5 1.9-8.2 1.9-14.1 0-6-.6-10.7-2-14.2-1.8-5.1-5-7.6-9.5-7.6zM64 0l48 19-48 19V0z" />
    </symbol>

    <symbol id="shk-icon_backward" viewbox="0 0 128 139">
      <path
        d="M64 0v11A64 64 0 1 1 0 75h14a50 50 0 1 0 50-50v13L16 19 64 0zm17 45.8c6.6 0 11.8 2.7 15.6 8.3a38 38 0 0 1 5.3 21.3c0 9-1.8 16.1-5.3 21.4a18 18 0 0 1-15.6 8.3c-6.7 0-12-2.8-15.6-8.3a38 38 0 0 1-5.3-21.4c0-9 1.8-16 5.3-21.3 3.7-5.6 8.9-8.3 15.6-8.3zm-32.4 1V104h-9.4V58.2a32.3 32.3 0 0 1-13 7v-9.4a34 34 0 0 0 15.4-9h7zm32.4 7c-4.6 0-7.8 2.5-9.6 7.6-1.3 3.4-2 8.1-2 14.1s.7 10.7 2 14.2c1.8 5 5 7.6 9.6 7.6 4.5 0 7.7-2.6 9.6-7.6 1.3-3.5 2-8.2 2-14.2s-.7-10.7-2-14.1c-2-5.1-5.1-7.6-9.6-7.6z" />
    </symbol>

    <symbol id="shk-icon_more" viewbox="0 0 64 64">
      <path
        d="M8 24a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zm48 0a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zm-24 0a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zm0 0" />
    </symbol>

    <symbol id="shk-icon_chapter" viewbox="0 0 64 64">
      <path d="M60.8 55.3H18.1a3.2 3.2 0 1 1 0-6.4h42.8a3.2 3.2 0 0 1 3.1 4.9c-.7 1-1.9 1.6-3.1 1.5zm0-20.2H18.1a3.2 3.2 0 1 1 0-6.4h42.8a3.2 3.2 0 1 1 0 6.4zm0-20H18.1a3.2 3.2 0 1 1 0-6.3h42.8a3.2 3.2 0 0 1 0 6.3zM8.5 12.3a4.2 4.2 0 1 1-8.5 0 4.2 4.2 0 0 1 8.5 0zm0 19.8A4.2 4.2 0 1 1 0 32a4.2 4.2 0 0 1 8.5 0zm0 19.8a4.3 4.3 0 1 1-8.5 0 4.3 4.3 0 0 1 8.5 0zm0 0"/>
    </symbol>

    <symbol id="shk-icon_unmute" viewBox="0 0 64 66">
      <path d="M34.3 0c1.5.1 2.6 1.4 2.9 2.8v60.3c-.3 1.4-1.4 2.7-3 2.8-.7.1-1.6-.1-2.6-.7L13.7 50H4.2a4 4 0 0 1-4.1-4V20.6c0-2.2 1.8-4 4-4.1h9.6c.7-.8 17.2-15.1 17.9-15.8 1-.6 1.9-.8 2.6-.7zm6.4 9.3a2 2 0 0 1 2.4-1.6 25.8 25.8 0 0 1 0 50.5l-.4.1a2 2 0 1 1-.4-4.1 21.7 21.7 0 0 0 0-42.5 2 2 0 0 1-1.6-2.4zm4.7 12.8a12.1 12.1 0 0 1 0 21.8 2 2 0 0 1-2.8-1c-.5-1-.1-2.2 1-2.8a8 8 0 0 0 0-14.4 2 2 0 0 1-1-2.7 2 2 0 0 1 2.8-.9zm0 0"/>
    </symbol>

    <symbol id="shk-icon_mute" viewBox="0 0 64 64">
      <path d="M33.2 0c-.8 0-1.6.1-2.6.7l-17.4 15H4a4 4 0 0 0-4 4v24.1a4 4 0 0 0 4 4h9.2l17.4 14.5c1 .6 1.8.8 2.6.7 1.4-.1 2.5-1.4 2.8-2.6V2.7C35.7 1.4 34.6 0 33.2 0zm23.2 31.5l6.9-6.8c.7-.6 1-1.5.7-2.4-.2-.8-.9-1.5-1.8-1.7-.8-.2-1.8 0-2.4.7L53 28.1 46 21.3c-.6-.6-1.5-1-2.4-.7-.9.2-1.5.9-1.8 1.7-.2.9.1 1.8.8 2.4l6.9 6.8-7 6.8c-.8 1-.8 2.4.2 3.3.9 1 2.4 1 3.3.1l7-6.8 6.8 6.8c1 .9 2.5.8 3.4 0 1-1 1-2.4 0-3.4l-6.8-6.8zm0 0"/>
    </symbol>

    <symbol id="shk-icon_triangle" viewbox="0 0 64 64"><path d="M59 29.2L7.8.4A3.2 3.2 0 003 3.2v57.6a3.2 3.2 0 004.8 2.8L59 34.8a3.2 3.2 0 000-5.6z" /></symbol>
    <symbol id="shk-icon_chart" viewbox="0 0 64 64"><g transform="matrix(1 0 0 -1 0 64)"><rect x="10" width="8" height="54.1" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="64;55;33;5;60;23;58;33;12;14;52;64" calcMode="linear" repeatCount="indefinite"/></rect><rect x="26" width="8" height="32.8" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="50;34;64;23;56;23;34;4;64;54;21;50" calcMode="linear" repeatCount="indefinite"/></rect><rect x="42" width="8" height="42.6" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;64;56;24;45;64;34;23;64;30" calcMode="linear" repeatCount="indefinite"/></rect></g></symbol>
    <symbol id="shk-icon_close" viewbox="0 0 16 16"><path d="M3.207 14.207a1 1 0 1 1-1.414-1.414l11-11a1 1 0 0 1 1.414 1.414zm11-1.414a1 1 0 0 1-1.414 1.414l-11-11a1 1 0 0 1 1.414-1.414z"></path></symbol>
  </svg>
`,L={container:()=>document.querySelector("body"),parser:null,fixed:{type:"auto",position:"bottom"},download:!1,themeColor:"#0d6efd",theme:"auto",autoPlay:!1,muted:!1,preload:"metadata",speedOptions:[.5,.75,1,1.25,1.5],audio:null},A={fixedOptions:["auto","static","fixed"],audioOptions:{title:"Unknown Title",artist:"Unknown Artist",duration:NaN,cover:null,chapters:[],src:null,album:"",live:!1}};function C(i){i=Math.round(i);let t=Math.floor(i/3600),e=Math.floor((i-t*3600)/60),s=Math.floor(i-t*3600-e*60);return e=e<10?"0"+e:e,s=s<10?"0"+s:s,t===0?`${e}:${s}`:(t=t<10?"0"+t:t,`${t}:${e}:${s}`)}function D(i){const t=parseFloat(i).toFixed(2);return t.slice(-1)==="0"?t.slice(0,-1):t}function k(i,t,e=60){if(t.offsetWidth-i.offsetWidth>0){i.setAttribute("data-overflow","");const a=t.offsetWidth/e;i.style.animationDuration=`${a}s`}else i.removeAttribute("data-overflow")}function W(i){const t=Object.assign({},i);return t.audio=Object.assign({},i.audio),Object.keys(L).forEach(s=>{t[s]=t[s]||typeof t[s]=="boolean"?t[s]:L[s]}),typeof t.container=="function"&&(t.container=t.container()),A.fixedOptions.find(s=>s===t.fixed.type)||(t.fixed.type=L.fixed.type),Array.isArray(t.speedOptions)||(t.speedOptions=[t.speedOptions]),t.speedOptions.indexOf(1)===-1&&t.speedOptions.push(1),t.speedOptions=t.speedOptions.map(s=>parseFloat(s)).filter(s=>!isNaN(s)),t.speedOptions.length>1&&t.speedOptions.sort((s,a)=>s-a),t}function I(i={},t={}){let e=Object.assign({},i);return Object.keys(A.audioOptions).forEach(s=>{e[s]=e[s]||t[s]||A.audioOptions[s]}),e}async function K(i={},t={}){const{tags:e}=await G(i.src,t)||{},s=X(e);return I(i,s)}function G(i,t){return new Promise((e,s)=>{t.read(i,{onSuccess:e,onError:s})})}function X(i={}){let t,e,s;const{title:a,artist:n}=i;if(i.picture&&i.picture.data&&i.picture.format){const r=new Uint8Array(i.picture.data),h=new Blob([r],{type:i.picture.format});t=URL.createObjectURL(h)}return i.TLEN&&i.TLEN.data&&(s=+i.TLEN.data/1e3),i.CHAP&&i.CHAP.length&&(e=i.CHAP.filter(r=>r.id==="CHAP").map(r=>r.data&&r.data.subFrames&&r.data.subFrames.TIT2?{id:r.data.id,startTime:r.data.startTime/1e3,endTime:r.data.endTime/1e3,title:r.data.subFrames.TIT2.data}:!1).sort((r,h)=>r.id-h.id)),{title:a,artist:n,cover:t,duration:s,chapters:e}}function f(i){i.tag=i.tag||"div";const t=document.createElement(i.tag);return i.className&&(typeof i.className=="string"?t.classList.add(i.className):i.className.forEach(e=>{t.classList.add(e)})),i.attrs&&Object.keys(i.attrs).forEach(e=>{t.setAttribute(e,i.attrs[e])}),i.innerHTML&&(t.innerHTML=i.innerHTML),t}function c(i,t,e){if(typeof e=="boolean"){e?i.setAttribute(t,""):i.removeAttribute(t);return}typeof i.toggleAttribute=="function"?i.toggleAttribute(t):i.hasAttribute(t)?i.removeAttribute(t):i.setAttribute(t,"")}function N(i,t,e,s,a,n){const h=(i-t)/1e3/e;n.scrollTop=s+a*h,h<1&&window.requestAnimationFrame(d=>{N(d,t,e,s,a,n)})}function Y(i,t){var e=!0,s=!1,a=null;function n(o){return!!(o&&o!==document&&o.nodeName!=="HTML"&&o.nodeName!=="BODY"&&"classList"in o&&"contains"in o.classList)}function r(o){o.classList.contains("focus-visible")||(o.classList.add("focus-visible"),o.setAttribute("data-focus-visible-added",""))}function h(o){o.hasAttribute("data-focus-visible-added")&&(o.classList.remove("focus-visible"),o.removeAttribute("data-focus-visible-added"))}function d(o){o.metaKey||o.altKey||o.ctrlKey||(n(document.activeElement)&&i.contains(document.activeElement)&&r(document.activeElement),e=!0)}function u(){e=!1}function v(o){n(o.target)&&e&&r(o.target)}function m(o){n(o.target)&&(o.target.classList.contains("focus-visible")||o.target.hasAttribute("data-focus-visible-added"))&&(s=!0,window.clearTimeout(a),a=window.setTimeout(function(){s=!1},100),h(o.target))}function w(){document.visibilityState==="hidden"&&(s&&(e=!0),b())}function b(){i.addEventListener("mousemove",l),i.addEventListener("mousedown",l),i.addEventListener("mouseup",l),i.addEventListener("pointermove",l),i.addEventListener("pointerdown",l),i.addEventListener("pointerup",l),i.addEventListener("touchmove",l,t?{passive:!0}:!1),i.addEventListener("touchstart",l,t?{passive:!0}:!1),i.addEventListener("touchend",l,t?{passive:!0}:!1)}function _(o){i.removeEventListener("mousemove",l),i.removeEventListener("mousedown",l),i.removeEventListener("mouseup",l),i.removeEventListener("pointermove",o),i.removeEventListener("pointerdown",l),i.removeEventListener("pointerup",l),i.removeEventListener("touchmove",l,t?{passive:!0}:!1),i.removeEventListener("touchstart",l,t?{passive:!0}:!1),i.removeEventListener("touchend",l,t?{passive:!0}:!1)}function l(){e=!1,_()}i.addEventListener("keydown",d,!0),i.addEventListener("mousedown",u,!0),i.addEventListener("pointerdown",u,!0),i.addEventListener("touchstart",u,t?{passive:!0,capture:!0}:!0),i.addEventListener("visibilitychange",w,!0),b(),i.addEventListener("focus",v,!0),i.addEventListener("blur",m,!0),i.classList.add("js-focus-visible")}let E,p=null,x=!0;class J{constructor(t){this.mounted=!1,this.icons=f({className:"shk-icons",innerHTML:U}),this.initEl(),this.initOptions(t)}async initEl(){this.el=f({className:["shk","shikwasa"],attrs:{"data-name":"shikwasa"},innerHTML:j}),this.playBtn=this.el.querySelector(".shk-btn_toggle"),this.fwdBtn=this.el.querySelector(".shk-btn_forward"),this.bwdBtn=this.el.querySelector(".shk-btn_backward"),this.speedBtn=this.el.querySelector(".shk-btn_speed"),this.moreBtn=this.el.querySelector(".shk-btn_more"),this.muteBtn=this.el.querySelector(".shk-btn_volume"),this.extraControls=this.el.querySelector(".shk-controls_extra"),this.texts=this.el.querySelector(".shk-text"),this.artist=this.el.querySelector(".shk-artist"),this.artistWrap=this.el.querySelector(".shk-artist_wrap"),this.titleWrap=this.el.querySelector(".shk-title_wrap"),this.titleInner=this.el.querySelector(".shk-title_inner"),this.title=this.el.querySelector(".shk-title"),this.currentTime=this.el.querySelector(".shk-time_now"),this.duration=this.el.querySelector(".shk-time_duration"),this.bar=this.el.querySelector(".shk-bar"),this.barWrap=this.el.querySelector(".shk-bar_wrap"),this.audioPlayed=this.el.querySelector(".shk-bar_played"),this.audioLoaded=this.el.querySelector(".shk-bar_loaded"),this.handle=this.el.querySelector(".shk-bar-handle"),this.cover=this.el.querySelector(".shk-cover"),this.seekControls=[this.fwdBtn,this.bwdBtn,this.handle]}initOptions(t){this.el.style=`--color-primary: ${t.themeColor}`,this.el.setAttribute("data-theme",t.theme),t.download&&t.audio&&t.audio.src&&(this.downloadBtn=f({tag:"a",className:["shk-btn","shk-btn_download"],attrs:{title:"download","aria-label":"download",href:typeof t.download=="string"?t.download:t.audio.src,download:"",target:"_blank",rel:"noopener noreferrer"},innerHTML:`
          <svg aria-hidden="true">
            <use xlink:href="#shk-icon_download" />
          </svg>
        `}),this.extraControls.append(this.downloadBtn)),this.el.setAttribute("data-fixed-type",t.fixed.type),t.fixed.type!=="static"&&t.fixed.position==="top"&&this.el.setAttribute("data-fixed-pos",t.fixed.position),t.autoPlay?this.setPlaying():this.setPaused(),t.muted&&this.setMute(t.muted)}initEvents(t){this.moreBtn.addEventListener("click",()=>{c(this.el,"data-extra")}),Array.from(this.extraControls.children).forEach(e=>{this.hideExtraControl(e)}),Y(this.el,t),E=()=>{x&&(x=!1,setTimeout(()=>x=!0,100),k.call(this,this.titleWrap,this.title))},window.addEventListener("resize",E)}setAudioInfo(t={}){p&&(URL.revokeObjectURL(p),p=null),/blob/.test(t.cover)&&(p=t.cover),t.cover?this.cover.style.backgroundImage=`url(${t.cover})`:this.cover.style.backgroundImage="none",this.title.innerHTML=t.title,this.titleInner.setAttribute("data-title",t.title),this.artist.innerHTML=t.artist,t.duration&&(this.duration.innerHTML=C(t.duration)),this.downloadBtn&&(this.downloadBtn.href=t.src),this.setBar("loaded",0),this.setLive(t.live),k(this.titleWrap,this.title)}setPlaying(){this.el.setAttribute("data-play","playing")}setPaused(){this.el.setAttribute("data-play","paused"),this.setLoading(!1)}setTime(t,e){this[t].innerHTML=C(e)}setBar(t,e){const s="audio"+t.charAt(0).toUpperCase()+t.substr(1);e=Math.min(e,1),e=Math.max(e,0),this[s].style.width=e*100+"%";const a=e.toFixed(2);this[s].setAttribute("aria-valuenow",a),this.handle.setAttribute("aria-valuenow",a)}setProgress(t=0,e=0,s=0){t&&!e?e=s?t/s:0:t=e*(s||0),this.setTime("currentTime",t),this.setBar("played",e)}setSpeed(t){this.speedBtn.innerHTML=D(t)+"x"}setMute(t){c(this.el,"data-mute",t)}setLive(t=!1){c(this.el,"data-live",t)}setLoading(t){c(this.el,"data-loading",t)}setSeeking(t){c(this.el,"data-seeking",t)}setControls(t){this.seekControls.forEach(e=>{c(e,"disabled",!t)})}getPercentByPos(t){const e=t.clientX||t.changedTouches&&t.changedTouches[0].clientX||0,s=this.barWrap.getBoundingClientRect().left,a=this.barWrap.clientWidth;let n=(e-s)/a;return n=Math.min(n,1),n=Math.max(0,n),n}hideExtraControl(t){t.addEventListener("click",()=>{setTimeout(()=>{this.el.removeAttribute("data-extra")},800)})}mount(t,e){t.innerHTML="",t.append(this.el),this.icons&&t.append(this.icons),this.mounted=!0,this.initEvents(e),k(this.titleWrap,this.title)}destroy(){window.removeEventListener("resize",E),p&&URL.revokeObjectURL(p)}}class Q{constructor(){this.audioEvents=["abort","canplay","canplaythrough","complete","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["audioupdate","audioparse"],this.events={}}on(t,e){this.type(t)&&typeof e=="function"&&(this.events[t]||(this.events[t]=[]),this.events[t].push(e))}trigger(t,e={}){this.events[t]&&this.events[t].length&&this.events[t].forEach(s=>s(e))}type(t){return this.playerEvents.indexOf(t)!==-1?"player":this.audioEvents.indexOf(t)!==-1?"audio":(console.error(`Shikwasa: unknown event name: ${t}`),null)}destroy(){this.events={}}}const T=[],P=[],g=typeof window<"u"?/mobile/i.test(window.navigator.userAgent):!1,Z=g?"touchstart":"mousedown",O=g?"touchmove":"mousemove",z=g?"touchend":"mouseup";let y=!1;if(typeof window<"u")try{const i=Object.defineProperty({},"passive",{get:function(){return y=!0,!1}});window.addEventListener("testPassvie",null,i),window.removeEventListener("testPassvie",null,i)}catch{y=!1}const tt=y&&g;class B{constructor(t){this.id=T.length,T.push(this),this.comps={},this._audio={},this._hasMediaSession=!1,this._initSeek=0,this.live=!1,this._canplay=!1,this._dragging=!1,this.events=new Q,this.options=W(t),this.renderComponents(),this.initUI(this.options),this.initAudio(),this.ui.mount(this.options.container,y)}get duration(){return!this.audio||!this.audio.duration?this._audio.duration:this.audio.duration}get seekable(){return!this.live&&!!this.duration}set seekable(t){this.ui.setControls(t)}get currentTime(){return this.audio?this.audio.currentTime:void 0}get playbackRate(){return this.audio?this.audio.playbackRate:void 0}set playbackRate(t){this.audio&&(this.audio.playbackRate=t,this.audio.defaultPlaybackRate=t,this.ui.setSpeed(t))}get muted(){return this.audio?this.audio.muted:void 0}set muted(t){this.audio&&(this.audio.muted=t,this.audio.defaultMuted=t,this.ui.setMute(t))}initUI(){this.ui=new J(this.options),this.el=this.ui.el,this.initControlEvents(),this.initBarEvents()}initControlEvents(){this.ui.playBtn.addEventListener("click",()=>{this.toggle()}),this.ui.muteBtn.addEventListener("click",()=>{this.muted=!this.muted}),this.ui.fwdBtn.addEventListener("click",()=>{this.seekBySpan()}),this.ui.bwdBtn.addEventListener("click",()=>{this.seekBySpan({forward:!1})}),this.ui.speedBtn.addEventListener("click",()=>{const t=this.options.speedOptions.indexOf(this.playbackRate),e=this.options.speedOptions;this.playbackRate=t+1>=e.length?e[0]:e[t+1]})}initBarEvents(){let t=0;const e=r=>{this.seekable&&(r.preventDefault(),this.ui.setSeeking(!0),this._dragging=!0,document.addEventListener(O,s,tt?{passive:!0}:!1),document.addEventListener(z,a))},s=r=>{this.ui.setProgress(null,this.ui.getPercentByPos(r),this.duration)},a=r=>{r.preventDefault(),document.removeEventListener(O,s),document.removeEventListener(z,a),t=this.ui.getPercentByPos(r)*this.duration,this.seek(t),this._dragging=!1,setTimeout(()=>this.ui.setSeeking(!1),50)},n=r=>{if(!this.seekable)return;const h=r.key.replace("Arrow",""),d=["Left","Down"],u=["Right","Up"],v=["PageDown","PageUp"],m=["Home","End"],w=d.indexOf(h)!==-1,b=u.indexOf(h)!==-1,_=h===v[0],l=h===v[1],o=h===m[0],V=h===m[1];if(!w&&!b&&v.indexOf(h)===-1&&m.indexOf(h)===-1)return;if(o){this.seek(0);return}if(V){this.seek(this.duration);return}const F=(l||_?.1:.01)*(b||l?1:-1),R=this._canplay?this.currentTime:this._initSeek,$=F*this.duration+R;this.seek($)};this.ui.barWrap.addEventListener(Z,e),this.ui.handle.addEventListener("keydown",n)}initAudio(){this.options.audio.src&&(this.audio=new Audio,this.initAudioEvents(),this.events.audioEvents.forEach(t=>{this.audio.addEventListener(t,e=>{this.events.trigger(t,e)})}),this.audio.preload=this.options.preload,this.muted=this.options.muted,this.update(this.options.audio))}initAudioEvents(){this.on("play",()=>{this.ui.setPlaying(),T.forEach(t=>{t.id!==this.id&&t.audio&&!t.audio.paused&&t.pause()})}),this.on("pause",()=>{this.ui.setPaused()}),this.on("ended",()=>{this.ui.setPaused(),this.seek(0)}),this.on("waiting",()=>{this.ui.setLoading(!0)}),this.on("durationchange",()=>{this.duration!==1/0&&this.live&&(this.live=!1),this.duration&&this.duration!==1&&this.duration!==1/0&&(this.seekable=!0,this.ui.setTime("duration",this.duration))}),this.on("canplay",()=>{this._canplay||(this._canplay=!0,this._initSeek&&(this.seek(this._initSeek),this._initSeek=0)),this.duration===1/0&&!this.live&&(this.live=!0,this.ui.setLive(this.live))}),this.on("canplaythrough",()=>{this.ui.setLoading(!1)}),this.on("progress",()=>{if(this.audio.buffered.length){const t=this.audio.buffered.length?this.audio.buffered.end(this.audio.buffered.length-1)/this.duration:0;this.ui.setBar("loaded",t)}}),this.on("timeupdate",()=>{this._dragging||this.ui.setProgress(this.audio.currentTime,null,this.duration)}),this.on("abort",()=>{this.ui.setPaused()}),this.on("audioupdate",t=>{this.seekable=t.duration&&t.duration!==1/0,this.updateMetadata(t)}),this.on("audioparse",t=>{this.seekable=t.duration&&t.duration!==1/0,this.updateMetadata(t)})}initMediaSession(){const t=this;if("mediaSession"in navigator){this._hasMediaSession=!0,this.setMediaMetadata(this._audio);const e={play:this.play.bind(t),pause:this.pause.bind(t),seekforward:this.seekBySpan.bind(t),seekbackward:()=>this.seekBySpan({forward:!1}),seekto:this.seek.bind(t)};Object.keys(e).forEach(s=>{navigator.mediaSession.setActionHandler(s,e[s])})}}setMediaMetadata(t){const e=t.cover?[{src:t.cover,sizes:"150x150"}]:void 0;"MediaMetadata"in window&&(navigator.mediaSession.metadata=new window.MediaMetadata({title:t.title,artist:t.artist,album:t.album,artwork:e}))}on(t,e){this.events.on(t,e)}play(){if(!this.audio.paused)return;const t=this.audio.play();return t instanceof Promise?(t.then(()=>{this.initMediaSession()}),t.catch(e=>{(e.name==="NotAllowedError"||e.name==="NotSupportedError")&&this.pause()})):this.initMediaSession(),t}pause(){this.audio.paused||this.audio.pause()}toggle(){return this.audio.paused?this.play():this.pause()}seek(t){this.seekable&&(t=parseInt(t),isNaN(t)&&console.error("Shikwasa: seeking time is NaN"),t=Math.min(t,this.duration),t=Math.max(t,0),this.ui.setProgress(t,null,this.duration),this._canplay?this.audio.currentTime=t:this._initSeek=t)}seekBySpan({time:t=10,forward:e=!0}={}){const a=(this._canplay?this.audio.currentTime:this._initSeek)+t*(e?1:-1);this.seek(a)}update(t){if(t&&t.src){this._audio=I(t),this.live=this._audio.live,this._canplay=!1,this.audio.src=this._audio.src,this.events.trigger("audioupdate",this._audio);const e=!t.title||!t.artist||!t.cover||!t.chapters;!this.live&&this.options.parser&&e&&K(Object.assign({},t),this.options.parser).then(s=>{this._audio=s||this._audio,this.events.trigger("audioparse",this._audio)})}else throw new Error("Shikwasa: audio source is not specified")}updateMetadata(t){this.audio.title=t.title,this.ui.setAudioInfo(t),this._hasMediaSession&&this.setMediaMetadata(t)}destroyAudio(){this.audio.pause(),this.audio.src="",this.audio.load(),this.audio=null}destroy(){this.events.destroy(),this.destroyAudio(),this.ui.destroy(),Object.keys(this.comps).forEach(t=>{this.comps[t].destroy&&typeof this.comps[t].destroy=="function"&&this.comps[t].destroy()}),this.comps=null,this.options.container.innerHTML=""}renderComponents(){P.length&&P.forEach(t=>{this.comps[t._name]=new t(this)})}}B.use=function(i){P.push(i)};const et=`
  <div class="shk-chapter_main">
    <ol class="shk-chapter_list"></ol>
  </div>
  <button class="shk-btn shk-btn_close" aria-label="close chapter panel" title="close chapter panel">
    <svg class="shk-icon_close" aria-hidden="true">
      <use xlink:href="#shk-icon_close" />
    </svg>
  </button>
`;let M;class q{constructor(t){this.ctx=t,this.list=[],this.initEvents(),this.current=null,this._currentSrc=null,this._chapterPatched=!1}init(){this.patchPlayer(),this.ui=new it(this.ctx),this.ctx.on("chapterchange",t=>{const e=t&&t.newVal?t.newVal.id:null;this.ui.setChapterActive(e)})}initEvents(){this.ctx.on("audioupdate",t=>{this._chapterPatched||(this.init(),this._chapterPatched=!0),this.updateList(t)}),this.ctx.on("audioparse",t=>{this.updateList(t)}),this.ctx.on("timeupdate",this.onTimeupdate.bind(this))}clearList(){this.ui.chapterList.innerHTML="",this.list=[],this.current=null}updateList(t){this.list.length&&this.clearList(),t.chapters.length&&(this.list=this.handleChapters(t),this.ui.renderChapterList(this.ctx.chapters),this.clickChapterHandler()),this.ui.handleChapterPanel(this.ctx,t)}handleChapters(t){if(t.chapters&&t.chapters.length)return t.chapters.map((e,s)=>(/^ch\d+$/.test(e.id)||(e.id=`ch${s}`),e))}patchPlayer(){const t=this;Object.defineProperties(this.ctx,{chapters:{get(){return t.list}},currentChapter:{get(){return t.current}}}),this.ctx.events.playerEvents.push("chapterchange"),this.ctx.updateChapter=e.bind(t);function e(s){this.setCurrent(this.list[s]),this.ctx.seek(this.current.startTime),this.ctx.play()}}setCurrent(t){const e=this.current?{...this.current}:null;this.current=t,this.ctx.events.trigger("chapterchange",{newVal:this.current,oldVal:e})}onTimeupdate(t){if(this._currentSrc!==t.currentTarget.src){this._currentSrc=t.currentTarget.src;return}const e=this.searchDirection(this.ctx.currentTime,this.current);if(e){let s;const a=this.list.indexOf(this.current);a===-1?s=this.list:s=e===1?this.list.slice(a):this.list.slice(0,a+1);const n=s.find(r=>!this.searchDirection(this.ctx.currentTime,r));this.setCurrent(n)}}searchDirection(t,e){return t=Math.round(t),!e||typeof e!="object"||e.endTime<=t?1:e.startTime>t?-1:0}clickChapterHandler(){Array.from(this.ui.chapterList.children).forEach(t=>{t.addEventListener("click",()=>{if(!this.ctx.seekable)return;let e=t.getAttribute("data-id").match(/\d+$/);e&&this.ctx.updateChapter(+e[0])})})}destroy(){this.ui.destroy()}}class it{constructor(t,e){this.initEl(t),this.initEvents(t,e),this.renderChapterList(t.chapters),t.ui.el.append(this.el),this.activeChapterEl=null}initEl(t){this.el=f({className:"shk-chapter",innerHTML:et});const e={title:"view chapters","aria-label":"view chapters"};t.seekable||(e.disabled=""),this.chapterBtn=f({tag:"button",className:["shk-btn","shk-btn_chapter"],attrs:e,innerHTML:`
        <svg aria-hidden="true">
          <use xlink:href="#shk-icon_chapter" />
        </svg>
      `}),t.ui.seekControls.push(this.chapterBtn),t.ui.extraControls.append(this.chapterBtn),this.closeBtn=this.el.querySelector(".shk-btn_close"),this.chapterList=this.el.querySelector(".shk-chapter_list"),this.overflowLayer=this.el.querySelector(".shk-chapter_main")}initEvents(t){this.chapterBtn.addEventListener("click",()=>{c(t.el,"data-show-chapter")}),t.ui.hideExtraControl(this.chapterBtn),this.closeBtn.addEventListener("click",()=>{t.el.removeAttribute("data-show-chapter")}),M=()=>{if(!this.activeChapterEl)return;const e=this.activeChapterEl.querySelector(".shk-chapter_title_wrap"),s=this.activeChapterEl.querySelector(".shk-chapter_title");k.call(this,e,s)},window.addEventListener("resize",M)}handleChapterPanel(t,e){e.chapters.length?t.el.setAttribute("data-has-chapter",""):t.el.removeAttribute("data-has-chapter"),(!e.chapters.length||!t.seekable)&&t.el.removeAttribute("data-show-chapter")}renderChapterList(t){t.length&&t.forEach(e=>{const s=this.renderChapterItem(e);this.chapterList.append(s)})}renderChapterItem(t){const e=C(t.startTime),s=`
      <button class="shk-btn shk-chapter_btn" title="seek chapter: ${t.title}" aria-label="seek chapter: ${t.title}">
        <div class="shk-icon_chapter" aria-hidden="true">
          <span class="shk-icon_playing"></span>
          <span class="shk-icon_triangle">
            <svg>
              <use xlink:href="#shk-icon_triangle" />
            </svg>
          </span>
        </div>
        <div class="shk-chapter_duration">${e}</div>
        <div class="shk-chapter_title_wrap">
          <div class="shk-chapter_title_inner" data-chapter="${t.title}">
            <div class="shk-chapter_title">${t.title}</div>
          </div>
        </div>
      </button>
    `;return f({tag:"li",className:"shk-chapter_item",innerHTML:s,attrs:{"data-id":t.id}})}setChapterActive(t){this.chapterList.querySelectorAll(".shk-chapter_item").forEach(e=>{if(e.getAttribute("data-id")===t){e.setAttribute("data-active",""),this.scrollIntoView(e),this.activeChapterEl=e;const s=e.querySelector(".shk-chapter_title"),a=e.querySelector(".shk-chapter_title_wrap");k(a,s)}else e.removeAttribute("data-active")})}scrollIntoView(t){if(this.el.style.visibility==="hidden")return;const e=window.getComputedStyle(this.overflowLayer).marginTop,s=window.getComputedStyle(this.chapterList).marginTop,a=parseInt(e)+parseInt(s),n=this.overflowLayer.scrollTop+a-t.offsetTop>0||t.offsetTop-this.overflowLayer.scrollTop-this.overflowLayer.offsetHeight>0,r=this.overflowLayer.scrollTop,h=t.offsetTop-r-a,d=performance.now();n&&N(d,d,.2,r,h,this.overflowLayer)}destroy(){window.removeEventListener("resize",M)}}q._name="chapter";console.log("%c🍊%c Shikwasa Podcast Player v2.2.1 %c https://shikwasa.js.org","background-color:#00869B40;padding:4px;","background:#00869B80;color:#fff;padding:4px 0","padding: 2px 0;");const S="008「学校について！②」";function H(i){const[t,e,s]=i.split(":"),[a,n]=s.split(",").map(Number);return parseInt(t)*3600+parseInt(e)*60+a+n/1e3}function st(i){return i.trim().split(`

`).map(e=>{const s=e.split(`
`),[,a,...n]=s,[r,h]=a.split(" --> ");return{title:n.join(" "),startTime:H(r),endTime:H(h)}})}B.use(q);fetch(`${S}.srt`).then(i=>i.text()).then(i=>st(i)).then(i=>{const t=new B({container:()=>document.getElementById("player-container"),audio:{title:S,artist:"Unknown",src:`${S}.mp3`,chapters:i}});t.el.setAttribute("data-show-chapter",!0),t.el.setAttribute("data-extra",!0)});
