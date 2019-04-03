<template>
  <div id="bar_dv"
       ref="chart"
       class="bar_dv"
  >
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      // var bar_dv = document.getElementById('bar_dv');
      const bar_dv = this.$refs.chart;
      if (bar_dv) {
        console.log('bar_dv不为空');
        const myChart = this.$echarts.init(bar_dv)
        // 绘制图表 '火炉省会城市极端高温对比'
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            data: ['用户来源'],
          },
          xAxis: {
            data: ['Android', 'IOS', 'PC', 'Ohter'],
          },
          yAxis: {

          },
          series: [{
            name: '访问量',
            type: 'line', // 设置图表主题
            data: [10, 8, 5, 2],
            itemStyle: {
              normal: {
                color: 'blue',
                lineStyle: {
                  color: 'blue',
                },
              },
            },
          }],


        });
        console.log(`this.eventType:${this.eventType}`);
      } else {
        console.log('bar_dv为空!');
      }
    },
  },
}
</script>

<style scoped>
.bar_dv{width: 500px;height: 200px;}

</style>
