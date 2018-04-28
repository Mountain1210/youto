<template>
<div id="subrightContent" class="companyinfo mainContent">

	{{currentUrl}}
	 <el-table
    :data="tableData"
    stripe
    align="left"
    style="width:auto">
    <el-table-column
      prop="number"
      fixed
      label="序号"
      width="60">
    </el-table-column>
    <el-table-column
      prop="gsjc"
      fixed
      label="公司简称"
    >
    </el-table-column>
    <el-table-column
      prop="zczb"
      label="注册资本(万)">
    </el-table-column>
    <el-table-column
      prop="sjbs"
      label="实缴比例">
    </el-table-column>
    <el-table-column
      prop="glgm"
      label="管理规模">
    </el-table-column>
    <el-table-column
      prop="ygrs"
      label="员工人数">
    </el-table-column>
    <el-table-column
      prop="jzrq"
      label="截至日期">
    </el-table-column>
    <el-table-column
      prop="clrq"
      label="成立日期">
    </el-table-column>
    <el-table-column
      prop="djrq"
      label="登记日期">
    </el-table-column>
    <el-table-column
      prop="ishy"
      label="是否会员">
    </el-table-column>
    <el-table-column
      prop="pronum"
      label="产品数量">
    </el-table-column>
    <el-table-column
      prop="cominfo"
      label="公司介绍">
    </el-table-column>
    <el-table-column
      prop="jljl"
      label="尽量记录">
    </el-table-column>
    <el-table-column
      prop="address"
      label="办公地址">
    </el-table-column>
    <el-table-column
      prop="operat"
      label="操作">
    </el-table-column>

  </el-table>
</div>
</template>
<style rel="stylesheet">
.companyinfo{background-color: #fff; color: #000}
</style>
<script scoped type="ecmascript-6">
export default{
    name:"Urltabview"
	,data(){
			return{
			currentUrl:"这里是Urltabview是用tab跳转过来的",
			tableData: [{
        number:"1"
        ,gsjc:"中天嘉禾"
        ,zczb:"10000"
        ,sjbs:"100"
        ,glgm:"4"
        ,ygrs:"201812"
        ,jzrq:"2018-1-1"
        ,clrq:"是"
        ,djrq:"110"
        ,ishy:"是"
        ,pronum:"13"
        ,cominfo:"我要理财我要理财我要理财我要理财"
        ,jljl:"三元桥三元桥三元桥三元桥"
        ,address:"三元桥三元桥三元桥三元桥"
        ,operat1:"这是操作"
        ,operat2:"这是操作2"
        }]
			}

		}
	,beforeCreate:function(){

	}
	,methods: {
	  methodName () {
	    
	  }
	}
}
</script>