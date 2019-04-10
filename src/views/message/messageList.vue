<template>
  <div>
    <!-- 订单管理系统 -->
    <FormItem :options="options"></FormItem>
    <el-card>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="status" label="会员等级"></el-table-column>
        <el-table-column label="操作" fixed="right">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              plain
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
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
      pageSize: 10,
      currentPage: 1,
      dialogOrderProce: false, // 订单处理弹框
      dialogOrderEditor: false, // 订单编辑弹框
      tableData: [
        {
          id: "1",
          date: "2016-05-02",
          name: "王小虎",
          phone: "12344",
          address: "上海市普陀区金沙江路 1518 弄",
          status: "V1"
        },
        {
          id: "2",
          date: "2016-05-04",
          phone: "12344",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          status: "V2"
        },
        {
          id: "3",
          date: "2016-05-01",
          phone: "12344",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          status: "V3"
        },
        {
          id: "4",
          date: "2016-05-03",
          phone: "12344",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          status: "V4"
        }
      ],
      searchFormData: {
        name: "",
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
