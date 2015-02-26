"use strict";

var detects = {};

// ===== BROWSERS =====

detects.chrome     = /Chrome/i.test(ua);
detects.opera      = /Opera/.test(ua);
detects.firefox    = /Firefox/i.test(ua) && /Mozilla/i.test(ua) && !detects.opera;
detects.safari     = /Safari/i.test(ua) && !detects.chrome;
detects.phantomjs  = /\sPhantomJS\/[[0-9]+\]/i.test(ua);

// Internet Explorer
detects.ie11       = /(?:\sTrident\/7\.0;.*\srv:11\.0)/i.test(ua);
detects.ie10       = /MSIE 10\.0(?!.*IEMobile)/i.test(ua);
detects.ie10touch  = /MSIE 10\.0.*Touch(?!.*IEMobile)/i.test(ua);
detects.ie9        = /MSIE 9\.0(?!.*IEMobile)/i.test(ua);
detects.ie8        = /MSIE 8\.0(?!.*IEMobile)/i.test(ua);
detects.ie7        = /MSIE 7\.0(?!.*IEMobile)/i.test(ua);

//  ==== OPERATING SYSTEMS =====

// Android/Linux 
detects.android    = /Android/i.test(ua);
detects.linux      = /Linux/.test(ua) && !detects.android;

// Apple
detects.ios        = /iP(ad|hone|od)/i.test(ua);
detects.mac        = /Macintosh/i.test(ua);

// Windows 
detects.windows    = /Windows/i.test(ua);
detects.winPhone   = /Windows Phone/i.test(ua);
detects.winPhone7  = /Windows Phone 7.0/i.test(ua);
detects.winPhone75 = /Windows Phone 7.5/i.test(ua);
detects.winPhone8  = /Windows Phone 8.0/i.test(ua);


// ===== DEVICES / DEVICE SIZE

detects.touch      = /Touch/i.test(ua);

detects.tablet = 
    (/iPad/i.test(ua)) || 
    (detects.android && !(/Mobile/i.test(ua))) ||
    (!detects.winPhone && detects.windows && detects.touch)
;

detects.phone = 
    (/iP(hone|od)/.test(ua)) ||
    (/Phone/i.test(ua)) ||
    (detects.android && detects.mobile)
;

detects.mobile     = detects.tablet || detects.phone;
detects.desktop    = detects.mac || !detects.mobile;

// ===== OTHER / MISC 

detects.localhost  = /localhost/.test(host);

module.exports = detects;
