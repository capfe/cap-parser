
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

import debugMod from 'debug';

const debug = debugMod('cap-parser');
const abs = Math.abs;


/**
 * 找到 data.keyframes 中最大和最小的 index 对应 keyframe
 *
 * @param {Array} keyframes 待查找的目标数组
 *
 * @type {Object} 包含最大和细小 index 以及最大最小 index 对应的 keyframe 对象以及所有的 index 集合的对象
 */
const findBoundaryIndex = (keyframes) => {
    // data.keyframes 中的最小索引
    let minIndex = Number.MAX_VALUE;

    // data.keyframes 中的最大索引
    let maxIndex = Number.MIN_VALUE;

    let ret = {
        minIndex: -1,
        maxIndex: -1,
        minKeyframe: null,
        maxKeyframe: null,
        allIndex: []
    };

    keyframes.forEach((keyframe) => {
        let i = keyframe.index;
        ret.allIndex.push(i);
        if (i <= minIndex) {
            minIndex = i;
            ret.minIndex = i;
            ret.minKeyframe = keyframe;
        }

        if (i >= maxIndex) {
            maxIndex = i;
            ret.maxIndex = i;
            ret.maxKeyframe = keyframe;
        }
    });

    return ret;
};

export default class Parser {
    constructor(data = {}) {
        this.layers = data.layers;
        this.keyframes = data.keyframes;
        this.keyframesLen = data.keyframes.length;

        findBoundaryIndex(this.keyframes);

        // 关键帧中的 layers，并不是所有的，而是根据传入的 start 和 end 确定的
        this.layersInKeyframes = [];
    }

    // 只传入 start 的情况
    // start | no index => start = default, end = default
    // start | index1 | index2 | index3  => start = default, end = index3
    // start = index1 | index2 | index3  => start = index1, end = index3
    // index1 | start | index2 | index3  => start = computed(index1, index2, index1.fx), end = index3
    // index1 | start = index2 | index3  => start = index2, end = index3
    // index1 | index2 | start | index3  => start = computed(index2, index3, index2.fx), end = index3
    // index1 | index2 | start >= index3  => start = index3, end = index3
    parse(start) {

    }


    // 1. 传一个关键帧数，那么从这个帧数开始然后到最后
    // 2. 传两个关键帧数，那么就取这两个帧数之间的
    // 3. 没传关键帧数，那么从开始到最后
    // start, end 指的是 data.keyframes 中每个 item 的 index 属性，而不是 data.keyframes 中每个 item 的索引
    // parse(start = 0, end) {
    //     // 这个方法里要做的事：
    //     // 1. 找出 data.keyframes 中的最小 index 和最大 index
    //     // 2. 根据传入的参数找到 和传入的参数最接近那一条关键帧的数据

    //     // data.keyframes 中的最小索引
    //     let minIndex = Number.MAX_VALUE;

    //     // data.keyframes 中的最大索引
    //     let maxIndex = Number.MIN_VALUE;

    //     this.keyframes.forEach((keyframe) => {
    //         let i = keyframe.index;
    //         if (i <= minIndex) {
    //             minIndex = i;
    //         }

    //         if (i >= maxIndex) {
    //             maxIndex = i;
    //         }
    //     });

    //     end = end ? end : maxIndex;

    //     debug(`当前数据 data.keyframes 中，最大的索引为 ${maxIndex}，最小的索引为 ${minIndex}。`);
    //     debug(`根据传入的 start、end 参数，当前应该计算的关键帧的范围是 ${start} 到 ${end} 之间。`);
    //     // debug(`和传入的 start 相比较差值最小的那个关键帧是 index 为 ${sub4Start.retIndex} 的那个`);
    //     // debug(`和传入的 end 相比较差值最小的那个关键帧是 index 为 ${sub4End.retIndex} 的那个`);
    // }

    // 1. 传一个关键帧数，那么从这个帧数开始然后到最后
    // 2. 传两个关键帧数，那么就取这两个帧数之间的
    // 3. 没传关键帧数，那么从开始到最后
    // start, end 指的是 data.keyframes 中每个 item 的 index 属性，而不是 data.keyframes 中每个 item 的索引
    /*parse(start = 0, end) {
        // 这个方法里要做的事：
        // 1. 找出 data.keyframes 中的最小 index 和最大 index
        // 2. 根据传入的参数找到 和传入的参数最接近那一条关键帧的数据

        // data.keyframes 中的最小索引
        let minIndex = Number.MAX_VALUE;

        // data.keyframes 中的最大索引
        let maxIndex = Number.MIN_VALUE;

        // 和传入的 start 相比较差值最小的那个 index 值，为之后获取 start 相关的的数据所用
        let sub4Start = {
            val: Number.MAX_VALUE,
            retIndex: -1
        };

        // 和传入的 end 相比较差值最小的那个 index 值，为之后获取 end 相关的的数据所用
        let sub4End = {
            val: Number.MAX_VALUE,
            retIndex: -1
        };

        this.keyframes.forEach((keyframe) => {
            let i = keyframe.index;
            if (i <= minIndex) {
                minIndex = i;
            }

            let tmp = abs(i - start);
            if (tmp <= sub4Start.val) {
                sub4Start = {
                    retIndex: i,
                    val: tmp
                };
            }

            if (i >= maxIndex) {
                maxIndex = i;
                if (!end) {
                    if (end <= maxIndex) {
                        end = maxIndex;
                        let tmp1 = abs(i - end);
                        if (tmp1 <= sub4End.val) {
                            sub4End = {
                                retIndex: i,
                                val: tmp1
                            };
                        }
                    }
                }
                else {
                    let tmp1 = abs(i - end);
                    if (tmp1 <= sub4End.val) {
                        sub4End = {
                            retIndex: i,
                            val: tmp1
                        };
                    }
                }


            }
        });

        debug(`当前数据 data.keyframes 中，最大的索引为 ${maxIndex}，最小的索引为 ${minIndex}。`);
        debug(`根据传入的 start、end 参数，当前应该计算的关键帧的范围是 ${start} 到 ${end} 之间。`);
        debug(`和传入的 start 相比较差值最小的那个关键帧是 index 为 ${sub4Start.retIndex} 的那个`);
        debug(`和传入的 end 相比较差值最小的那个关键帧是 index 为 ${sub4End.retIndex} 的那个`);
    }*/
}