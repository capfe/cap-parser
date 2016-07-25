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


// 测试数据的关键帧索引为 2, 7, 12, 16

// debug(`Parser Result: \n${safeStringify(parser.getLayersByKeyframe(0), null, 4)}`);
// debug(`Parser Result: \n${safeStringify(parser.getLayersByKeyframe(1), null, 4)}`);
// debug(`Parser Result: \n${safeStringify(parser.getLayersByKeyframe(2), null, 4)}`);


// debug(`Parser Result: \n${safeStringify(parser.getLayersByKeyframe(3), null, 4)}`);
// debug(`Parser Result: \n${safeStringify(parser.getLayersByKeyframe(4), null, 4)}`);
// debug(`Parser Result: \n${safeStringify(parser.getLayersByKeyframe(7000), null, 4)}`);

console.log(parser.getLayersByKeyframe(3));
// parser.getLayersByKeyframe(3);

// parser.getLayersByKeyframe(5);
// parser.getLayersByKeyframe(6);

// parser.getLayersByKeyframe(8);
// parser.getLayersByKeyframe(9);
// parser.getLayersByKeyframe(10);
// parser.getLayersByKeyframe(11);

// debug(`Parser Result: \n${safeStringify(parser.getLayersByKeyframe(16), null, 4)}`);
// debug(`Parser Result: \n${safeStringify(parser.getLayersByKeyframe(17), null, 4)}`);

// 4 - end
// parser.parse(4);

// 8 - 13
// parser.parse(8, 15);

