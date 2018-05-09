<style scoped>
#searchContent {overflow:hidden; float:left; padding:2px 0}
#searchContent input,#searchContent button{border:none; padding:2px 4px; margin:3px 3px 3px 0}

#searchContent  .searchinput{border:1px solid #ccc; margin-top:-2px}
#searchContent button{background-color:rgba(79, 159, 222, 1); color:#fff}

#searchContent .ct{float:left; color:#000}
#searchContent .titxt{margin-right:8px; padding-top:2px}
</style>

<template>
    <div id="searchContent">
    <!-- <p class="ct titxt">关键字:</p>
    <p class="ct searchinput"><input type="text" name="" value="" placeholder="搜索的内容"><button type="button">搜索</button></p> -->
<!--     <el-autocomplete
      class="inline-input"
      size="small"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete> -->

    <!-- <el-input placeholder="请输入内容上" v-model="input5" class="input-with-select" size="small"> -->
<!--         <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select> -->
        <el-autocomplete
              class="inline-input"
              size="small"
              v-model="state2"
              :fetch-suggestions="querySearch"
              placeholder="请输入内容下"
              :trigger-on-focus="false"
              @select="handleSelect"
            >
            <el-button slot="append" round="true">搜索</el-button>
        <!--     <el-button type="primary" slot="append">搜索</el-button> -->
      <!--       <el-button slot="append" type="button" size="medium">搜索</el-button> -->
       </el-autocomplete>
        
      <!-- </el-input> -->
</div>
</template>

<script>


</script>

