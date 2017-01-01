/**
 * @file 模拟数据
 * @author ielgnaw(wuji0223@gmail.com)
 */

'use strict';

export default {

    fps: 60,

    // 总帧数
    totalFrame: 20,

    // 当前帧所在索引
    frameIndex: 0,

    // 项目名
    name: 'cap-data1',

    // 时间轴尺度（连续几个单元才显示刻度）
    scale: 5,

    // 时间轴一个单元所占用的像素宽度
    pixel: 20,
    layers: [
        {
            id: 1,
            name: '图层1',
            classname: 'test-layer-class1',
            // 图层标识颜色
            layerColor: '#893456',

            // 状态集合（随数据读写管理）
            status: {

                // 图层可视
                view: true,

                // 图层锁定
                lock: false,

                // 图层是否展开
                layer: true,

                // 图层属性是否展开
                props: true
            },

            // 父图层id
            parentid: 0,
            children: [
                2
            ]
        },
        {
            id: 4,
            name: '图层4',
            classname: 'test-layer-class4',
            layerColor: '#567488',
            status: {
                view: true,
                lock: false,
                layer: true,
                props: true
            },
            parentid: 1,
            children: [3]
        },
        {
            id: 7,
            name: '图层',
            classname: 'test-layer-class7',
            layerColor: '#529862',
            status: {
                view: true,
                dview: false,
                lock: false,
                layer: false,
                props: false
            },
            parentid: 2
        }
    ],

    // 关键帧的 id，第 0 帧是必须的
    // 需要 sort
    // 如下的示例表示当前数据中有 0 4 7 12 四个关键帧
    keyframeIds: [0, 4, 7, 12],

    keyframes: {
        // 第 0 帧里的 layers 就是所有的 layers，每个 layer 里的 props、transform 也是全的
        0: {
            // 关键帧中的所有 layer，在第 0 帧时，layers 是全集，其他帧里，layer 里的数据表示有变化的 layer
            // 如下的数据表示一共有 abcdefgh 八个 layer
            layerIds: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
            layers: {
                a: {
                    props: {
                        opacity: ['linear', 20],
                        color: ['linear', '#fff'],
                        width: ['linear', 200],
                        height: ['linear', 300],
                        left: ['linear', 200],
                        top: ['linear', 200],
                        backgroundImage: ['linear', 'http://xxx/xxx'],
                        backgroundColor: ['linear', '#cccccc'],
                        zIndex: ['linear', 100]
                    },
                    transform: {
                        origin: ['linear', [0, 0]],
                        translate: ['linear', [10, 10, 1]],
                        scale: ['linear', [10, 10, 1]],
                        rotate: ['linear', [10, 10, 0]],
                        skew: ['linear', [10, 10, 1]]
                    }
                },
                b: {
                    props: {
                        opacity: ['linear', 20],
                        color: ['linear', '#fff'],
                        width: ['linear', 200],
                        height: ['linear', 300],
                        left: ['linear', 200],
                        top: ['linear', 200],
                        backgroundImage: ['linear', 'http://xxx/xxx'],
                        backgroundColor: ['linear', '#cccccc'],
                        zIndex: ['linear', 100]
                    },
                    transform: {
                        origin: ['linear', [0, 0]],
                        translate: ['linear', [10, 10, 1]],
                        scale: ['linear', [10, 10, 1]],
                        rotate: ['linear', [10, 10, 0]],
                        skew: ['linear', [10, 10, 1]]
                    }
                },
                c: {
                    props: {
                        opacity: ['linear', 20],
                        color: ['linear', '#fff'],
                        width: ['linear', 200],
                        height: ['linear', 300],
                        left: ['linear', 200],
                        top: ['linear', 200],
                        backgroundImage: ['linear', 'http://xxx/xxx'],
                        backgroundColor: ['linear', '#cccccc'],
                        zIndex: ['linear', 100]
                    },
                    transform: {
                        origin: ['linear', [0, 0]],
                        translate: ['linear', [10, 10, 1]],
                        scale: ['linear', [10, 10, 1]],
                        rotate: ['linear', [10, 10, 0]],
                        skew: ['linear', [10, 10, 1]]
                    }
                },
                d: {
                    props: {
                        opacity: ['linear', 20],
                        color: ['linear', '#fff'],
                        width: ['linear', 200],
                        height: ['linear', 300],
                        left: ['linear', 200],
                        top: ['linear', 200],
                        backgroundImage: ['linear', 'http://xxx/xxx'],
                        backgroundColor: ['linear', '#cccccc'],
                        zIndex: ['linear', 100]
                    },
                    transform: {
                        origin: ['linear', [0, 0]],
                        translate: ['linear', [10, 10, 1]],
                        scale: ['linear', [10, 10, 1]],
                        rotate: ['linear', [10, 10, 0]],
                        skew: ['linear', [10, 10, 1]]
                    }
                },
                e: {
                    props: {
                        opacity: ['linear', 20],
                        color: ['linear', '#fff'],
                        width: ['linear', 200],
                        height: ['linear', 300],
                        left: ['linear', 200],
                        top: ['linear', 200],
                        backgroundImage: ['linear', 'http://xxx/xxx'],
                        backgroundColor: ['linear', '#cccccc'],
                        zIndex: ['linear', 100]
                    },
                    transform: {
                        origin: ['linear', [0, 0]],
                        translate: ['linear', [10, 10, 1]],
                        scale: ['linear', [10, 10, 1]],
                        rotate: ['linear', [10, 10, 0]],
                        skew: ['linear', [10, 10, 1]]
                    }
                },
                f: {
                    props: {
                        opacity: ['linear', 20],
                        color: ['linear', '#fff'],
                        width: ['linear', 200],
                        height: ['linear', 300],
                        left: ['linear', 200],
                        top: ['linear', 200],
                        backgroundImage: ['linear', 'http://xxx/xxx'],
                        backgroundColor: ['linear', '#cccccc'],
                        zIndex: ['linear', 100]
                    },
                    transform: {
                        origin: ['linear', [0, 0]],
                        translate: ['linear', [10, 10, 1]],
                        scale: ['linear', [10, 10, 1]],
                        rotate: ['linear', [10, 10, 0]],
                        skew: ['linear', [10, 10, 1]]
                    }
                },
                g: {
                    props: {
                        opacity: ['linear', 20],
                        color: ['linear', '#fff'],
                        width: ['linear', 200],
                        height: ['linear', 300],
                        left: ['linear', 200],
                        top: ['linear', 200],
                        backgroundImage: ['linear', 'http://xxx/xxx'],
                        backgroundColor: ['linear', '#cccccc'],
                        zIndex: ['linear', 100]
                    },
                    transform: {
                        origin: ['linear', [0, 0]],
                        translate: ['linear', [10, 10, 1]],
                        scale: ['linear', [10, 10, 1]],
                        rotate: ['linear', [10, 10, 0]],
                        skew: ['linear', [10, 10, 1]]
                    }
                },
                h: {
                    props: {
                        opacity: ['linear', 20],
                        color: ['linear', '#fff'],
                        width: ['linear', 200],
                        height: ['linear', 300],
                        left: ['linear', 200],
                        top: ['linear', 200],
                        backgroundImage: ['linear', 'http://xxx/xxx'],
                        backgroundColor: ['linear', '#cccccc'],
                        zIndex: ['linear', 100]
                    },
                    transform: {
                        origin: ['linear', [0, 0]],
                        translate: ['linear', [10, 10, 1]],
                        scale: ['linear', [10, 10, 1]],
                        rotate: ['linear', [10, 10, 0]],
                        skew: ['linear', [10, 10, 1]]
                    }
                },
            }
        },
        4: {
            // 表示在 4 这个关键里，有变化的 layer 是 d, g
            layerIds: ['d', 'g'],
            layers: {
                d: {
                    props: {
                        left: ['linear', 200],
                        top: ['linear', 200]
                    },
                    transform: {
                        translate: ['linear', [10, 10, 1]],
                        scale: ['linear', [10, 10, 1]]
                    }
                },
                g: {
                    props: {
                        width: ['linear', 100]
                    }
                }
            }
        },
        7: {
            // 表示在 7 这个关键里，有变化的 layer 是 a, e, h
            layerIds: ['a', 'e', 'h'],
            layers: {
                a: {
                    props: {
                        left: ['linear', 200],
                        top: ['linear', 200]
                    },
                    transform: {
                        translate: ['linear', [10, 10, 1]],
                        scale: ['linear', [10, 10, 1]]
                    }
                },
                e: {
                    props: {
                        width: ['linear', 100]
                    }
                },
                h: {
                    props: {
                        height: ['linear', 100]
                    }
                }
            }
        },
        12: {
            // 表示在 12 这个关键里，有变化的 layer 是 c
            layerIds: [c],
            layers: {
                a: {
                    props: {
                        opacity: ['linear', 2]
                    }
                }
            }
        }
    }
};
