<template>
<ul class="searchlist">
<li>
    <span class="demonstration">成立时间:</span>
    <el-date-picker
      v-model="value0"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
</li>
<li>
<span class="demonstration">投资策略:</span>
  <el-select v-model="value1" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</li>
<li>
<span class="demonstration">通道类型:</span>
<el-select v-model="value2" placeholder="请选择">
    <el-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</li>
<li>
<span class="demonstration">存续周期:</span>
<el-select v-model="value3" placeholder="请选择">
    <el-option
      v-for="item in options3"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</li>
<li>
<span class="demonstration">净值更新频率:</span>
<el-radio-group v-model="radio3">
      <el-radio-button label="日"></el-radio-button>
      <el-radio-button label="周"></el-radio-button>
      <el-radio-button label="月"></el-radio-button>
    </el-radio-group>
</li>

<li>
<span class="demonstration">统计指标:</span>
<div class="tjzb" style="width:80px; display:inline-block">
<el-select v-model="value4" placeholder="请选择">
    <el-option
      v-for="item in options4"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
  <div class="tjzb" style="width:70px; display:inline-block; margin-left:20px">
<el-input
  placeholder="请输入内容"
  v-model="input10"
  clearable>
</el-input>
  </div>
  <div class="tjzb" style="width:70px; display:inline-block; margin-left:5px">
<el-input
  placeholder="请输入内容"
  v-model="input10"
  clearable>
</el-input>
  </div>
</li>
<li>
<span class="demonstration">　　　　</span>
<div class="tjzb" style="width:80px; display:inline-block">
<el-select v-model="value5" placeholder="请选择">
    <el-option
      v-for="item in options4"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
  <div class="tjzb" style="width:70px; display:inline-block; margin-left:20px">
<el-input
  placeholder="请输入内容"
  v-model="input10"
  clearable>
</el-input>
  </div>
  <div class="tjzb" style="width:70px; display:inline-block; margin-left:5px">
<el-input
  placeholder="请输入内容"
  v-model="input10"
  clearable>
</el-input>
  </div>
</li>
<li>
<span class="demonstration">　　　　</span>
<div class="tjzb" style="width:80px; display:inline-block">
<el-select v-model="value6" placeholder="请选择">
    <el-option
      v-for="item in options4"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
  <div class="tjzb" style="width:70px; display:inline-block; margin-left:20px">
<el-input
  placeholder="请输入内容"
  v-model="input10"
  clearable>
</el-input>
  </div>
  <div class="tjzb" style="width:70px; display:inline-block; margin-left:5px">
<el-input
  placeholder="请输入内容"
  v-model="input10"
  clearable>
</el-input>
  </div>
</li>
<li>
<span class="demonstration">　　　　</span>
<div class="tjzb" style="width:80px; display:inline-block">
<el-select v-model="value7" placeholder="请选择">
    <el-option
      v-for="item in options4"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
  <div class="tjzb" style="width:70px; display:inline-block; margin-left:20px">
<el-input
  placeholder="请输入内容"
  v-model="input10"
  clearable>
</el-input>
  </div>
  <div class="tjzb" style="width:70px; display:inline-block; margin-left:5px">
<el-input
  placeholder="请输入内容"
  v-model="input10"
  clearable>
</el-input>
  </div>
</li>

<li style="padding:24px 0 0 105px"><el-button type="primary">主要按钮</el-button>  <el-button type="info">信息按钮</el-button></li>
</ul>


</template>

<script>
  export default {
  name: 'Gjjs',
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
         options: [{
          value: '选项1',
          label: '股票策略'
        }, {
          value: '选项2',
          label: '固定收益'
        }, {
          value: '选项3',
          label: '管理期货'
        }, {
          value: '选项4',
          label: '事件驱动'
        }, {
          value: '选项5',
          label: '相对价值'
        }, {
          value: '选项6',
          label: '宏观策略'
        }, {
          value: '选项7',
          label: '复合策略'
        }],
        options2: [{
          value: '选项1',
          label: '公募专户'
        }, {
          value: '选项2',
          label: '自主发行'
        }, {
          value: '选项3',
          label: '信托'
        }, {
          value: '选项4',
          label: '券商资管'
        }, {
          value: '选项5',
          label: '其它'
        }, {
          value: '选项6',
          label: '期货专户'
        }, {
          value: '选项7',
          label: '海外基金'
        }],
         options3: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '半年以上'
        }, {
          value: '选项3',
          label: '一年以上'
        }, {
          value: '选项4',
          label: '二年以上'
        }, {
          value: '选项5',
          label: '三年以上'
        }],
        options4: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '区间收益率(最近半年)'
        }, {
          value: '选项3',
          label: '区间收益率(最近一年)'
        }, {
          value: '选项4',
          label: '年化波动率'
        }, {
          value: '选项5',
          label: '年化波动率(最近半年)'
        },
         {
          value: '选项6',
          label: '区间收益率(最近一年)'
        }, {
          value: '选项7',
          label: '最大回撤'
        }, {
          value: '选项8',
          label: '最大回撤(最近半年)'
        }, {
          value: '选项9',
          label: '最大回撤(最近一年)'
        },{
          value: '选项10',
          label: '夏普比率'
        }, {
          value: '选项11',
          label: '斯图泽比率'
        }, {
          value: '选项12',
          label: '索提诺比率'
        }, {
          value: '选项13',
          label: 'Alpha比率'
        }, {
          value: '选项14',
          label: 'Beta比率'
        },
         {
          value: '选项15',
          label: '信息比率'
        }, {
          value: '选项16',
          label: '特雷诺比率'
        }, {
          value: '选项17',
          label: '偏度比率'
        }, {
          value: '选项18',
          label: '峰度比率'
        }, {
          value: '选项19',
          label: 'VAR5'
        }, {
          value: '选项20',
          label: 'CVAR5'
        }],
        value0: '',
        value1:'',
        value2:''
        ,value3:''
        ,value4:''
        ,value5:''
        ,value6:''
        ,value7:''
        ,radio3: '日'
        ,input10: ''

      };
    }
  };
</script>


<style scoped>
.demonstration{font-size:14px}
.slidemain .el-date-editor--datetimerange.el-input__inner,.slidemain .el-select{width:250px}
.searchlist li{margin-bottom:8px}
ul.slidemain .el-date-editor .el-range-input{font-size:12px}
.demonstration{display:inline-block; width:100px; text-align:right}
.slidemain .tjzb .el-select{width:100px} 
.slidemain .tjzb .el-select input{width:30px}
</style>
