var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var l={id:e,exports:{}};return o[e]=l,n.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var l=n("iQIUW");const i={delayEl:document.querySelector('input[name="delay"]'),stepEl:document.querySelector('input[name="step"]'),amountEl:document.querySelector('input[name="amount"]'),buttonEl:document.querySelector(".form button")};function r(e,o){const t=Math.random()>.3;return new Promise(t?(t,n)=>{setTimeout((()=>{t({position:e,delay:o})}),o)}:(t,n)=>{setTimeout((()=>{n({position:e,delay:o})}),o)})}i.buttonEl.addEventListener("click",(function(e){e.preventDefault();const o=Number(i.delayEl.value),t=Number(i.stepEl.value),n=Number(i.amountEl.value);setTimeout((()=>{for(let e=1;e<=n;e+=1)r(e,t*e).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`),l.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`),l.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}))}),o)}));
//# sourceMappingURL=03-promises.58bb884b.js.map
