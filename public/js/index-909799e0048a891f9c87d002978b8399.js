!function(){"use strict";const o=fetch("/revisionedFiles").then((o=>o.json())),e=`${window.location.protocol}//${window.location.host}`,t=new Promise(((o,t)=>{const n=document.createElement("script");document.head.appendChild(n),n.onload=o,n.onerror=t,n.async=!0,n.src=e+"/js/fetch-inject.min.js?v=2.0.4"}));Promise.all([o,t]).then((o=>{const t=o[0],n=document.querySelector("body");fetchInject(["https://fonts.googleapis.com/css?family=Montserrat:700|Noto+Serif:400,400i,400b|Source+Sans+Pro:400,600|Source+Code+Pro:700&display=swap"]).then((()=>{null!==n&&(n.style.opacity="1")}),(()=>{null!==n&&(n.style.opacity="1")})),fetchInject([`${e}/${t.js["js/responsiveMenu.js"]}`])}))}();
