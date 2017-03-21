﻿/*
 * spa.js
 * Root namespace module
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

var spa = (function () {
    'use strict';
    var initModule = function ($container) {
        //$container.html(
        //  '<h1 style="display:inline-block; margin:25px;">'
        //    + 'hello world!'
        //  + '</h1>'
        //);
        spa.data.initModule();
        spa.model.initModule();
        spa.shell.initModule($container);
    };

    return { initModule: initModule };
}());
