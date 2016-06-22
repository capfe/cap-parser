/**
 * @file 解析 cap data
 * @author ielgnaw(wuji0223@gmail.com)
 */

// ((t) => {
//     if (t === 1) {
//         console.warn(1);
//     }
//     else {
//         console.warn('nooo');
//     }
// })()

// export function test() {
//     return 1;
// }

// export function parse() {
//     const debug = debugMod('cap-parser');
//     debug(safeStringify(mockData, null, 4));
//     console.warn(layers);
// }

export default class Parser {
    constructor(data = {}) {
        // const {layers, keyframes} = data;
        // console.warn(layers, keyframes);
        this.layers = data.layers;
        this.keyframes = data.keyframes;
    }

    aa() {
        console.warn(123);
    }
}