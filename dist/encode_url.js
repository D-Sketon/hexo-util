"use strict";
const url_1 = require("url");
const querystring_1 = require("querystring");
const PROTOCOL_RE = /^[a-z0-9.+-]+:/i;
const hasProtocolLikeNode = (str) => {
    if (typeof str !== 'string')
        throw new TypeError('url must be a string');
    return PROTOCOL_RE.test(str.trim());
};
const encodeURL = (str) => {
    if (hasProtocolLikeNode(str)) {
        const parsed = new URL(str);
        // Exit if input is a data url
        if (parsed.origin === 'null')
            return str;
        parsed.search = new URLSearchParams(parsed.search).toString();
        parsed.pathname = encodeURI(decodeURI(parsed.pathname));
        // preserve IDN
        return (0, url_1.format)(parsed, { unicode: true });
    }
    return encodeURI((0, querystring_1.unescape)(str));
};
module.exports = encodeURL;
//# sourceMappingURL=encode_url.js.map