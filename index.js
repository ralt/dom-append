"use strict";

var forEach = require('foreach-shim');

module.exports = function(parent, child) {
    if (child.length) {
        forEach(child, function(c) {
            append(parent, c);
        });
    }
    else {
        parent.appendChild(child);
    }
};

function append(parent, child) {
    parent.appendChild(child);
}
