!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i"),u={delayEl:document.querySelector('input[name="delay"]'),stepEl:document.querySelector('input[name="step"]'),amountEl:document.querySelector('input[name="amount"]'),buttonEl:document.querySelector(".form button")};function c(e,n){var o=Math.random()>.3;return new Promise(o?function(o,t){setTimeout((function(){o({position:e,delay:n})}),n)}:function(o,t){setTimeout((function(){t({position:e,delay:n})}),n)})}u.buttonEl.addEventListener("click",(function(e){e.preventDefault();var n=Number(u.delayEl.value),o=Number(u.stepEl.value),t=Number(u.amountEl.value);setTimeout((function(){for(var e=1;e<=t;e+=1)c(e,o*e).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms")),i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms")),i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}),n)}))}();
//# sourceMappingURL=03-promises.dabc0424.js.map