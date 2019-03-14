<template>
  <el-card>
    <el-form :inline="true" :model="options" class="demo-form-inline">
      <el-form-item v-for="(item, index) in options.formData" :key="index" :label="item.label">
        <el-input
          v-if="item.type === 'input'"
          v-model="item.value"
          :placeholder="item.placeholder"
        />
        <el-select
          v-if="item.type === 'input'"
          v-model="item.value"
          :placeholder="item.placeholder"
          clearable
          @change="(val)=>item.change ? item.change(val) : change"
          @select="(val)=>item.select ? item.select(val) : select"
        >
          <el-option
            v-for="(item, index) in item.options"
            :key="index"
            :label="options.label"
            :value="options.value"
          />
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
  props: {
    options: { type: Object }
  },
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
    },
    change(item) {
      if (item.change) {
        return item.change;
      }
    },
    select(item) {
      if (item.select) {
        return item.select;
      }
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
}
</style>