/**
 * @file 入口
 * @author ielgnaw(wuji0223@gmail.com)
 */


import debugMod from 'debug';
import safeStringify from 'json-stringify-safe';
import mockData from './mock-data';
import Parser from './Parser';

// console.warn(parser, 1);
// console.warn(parser.test(), 'aqq');
// console.log(parser.parse());

console.warn(Parser);

let parser = new Parser(mockData);


console.warn(parser);
console.warn(parser.aa);