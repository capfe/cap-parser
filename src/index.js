/**
 * @file 入口
 * @author ielgnaw(wuji0223@gmail.com)
 */


import debugMod from 'debug';
import safeStringify from 'json-stringify-safe';
import mockData from './mock-data';
import Parser from './Parser';


let parser = new Parser(mockData);

// test
// 0 - end
parser.parse();

// 4 - end
// parser.parse(4);

// 8 - 13
// parser.parse(8, 15);

