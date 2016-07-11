
/**
 * @file 解析 cap data
 * @author ielgnaw(wuji0223@gmail.com)
 */

import safeStringify from 'json-stringify-safe';
import debugMod from 'debug';

const debug = debugMod('cap-parser');
const abs = Math.abs;

/**
 * 找到 data.keyframes 中最大和最小的 index 对应 keyframe
 *
 * @param {Array} keyframes 待查找的目标数组
 *
 * @return {Object} 包含最大和细小 index 以及最大最小 index 对应的 keyframe 对象以及所有的 index 集合的对象
 *                同时还包括一个对象，index 即 帧数为 key，对应的 keyframe 里的 layers 为 value
 *
 */
const getBoundaryKeyframe = (keyframes) => {
    // data.keyframes 中的最小索引
    let minIndex = Number.MAX_VALUE;

    // data.keyframes 中的最大索引
    let maxIndex = Number.MIN_VALUE;

    let ret = {
        minIndex: -1,
        maxIndex: -1,
        minKeyframe: null,
        maxKeyframe: null,
        // data.keyframes 中所有 keyframe 的 index，放在数组中，便于之后的操作
        allKeyframeIndex: [],
        keyframeMap: {}
    };

    keyframes.forEach((keyframe) => {
        let i = keyframe.index;
        ret.allKeyframeIndex.push(i);
        ret.keyframeMap[i] = keyframe.layers;
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

/**
 * 找到数组（number 数组）中传入数字前面的项和后面的项
 *
 * @param {number} num 传入的 num
 * @param {Array.<number>} arr 待查找的数组
 *
 * @return {Array.<number>} 结果数组，第 0 个元素是 num 前面的项，第 1 个元素是 num 后面的项
 */
const getAroundData = (num, arr) => {
    let ret = [];

    // 为找到 num 前面最临近的项而设置的差值最小值
    let edgeForLess = {
        ret: -1,
        val: Number.MAX_VALUE
    };

    // 为找到 num 后面最临近的项而设置的差值最小值
    let edgeForMore = {
        ret: -1,
        val: Number.MAX_VALUE
    };

    // 不存在相等的情况，在调用 getAroundData 方法之前已经处理了相等的情况
    arr.forEach((n) => {
        // 小于的情况找的是 num 的前面最近邻的项
        if (n < num) {
            let sub = num - n;
            if (sub < edgeForLess.val) {
                edgeForLess.val = sub;
                edgeForLess.ret = n;
            }
        }

        // 大于的情况找的是 num 的后面最近邻的项
        if (n > num) {
            let sub = n - num;
            if (sub < edgeForMore.val) {
                edgeForMore.val = sub;
                edgeForMore.ret = n;
            }
        }
    });

    debug(`当前传入的数据是 ${num}，紧邻他前面的索引是 ${edgeForLess.ret}，紧邻他后面的索引是 ${edgeForMore.ret}`);

    ret[0] = edgeForLess.ret;
    ret[1] = edgeForMore.ret;

    return ret;
};

export default class Parser {
    constructor(data = {}) {
        this.layers = data.layers;
        this.keyframes = data.keyframes;
        this.keyframesLen = data.keyframes.length;

        this.boundaryData = getBoundaryKeyframe(this.keyframes);

    }

    /**
     * 根据指定的帧数即 data.keyframes[keyframe].index 这个值来获取对应的 keyframe 的 layers
     * 另外，要把 index 从 0 到最后的值都包括在内，数据中没有的帧数需要算出来
     * 1. index <= this.boundaryData.minIndex 那么返回的就是 minIndex 对应的那个 keyframe 的 layers
     * 2. index >= this.boundaryData.maxIndex 那么返回的就是 maxIndex 对应的那个 keyframe 的 layers
     * 3. this.boundaryData.minIndex < index < this.boundaryData.maxIndex
     *     那么返回 computed(this.boundaryData.minIndex, this.boundaryData.maxIndex, this.boundaryData.minIndex.fx)
     *
     * @example
     *     已知：
     *     data.totalFrame = 5;
     *     data.keyframes = [{index: 1, layers: [...]}, {index: 3, layers: [...]}]
     *     这种情况下，所有的帧数据如下
     *     data.keyframes = [
     *         {index: 0, layers: [...]}, 同 index1
     *         {index: 1, layers: [...]},
     *         {index: 2, layers: [...]}, 根据 index1 的值、index3 的值 以及 index1 的 fx 计算得到
     *         {index: 3, layers: [...]},
     *         {index: 4, layers: [...]}, 同 index3
     *     ]
     */
    getLayersByKeyframe(index) {
        const bData = this.boundaryData;
        const map = bData.keyframeMap;

        // 如果传入的 index 在 keyframes 中的 index 正好存在，那么直接返回
        if (map[index]) {
            return map[index];
        }

        const minIndex = bData.minIndex;

        // index < minIndex，直接返回 minIndex 对应的那个 keyframe 的 layers
        if (index < minIndex) {
            return map[minIndex];
        }

        const maxIndex = bData.maxIndex;

        // index > maxIndex，直接返回 maxIndex 对应的那个 keyframe 的 layers
        if (index > maxIndex) {
            return map[maxIndex];
        }

        // 运行到这里，就代表传入的 index 在 keyframes 中不存在，这个传入的 index 前后一定在 keyframes 中存在

        // 1. 找出 index 的前一关键帧和后一关键帧的 index
        const aroundIndex = getAroundData(index, bData.allKeyframeIndex);
        console.warn(aroundIndex);
        // 2. 根据 aroundIndex 以及 aroundIndex[0] 的 fx 计算出当前 index 对应的 layers 的值






        return this.boundaryData.keyframeMap[index];
    }

    /**
     * 分析当前的状态
     * 本质上状态只分为三种，
     * 1. 小于等于最左
     * 2. 大于等于最后
     * 3. 中间
     *
     * @param {number} n 传入的 start 或者 end
     *
     * @return {number} 状态值
     */
    analyzeState(n) {
        let state = -2;

        return state;
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
        // console.warn(this.boundaryData);
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