<template>
  <el-card>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-form>
      <el-form-item style="float: right">
        <el-button style="float: right; margin-left: 10px;" @click="onSubmit">重置</el-button>
        <el-button style="float: right" type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style lang="scss" scoped>
.el-card {
  margin-bottom: 15px;
}
/deep/ .el-form-item .el-form-item__label {
  display: block;
  text-align: left;
  /* width: 30%; */
}
.el-form-item {
  width: 25%;
  padding-right: 3%;
  /deep/.el-form-item__content {
    width: 100%;
    /deep/.el-select {
      width: 100%;
    }
  }
}
</style>