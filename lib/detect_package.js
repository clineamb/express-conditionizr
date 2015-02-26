"use strict";


var detects = {};

// ===== BROWSERS =====

detects.chrome = function(ua, host) {
    return /Chrome/i.test(ua);
};

detects.opera = function(ua, host) {
    return /Opera/.test(ua);
};

detects.firefox = function(ua, host) {
    return /Firefox/i.test(ua) && /Mozilla/i.test(ua) && !detects.opera(ua, host);
};

detects.safari = function(ua, host) {
    return /Safari/i.test(ua) && !detects.chrome(ua, host);
};

detects.phantomjs = function(ua, host) {
    return /\sPhantomJS\/[[0-9]+\]/i.test(ua);
};


// Internet Explorer
detects.ie11 = function(ua, host) {
    return /(?:\sTrident\/7\.0;.*\srv:11\.0)/i.test(ua);
};

detects.ie10 = function(ua, host) {
    return /MSIE 10\.0(?!.*IEMobile)/i.test(ua);
};

detects.ie10touch  = function(ua, host) {
    return /MSIE 10\.0.*Touch(?!.*IEMobile)/i.test(ua);
};

detects.ie9 = function(ua, host) {
    return /MSIE 9\.0(?!.*IEMobile)/i.test(ua);
};

detects.ie8 = function(ua, host) {
    return /MSIE 8\.0(?!.*IEMobile)/i.test(ua);
};

detects.ie7 = function(ua, host) {
    return /MSIE 7\.0(?!.*IEMobile)/i.test(ua);
};


//  ==== OPERATING SYSTEMS =====

// Android/Linux 
detects.android = function(ua, host) {
    return /Android/i.test(ua);
};

detects.linux = function(ua, host) {
    return /Linux/.test(ua) && !detects.android(ua, host);
};


// Apple
detects.ios = function(ua, host) {
    return /iP(ad|hone|od)/i.test(ua);
};

detects.mac = function(ua, host) {
    return /Macintosh/i.test(ua);
};


// Windows 
detects.windows = function(ua, host) {
    return /Windows/i.test(ua);
};

detects.winPhone = function(ua, host) {
    return /Windows Phone/i.test(ua);
};

detects.winPhone7 = function(ua, host) {
    return /Windows Phone 7.0/i.test(ua);
};

detects.winPhone75 = function(ua, host) {
    return /Windows Phone 7.5/i.test(ua);
};

detects.winPhone8  = function(ua, host) {
    return /Windows Phone 8.0/i.test(ua);
};



// ===== DEVICES / DEVICE SIZE

detects.touch = function(ua, host) {
    return /Touch/i.test(ua);
};


detects.tablet = function(ua, host) {
    return  (/iPad/i.test(ua)) || 
            (detects.android(ua, host) && !(/Mobile/i.test(ua))) ||
            (!detects.winPhone(ua, host) && detects.windows(ua, host) && detects.touch(ua, host))
};


detects.phone = function(ua, host) {
    return  (/iP(hone|od)/.test(ua)) ||
            (/Phone/i.test(ua)) ||
            (detects.android(ua, host) && detects.mobile(ua, host))
};

detects.mobile = function(ua, host) {
    return detects.tablet(ua, host) || detects.phone(ua, host);
};

detects.desktop = function(ua, host) {
    return  detects.mac(ua, host) || !detects.mobile(ua, host);
};


// ===== OTHER / MISC 

detects.localhost = function(ua, host) {
    return /localhost/.test(host);
};


module.exports = detects;
