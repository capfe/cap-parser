/**
 * @file 入口
 * @author ielgnaw(wuji0223@gmail.com)
 */


import debugMod from 'debug';
import safeStringify from 'json-stringify-safe';
import mockData from './mock-data';
import Parser from './Parser';

const debug = debugMod('cap-parser');

let parser = new Parser(mockData);

// test
// 0 - end
parser.parse();


// debug(`Parser Result: \n${safeStringify(parser.getLayersByKeyframe(0), null, 4)}`);
// debug(`Parser Result: \n${safeStringify(parser.getLayersByKeyframe(1), null, 4)}`);
// debug(`Parser Result: \n${safeStringify(parser.getLayersByKeyframe(2), null, 4)}`);

// debug(`Parser Result: \n${safeStringify(parser.getLayersByKeyframe(16), null, 4)}`);
// debug(`Parser Result: \n${safeStringify(parser.getLayersByKeyframe(17), null, 4)}`);

// 4 - end
// parser.parse(4);

// 8 - 13
// parser.parse(8, 15);

