/**
 * @file 模拟数据
 * @author ielgnaw(wuji0223@gmail.com)
 */

'use strict';

export default {

    fps: 60,

    // 总帧数
    totalFrame: 200,

    // 当前帧所在索引
    frameIndex: 0,

    // 项目名
    name: 'cap-data1',

    // 时间轴尺度（连续几个单元才显示刻度）
    scale: 5,

    // 时间轴一个单元所占用的像素宽度
    pixel: 20,

    // tab可以管理多个项目， 项目由不同的data组成
    tabs: [
        {
            id: 0,
            name: 'cap-tab1',
            focus: 0
        },

        {
            id: 1,
            name: 'cap-tab2',
            focus: 0
        },
        {
            id: 2,
            name: 'cap-tab3',
            focus: 1
        }
    ],
    layers: [
        {
            id: 1,
            name: '图层11',
            classname: 'test-layer-class1',

            // 状态集合（随数据读写管理）
            status: {

                // 图层可视
                view: true,

                // 图层可视反选（只看当前图层）
                dview: false,

                // 图层锁定
                lock: false,

                // 图层是否展开
                layer: true,

                // 图层属性是否展开
                props: true
            },

            // 父图层id
            parentid: 0,
            children: [2],

            // 图层标识颜色
            layerColor: '#893456',

            // 不透明值
            opacity: {
                fx: 'linear',
                value: 20
            },

            position: {
                x: {
                    fx: 'linear',
                    value: 200.00
                },

                y: {
                    fx: 'linear',
                    value: 300.00
                },

                z: {
                    fx: 'linear',
                    value: 300.00
                }
            },
            scale: {
                x: {
                    fx: 'linear',
                    value: 2 // 放大2倍, 0.5为缩小2倍
                },

                y: {
                    fx: 'linear',
                    value: 0.5
                },

                z: {
                    fx: 'linear',
                    value: 0.5
                }
            },

            zIndex: {
                fx: 'linear',
                value: 100
            },

            rotate: {
                x: {
                    fx: 'linear',
                    value: 30.01
                },

                y: {
                    fx: 'linear',
                    value: 30.78
                },

                z: {
                    fx: 'linear',
                    value: 30.80
                }
            },

            skew: {
                x:{
                    fx: 'linear',
                    value: 30.90
                },

                y: {
                    fx: 'linear',
                    value: 30.89
                },

                z: {
                    fx: 'linear',
                    value: 30.72
                }
            },

            color: {
                fx: 'linear',
                value: '#fff'
            },

            // 可能还有一堆css属性。。
        },
        {
            id: 2,
            name: '图层12',
            classname: 'test-layer-class2',
            layerColor: '#567488',
            status: {
                view: true,
                dview: false,
                lock: false,
                layer: true,
                props: true
            },
            parentid: 1,
            children: [3],
            opacity: {
                fx: 'linear',
                value: 20
            },
            position: {
                x: {
                    fx: 'linear',
                    value: 200
                },

                y: {
                    fx: 'linear',
                    value: 300
                },

                z: {
                    fx: 'linear',
                    value: 300
                }
            },
            scale: {
                x: {
                    fx: 'linear',
                    value: 2 // 放大2倍, 0.5为缩小2倍
                },

                y: {
                    fx: 'linear',
                    value: 0.5
                },

                z: {
                    fx: 'linear',
                    value: 0.5
                }
            },

            zIndex: {
                fx: 'linear',
                value: 100
            },

            rotate: {
                x: {
                    fx: 'linear',
                    value: 30
                },

                y: {
                    fx: 'linear',
                    value: 30
                },

                z: {
                    fx: 'linear',
                    value: 30
                }
            },

            skew: {
                x:{
                    fx: 'linear',
                    value: 30
                },

                y: {
                    fx: 'linear',
                    value: 30
                },

                z: {
                    fx: 'linear',
                    value: 30
                }
            },

            color: {
                fx: 'linear',
                value: '#fff'
            }
        },
        {
            id: 3,
            name: '图层13',
            classname: 'test-layer-class3',
            status: {
                view: true,
                dview: false,
                lock: false,
                layer: false,
                props: false
            },
            layerColor: '#529862',
            parentid: 2,
            opacity: {
                fx: 'linear',
                value: 20
            },
            position: {
                x: {
                    fx: 'linear',
                    value: 200
                },

                y: {
                    fx: 'linear',
                    value: 300
                },

                z: {
                    fx: 'linear',
                    value: 300
                }
            },
            scale: {
                x: {
                    fx: 'linear',
                    value: 2 // 放大2倍, 0.5为缩小2倍
                },

                y: {
                    fx: 'linear',
                    value: 0.5
                },

                z: {
                    fx: 'linear',
                    value: 0.5
                }
            },

            zIndex: {
                fx: 'linear',
                value: 100
            },

            rotate: {
                x: {
                    fx: 'linear',
                    value: 30
                },

                y: {
                    fx: 'linear',
                    value: 30
                },

                z: {
                    fx: 'linear',
                    value: 30
                }
            },

            skew: {
                x:{
                    fx: 'linear',
                    value: 30
                },

                y: {
                    fx: 'linear',
                    value: 30
                },

                z: {
                    fx: 'linear',
                    value: 30
                }
            },

            color: {
                fx: 'linear',
                value: '#fff'
            }
        }
    ],

    keyframes: [
        {
            index: 2,
            layers: [
                {
                    id: 1,
                    position: {
                        x: {
                            value: 213,
                            fx: 'linear'
                        },
                        y: {
                            value: 340,
                            fx: 'linear'
                        }
                    },
                    scale: {
                        x: {
                            value: 2,
                            fx: 'linear'
                        },
                        y: {
                            value: 1,
                            fx: 'linear'
                        }
                    },
                    opacity: {
                        value: 30,
                        fx: 'linear'
                    }
                }
            ]
        },
        {
            index: 11,
            layers: [
                {
                    id: 1,
                    scale: {
                        x: {
                            value: 2,
                            fx: 'linear'
                        },
                        y: {
                            value: 1,
                            fx: 'linear'
                        }
                    }
                }
            ]
        },
        {
            index: 21,
            layers: [
                {
                    id: 1,
                    scale: {
                        x: {
                            value: 2,
                            fx: 'linear'
                        },
                        y: {
                            value: 1,
                            fx: 'linear'
                        }
                    }
                }
            ]
        }
    ]
};