import { Transform } from 'stream';
declare class CacheStream extends Transform {
    _cache: Buffer[];
    constructor();
    _transform(chunk: any, enc: any, callback: any): void;
    getCache(): Buffer<ArrayBuffer>;
}
export = CacheStream;
