<template>
    <div class="map" style="width: 100%;height: 100%;">
        <ECharts id="map" :option="option"></ECharts>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import dqjd from '../../../src/map/dqjd.json'
import * as echarts from 'echarts';
// import * as echarts from '../../../assets/echarts.min.js';
// const map = ref("map")
let options = ref({})
const initChart = () => {
    let echartsObj = echarts.init(document.getElementById("map"))
    echarts.registerMap('殿前街道', dqjd)
    options = {
        backgroundColor: '#02093300',
        title: {
            top: 20,
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },
        geo: {
            map: '殿前街道',
            aspectScale: 0.7, //长宽比
            zoom: 1.3,
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#013C6200',
                    shadowColor: '#182f6800',
                    shadowOffsetX: 0,
                    shadowOffsetY: 25
                },
                emphasis: {
                    areaColor: '#2AB8FF00',
                    borderWidth: 0,
                    color: 'green',
                    label: {
                        show: false
                    }
                }
            }
        },
        series: [{
            type: 'map',
            roam: true,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },

            itemStyle: {
                normal: {
                    borderColor: '#2ab8ff',
                    borderWidth: 1.5,
                    areaColor: '#12235c'
                },
                emphasis: {
                    areaColor: '#2AB8FF',
                    borderWidth: 0,
                    color: 'green'
                }
            },
            zoom: 1.3,
            roam: false,
            map: '殿前街道' //使用
            // data: this.difficultData //热力图数据   不同区域 不同的底色
        },
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            rippleEffect: {
                period: 15,
                scale: 4,
                brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#ffff',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            // data: this.mapDate
        }]
    }
}
onMounted(() => {
    initChart()
})
</script>

<style scoped></style>