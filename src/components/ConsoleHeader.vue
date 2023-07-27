<template>
  <el-header>
    <div>
      <div class="r-content">
        <h3  class="planetText">PlanetConsole</h3>
        <br><br><br><br>
        <el-dropdown class="dropdown">
        <span class="el-dropdown-link">
          <img :src="icon('icon')" alt="" class="icon">
        </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="Plus">个人中心</el-dropdown-item>
              <el-dropdown-item :icon="CirclePlusFilled">切换账号</el-dropdown-item>
              <el-dropdown-item :icon="CirclePlus">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </el-header>
</template>

<script setup lang="ts">
const icon = (icon:string) => {
  return `/static/icon/${icon}.jpg`
}
</script>

<style scoped lang="less">
header {
  padding: 0 40px;
  background-color: #ffffff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.r-content {
  .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.dropdown{
  position: relative;
  left: 1150px;
}
.planetText{
  font-size: 40px;
  color: #007aff;
  position: fixed;
}
</style>
