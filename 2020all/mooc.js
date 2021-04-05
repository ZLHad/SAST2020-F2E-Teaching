(function () {
    let nopanel = false;
    let usersetting = {
        usethis: false,
        cdkey: "",
        timeout: 10000,
        autogetanswer: false,
        showanswerbtn: true,
        learnCourse: {
            vider: true,
            doc: true,
            test: true,
            discuss: true,
            playrate: 0,
        }
    };
    let window = unsafeWindow;
    let antiantiscript = GM_getValue('antiantiscript');
    let lastversion = GM_getValue('lastversion');
    GM_setValue('lastversion', cversion);
    if ((!antiantiscript || antiantiscript === "undefined") || (!lastversion || lastversionlastversion === "undefined") || (lastversion < cversion)) {
        GM_setValue('antiantiscript', '0');
        antiantiscript = '0';
    }
    new Function('GM_xmlhttpRequest', antiantiscript)(GM_xmlhttpRequest);
    let trime2 = function (s) {
        return s.trim().replace(/\s+/g, '');
    };

})
