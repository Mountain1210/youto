<template>
  <el-table
    :data="tableData3"
    size="small"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="Name"
      label=""
      fixed
      width="180">
    </el-table-column>
    <el-table-column
      prop="diffname"
      label="沪深300"
      align="center"
      width="180">
    </el-table-column>
    <el-table-column
      prop="dfar1"
      align="center"
      label="234"
      width="180"
      >
    </el-table-column>
      <el-table-column
      prop="dfar2"
      align="center"
      label="123"
      width="180"
      >
    </el-table-column>
      <el-table-column
      prop="dfar3"
      align="center"
      label="345"
      width="180"
      >
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
          Name: '累计收益',
          diffname: '---',
          dfar1: '---',
          dfar2: '---',
          dfar3: '---'
        }, {
          Name: '年化收益',
          diffname: '---',
          dfar1: '---',
          dfar2: '---',
          dfar3: '---'
        }, {
          Name: '年化波动率',
          diffname: '---',
          dfar1: '---',
          dfar2: '---',
          dfar3: '---'
        }, {
          Name: 'Sharpe比率',
          diffname: '---',
          dfar1: '---',
          dfar2: '---',
          dfar3: '---'
        }, {
          Name: 'Calmar比率',
          diffname: '---',
          dfar1: '---',
          dfar2: '---',
          dfar3: '---'
        }, {
          Name: '信息比率',
          diffname: '---',
          dfar1: '---',
          dfar2: '---',
          dfar3: '---'
        }, {
          Name: 'Alpha',
          diffname: '---',
          dfar1: '---'
        }, {
          Name: 'Beta',
          diffname: '---',
          dfar1: '---',
          dfar2: '---',
          dfar3: '---'
        }, {
          Name: '与沪深300指数相关系数',
          diffname: '---',
          dfar1: '---',
          dfar2: '---',
          dfar3: '---'
        }, {
          Name: '最大回撤',
          diffname: '---',
          dfar1: '---',
          dfar2: '---',
          dfar3: '---'
        }, {
          Name: '最大回撤回补期(天)',
          diffname: '---',
          dfar1: '---',
          dfar2: '---',
          dfar3: '---'
        }, {
          Name: 'VaR（95%置信度）',
          diffname: '---',
          dfar1: '---',
          dfar2: '---',
          dfar3: '---'
        }, {
          Name: '投资胜率',
          diffname: '---',
          dfar1: '---',
          dfar2: '---',
          dfar3: '---'
        }, {
          Name: '平均损益比',
          diffname: '---',
          dfar1: '---',
          dfar2: '---',
          dfar3: '---'
        }]
      }
    }
  }
</script>