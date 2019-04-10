<template>
  <el-card>
    <el-form :inline="true" :model="options" class="demo-form-inline">
      <el-form-item v-for="(item, index) in options.formData" :key="index" :label="item.label">
        <el-input
          v-if="item.type === 'input'"
          v-model="item.value"
          :class="item.class"
          clearable
          @clear="clear(item)"
          @change="change(item)"
          :placeholder="item.placeholder"
        />
        <el-select
          v-if="item.type === 'select'"
          v-model="item.value"
          :placeholder="item.placeholder"
          clearable
          @visible-change="(val) => visibleChange(item)"
          @change="(val)=>item.change ? item.change(val) : change"
          @select="(val)=>item.select ? item.select(val) : select"
          @clear="clear(item)"
        >
          <el-option
            v-for="option in item.options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-row>
      <el-col :span="24">
        <el-button
          v-for="button in options.buttons"
          :key="button.label"
          :type="button.type"
          size="mini"
          @click="clearFrom(button)"
        >{{ button.label }}</el-button>
      </el-col>
    </el-row>
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
        item.change(item.value);
      }
    },
    select(item) {
      if (item.select) {
        item.select(item.value);
      }
    },
    clear(item) {
      if (item.clear) {
        item.clear(item.value);
      }
    },
    clearFrom(item) {
      if (item.clearFrom) {
        let formData = this.options.formData;
        for (let index = 0; index < formData.length; index++) {
          formData[index].value = "";
        }
      }
      item.click(item.value);
    },
    visibleChange(item) {
      if (item.visibleChange) {
        return item.visibleChange(item.value);
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
.el-button {
  float: right;
  margin-right: 15px;
}
</style>