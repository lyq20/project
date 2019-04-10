<template>
  <div>
    <!-- 订单管理系统 -->
    <FormItem :options="options"></FormItem>
    <el-card>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="status" label="订单状态"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" plain @click="orderProcess(scope.row.id)">订单处理</el-button>
            <el-button
              size="mini"
              type="primary"
              plain
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              plain
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block" text-align="right">
        <el-pagination
          :current-page="currentPage"
          :page-sizes="[10, 20, 50]"
          :page-size="pageSize"
          :total="50"
          background
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </el-card>
    <el-dialog title="订单处理" :visible.sync="dialogOrderProce" width="35%">
      <el-form :model="dialogFormData">
        <el-form-item label="客户姓名" label-width="80px">
          <el-input v-model="dialogFormData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="订单类型" label-width="80px">
          <el-input v-model="dialogFormData.style" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" label-width="80px" :disabled="true">
          <el-input v-model="dialogFormData.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="订单状态" label-width="80px">
          <el-select v-model="dialogFormData.status" placeholder="请选择状态">
            <el-option label="未接单" value="1"></el-option>
            <el-option label="处理中" value="2"></el-option>
            <el-option label="已完成" value="3"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="orderClose">取 消</el-button>
        <el-button type="primary" @click="orderSure">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="订单编辑" :visible.sync="dialogOrderEditor" width="35%">
      <el-form :model="dialogFormDataEditor" class="editor">
        <el-form-item label="客户姓名" label-width="80px">
          <el-input v-model="dialogFormDataEditor.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" label-width="80px">
          <el-input v-model="dialogFormDataEditor.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="订单类型" label-width="80px">
          <el-select v-model="dialogFormDataEditor.style" placeholder="请选择订单类型">
            <el-option label="红烧排骨" value="paigu"></el-option>
            <el-option label="葱爆羊肉" value="yangrou"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="详细地址" label-width="80px">
          <el-input v-model="dialogFormDataEditor.address" autocomplete="off"></el-input>
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
import FormItem from "../../common/formItem.vue";
export default {
  name: "OrderList",
  components: {
    FormItem
  },
  data() {
    return {
      options: {},
      pageSize: 10,
      currentPage: 1,
      dialogOrderProce: false, // 订单处理弹框
      dialogOrderEditor: false, // 订单编辑弹框
      tableData: [
        {
          id: "1",
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          status: "处理中"
        },
        {
          id: "2",
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          status: "未处理"
        },
        {
          id: "3",
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          status: "已完成"
        },
        {
          id: "4",
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          status: "已完成"
        }
      ],
      searchFormData: {
        name: "",
        status: ""
      },
      dialogFormData: {
        name: "",
        phone: "",
        address: "",
        style: "",
        status: ""
      },
      dialogFormDataEditor: {
        name: "",
        phone: "",
        address: "",
        style: "",
        status: ""
      }
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
            this.resetSearch();
          }
        },
        {
          label: "查询",
          type: "primary",
          click: () => {
            this.getListFun();
          }
        }
      ],
      formData: [
        {
          type: "input",
          label: "姓名",
          placeholder: "请输入姓名",
          value: this.searchFormData.name,
          change: val => {
            this.searchFormData.proper = val;
            console.log("change", val, this.searchFormData.proper);
          }
        },
        {
          type: "select",
          label: "订单状态",
          placeholder: "请选择订单状态",
          value: this.searchFormData.status,
          options: [
            {
              value: "1",
              label: "未接单"
            },
            {
              value: "2",
              label: "处理中"
            },
            {
              value: "3",
              label: "已完成"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    console.log("页面刚进来时会执行");
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    // 查询事件
    getListFun() {
      console.log("查询");
    },
    // 重置按钮
    resetSearch() {
      console.log("重置");
    },
    // 订单处理按钮
    orderProcess() {
      this.dialogOrderProce = true;
    },
    // 订单处理弹框确认
    dialogSure() {
      let params = {};
      this.dialogOrderProce = false;
    },
    // 订单处理弹框取消
    dialogClose() {
      this.dialogOrderProce = false;
    },
    // 订单编辑按钮
    handleEdit() {
      this.dialogOrderEditor = true;
    },
    // 订单编辑确认事件
    orderSure() {
      this.dialogOrderEditor = true;
    },
    // 订单编辑弹框内取消事件
    orderClose() {
      this.dialogOrderEditor = false;
    },
    // 删除
    handleDelete(index) {
      console.log(index);
    }
  }
};
</script>
<style lang="scss" scoped>
.el-form-item {
  /deep/ .el-form-item__label {
    text-align: left;
  }
  .el-select {
    width: 100%;
  }
}
/deep/ .el-dialog__body {
  padding: 30px 30px 15px;
}
/deep/ .el-dialog__footer {
  padding: 0 30px 20px;
}
</style>
