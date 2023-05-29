(function () {
	'use strict';

	var getMetaContent=function(a){var b,c=a.attributeKey,d=a.attributeValue,e=null===(b=window)||void 0===b?void 0:b.document.querySelector("meta[".concat(c,"=\"").concat(d,"\"]"));return null===e||void 0===e?void 0:e.content};

	var openGraphs={title:getMetaContent({attributeKey:"property",attributeValue:"og:title"}),image:getMetaContent({attributeKey:"property",attributeValue:"og:image"})},projectName=getMetaContent({attributeKey:"name",attributeValue:"projectname"});

	// import
	var Open=function(){var a=document.getElementById("review_twits_write");a&&a.addEventListener("click",function(){var a,b,c;null===(a=window)||void 0===a?void 0:a.open("https://reviewtwits.shop/review/write?projectName=".concat(projectName,"&productURL=").concat(null===(b=window)||void 0===b||null===(c=b.location)||void 0===c?void 0:c.href,"&title=").concat(null===openGraphs||void 0===openGraphs?void 0:openGraphs.title,"&image=").concat(null===openGraphs||void 0===openGraphs?void 0:openGraphs.image),"\uB9AC\uBDF0\uD2B8\uC717 \uB9AC\uBDF0\uC791\uC131\uD558\uAE30","width=900,height=800,scrollbars=yes");});};

	function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return "Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _iterableToArrayLimit(a,b){var c=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=c){var d,e,f,g,h=[],i=!0,j=!1;try{if(f=(c=c.call(a)).next,0===b){if(Object(c)!==c)return;i=!1;}else for(;!(i=(d=f.call(c)).done)&&(h.push(d.value),h.length!==b);i=!0);}catch(a){j=!0,e=a;}finally{try{if(!i&&null!=c.return&&(g=c.return(),Object(g)!==g))return}finally{if(j)throw e}}return h}}function _arrayWithHoles(a){if(Array.isArray(a))return a}var Iframe=function(){var a=document.getElementById("review_twits_thread");if(a){var b,c,d=document.createElement("iframe"),e={id:"reviewtwits",src:"https://reviewtwits.shop/review?projectName=".concat(projectName,"&productURL=").concat(null===(b=window)||void 0===b||null===(c=b.location)||void 0===c?void 0:c.href,"&title=").concat(null===openGraphs||void 0===openGraphs?void 0:openGraphs.title,"&image=").concat(null===openGraphs||void 0===openGraphs?void 0:openGraphs.image),width:"100%",height:"100%"// ...iframeAttributes,
	};// set $iframe
	d.title="reviewTwits",Object.entries(e).forEach(function(a){var b=_slicedToArray(a,2),c=b[0],e=b[1];return d.setAttribute(c,e)}),a.appendChild(d);}};

	Open(),Iframe();

})();
