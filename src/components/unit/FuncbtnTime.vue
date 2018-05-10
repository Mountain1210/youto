<template>
<el-button-group >
  <el-button type="primary" size="small">默认</el-button>
  <el-button type="primary" size="small">周频</el-button>
  <el-button type="primary" size="small">月频</el-button>
</el-button-group>
</template>
<script>
export default{
    name:"FuncbtnTime"
	,data(){
		return {
			
		}
	}
}
</script>

<style scoped>
.el-button-group{float: left; margin-top:1px; margin-left:8px;}
</style>