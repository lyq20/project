<template>
  <div>
    <!-- 菜单管理系统 -->
    <FormItem :options="options"></FormItem>
    <el-card>
      <el-button class="cardBtn" type="primary" @click="addMenu()" size="mini">添加菜单</el-button>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </el-card>
    <el-dialog title="添加菜单" :visible.sync="addMenuDialog" width="35%">
      <el-form :model="dialogFormData">
        <el-form-item label="菜单名称" label-width="80px">
          <el-input v-model="dialogFormData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="菜单类型" label-width="80px">
          <el-input v-model="dialogFormData.style" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="详细介绍" label-width="80px" :disabled="true">
          <el-input v-model="dialogFormData.detail" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片" label-width="80px" :disabled="true">
          <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false"
          >
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button
              style="margin-left: 10px;"
              size="small"
              type="success"
              @click="submitUpload"
            >开始上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogClose">取 消</el-button>
        <el-button type="primary" @click="dialogSure">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import FormItem from "../../common/formItem";
export default {
  name: "MenuList",
  components: {
    FormItem
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      options: {},
      searchFormData: {
        proper: ""
      },
      fileList: [],
      dialogFormData: {
        name: "",
        detail: "",
        address: "",
        style: "",
        status: ""
      },
      actions: "https://jsonplaceholder.typicode.com/posts/", // 上传的地址
      addMenuDialog: false
    };
  },
  created() {
    this.options = {
      buttons: [
        {
          label: "重置",
          type: "primary",
          clearForm: true,
          click: () => {
            console.log("重置");
          }
        },
        {
          label: "查询",
          type: "primary",
          click: () => {
            console.log("查询");
          }
        }
      ],
      formData: [
        {
          type: "input",
          label: "菜单名称",
          placeholder: "请选择菜单名称",
          value: this.searchFormData.proper,
          change: val => {
            this.searchFormData.proper = val;
            console.log("change", val, this.searchFormData.proper);
          }
        }
      ]
    };
  },
  methods: {
    // 添加菜单按钮
    addMenu() {
      this.addMenuDialog = true;
    },
    // 添加菜单弹框确认
    dialogSure() {
      this.addMenuDialog = false;
    },
    // 添加菜单弹框取消
    dialogClose() {
      this.addMenuDialog = false;
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>
<style lang="scss" scoped>
.cardBtn {
  float: right;
}
</style>

