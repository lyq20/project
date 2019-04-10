<template>
  <el-container style="height: 100%;">
    <el-aside width="200px" height="100%" style="background-color: #011f46">
      <el-col :span="24">
        <h3>欢迎光临本餐厅</h3>
        <el-menu
          router
          :default-active="$router.path"
          class="el-menu-vertical-demo"
          background-color="#011f46"
          :unique-opened="true"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- @open="handleOpen"
          @close="handleClose"-->
          <el-menu-item index="/home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/orderList">
            <i class="el-icon-location"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="/menuList">
            <i class="el-icon-message"></i>
            <span slot="title">菜单管理</span>
          </el-menu-item>
          <!-- <el-menu-item index="/typeList">
            <i class="el-icon-setting"></i>
            <span slot="title">类别管理</span>
          </el-menu-item>-->
          <el-menu-item index="/member">
            <i class="el-icon-printer"></i>
            <span slot="title">会员管理</span>
          </el-menu-item>
          <el-menu-item index="/message">
            <i class="el-icon-news"></i>
            <span slot="title">留言管理</span>
          </el-menu-item>
          <el-menu-item index="/admin">
            <i class="el-icon-service"></i>
            <span slot="title">管理员管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 16px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看个人信息</el-dropdown-item>
            <el-dropdown-item @click="loginOut()">退出账户</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span @mousedown="(e)=>down(e)">系统管理员</span>
        <span @click="loginOut()">退出</span>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "Home",
  methods: {
    down(e) {
      console.log(e.target);
    },
    loginOut() {
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#about {
  width: 100%;
  height: 100%;
}
h3 {
  color: #fff;
  height: 56px;
  font-size: 18px;
  padding: 0 20px;
  line-height: 56px;
}
.el-header {
  background-color: #fff;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  i {
    font-size: 16px;
    color: #000 !important;
  }
  span {
    display: inline-block;
    text-align: right;
    width: 80px;
    cursor: pointer;
  }
  span:hover {
    color: #a5ccf4;
  }
}
/deep/ .el-menu {
  background: #011f46;
  border-color: #011f46;
}
.el-main {
  background: #eee;
  padding: 10px;
  width: 100%;
  height: 100%;
}
.el-menu-item,
/deep/.el-submenu__title {
  color: white;
}
i {
  color: white !important;
}
.el-aside {
  height: 100%;
  color: #333;
  overflow: visible;
}
</style>

