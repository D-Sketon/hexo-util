import crypto from 'crypto';
declare function createSha1Hash(): crypto.Hash;
declare function hash(content: crypto.BinaryLike): Buffer<ArrayBufferLike>;
export { hash, createSha1Hash };
