/*
参数：
	docWidth:文档宽度,默认750px
	bNumber:倍数，默认100则1px=0.01rem，倍数越大则偏差越小
	minWidth:最小宽度，默认320
	maxWidth:最大宽度，默认是文档宽度
*/
var rem=function (docWidth, bNumber, minWidth, maxWidth) {
            if (!docWidth)
                docWidth = 750;
            if (!bNumber)
                bNumber = 100;
            if (!minWidth)
                minWidth = 320;
            if (!maxWidth)
                maxWidth = docWidth;
            minWidth = minWidth / docWidth * bNumber;
            maxWidth = maxWidth / docWidth * bNumber;
            !function (window) {
                var doc = window.document,
                    docEl = doc.documentElement,
                    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
                var recalc = (function refreshRem() {
                    var clientWidth = docEl.getBoundingClientRect().width;
                    var rb = bNumber * (clientWidth / docWidth);
                    rb = Math.max(Math.min(rb, maxWidth), minWidth);
                    docEl.style.fontSize = rb + "px";
                    return refreshRem;
                })();
                /* 添加倍屏标识,安卓为1 */
                docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1);

                if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
                    /* 添加IOS标识 */
                    doc.documentElement.classList.add('ios');
                    /* IOS8以上给html添加hairline样式,以便特殊处理 */
                    if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8)
                        doc.documentElement.classList.add('hairline');
                }
                if (!doc.addEventListener) return;
                window.addEventListener(resizeEvt, recalc, false);
                doc.addEventListener('DOMContentLoaded', recalc, false);
            }(window);
        }