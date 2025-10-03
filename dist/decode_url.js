"use strict";
const url_1 = require("url");
const querystring_1 = require("querystring");
const PROTOCOL_RE = /^[a-z0-9.+-]+:/i;
const hasProtocolLikeNode = (str) => {
    if (typeof str !== 'string')
        throw new TypeError('url must be a string');
    return PROTOCOL_RE.test(str.trim());
};
const decodeURL = (str) => {
    if (hasProtocolLikeNode(str)) {
        const parsed = new URL(str);
        // Exit if input is a data url
        if (parsed.origin === 'null')
            return str;
        const url = (0, url_1.format)(parsed, { unicode: true });
        return (0, querystring_1.unescape)(url);
    }
    return (0, querystring_1.unescape)(str);
};
module.exports = decodeURL;
//# sourceMappingURL=decode_url.js.map