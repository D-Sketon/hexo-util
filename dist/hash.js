"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hash = hash;
exports.createSha1Hash = createSha1Hash;
const crypto_1 = __importDefault(require("crypto"));
const ALGORITHM = 'sha1';
function createSha1Hash() {
    return crypto_1.default.createHash(ALGORITHM);
}
function hash(content) {
    const hash = createSha1Hash();
    hash.update(content);
    return hash.digest();
}
//# sourceMappingURL=hash.js.map