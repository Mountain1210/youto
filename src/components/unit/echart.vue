<template>
    <div>
        <div class="echars" id="myChart" :style="{width: '100%', height: '240px'}"></div>
    </div>
</template>
<script>
export default {
    name: "",
    data() {
        return {}
    },
    props: ['ArrayData', 'NumData', 'NameData','ArrayDataDetial'],
    mounted: function() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let myChart = this.$echarts.init(document.getElementById('myChart'));
            myChart.setOption({
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {
                            show: true
                        },
                        dataView: {
                            show: true,
                            readOnly: false
                        },
                        magicType: {
                            show: true,
                            type: ['line', 'bar']
                        },
                        restore: {
                            show: true
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                calculable: true,
                legend: {
                    data: this.ArrayData
                },
                xAxis: [{
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                }],
                yAxis: [{
                    type: 'value',
                    name: '水量',
                    axisLabel: {
                        formatter: '{value} ml'
                    }
                }, {
                    type: 'value',
                    name: '温度',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }],
                series:this.ArrayDataDetial
            });
            setTimeout(function() {
                myChart.resize()
            }, 50)
        }
    }
}
</script>
<style scoped>
</style>
