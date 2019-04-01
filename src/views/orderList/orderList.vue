<template>
  <div>
    <!-- 订单管理系统 -->
    <FormItem></FormItem>
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
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
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
        <el-button @click="dialogClose">取 消</el-button>
        <el-button type="primary" @click="dialogSure">确 定</el-button>
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
import FormItem from "../../common/formItem";
export default {
  name: "OrderList",
  components: {
    FormItem
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
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
      dialogFormData: {
        name: "",
        phone: "",
        address: "",
        style: '',
        status: ""
      },
      dialogFormDataEditor: {
        name: "",
        phone: "",
        address: "",
        style: '',
        status: ""
      }
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 订单处理
    orderProcess() {
      this.dialogOrderProce = true;
    },
    // 订单处理弹框确认
    dialogSure() {
      let params = {}
      
    },
    // 弹框取消
    dialogClose() {},
    // 订单编辑
    handleEdit() {
      this.dialogOrderEditor = true;
    },
    // 订单编辑确认事件
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
