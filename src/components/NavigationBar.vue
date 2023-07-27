<template>
  <div class="common-layout" >
    <el-aside :width="isCollapse?'60px':'220px'">
      <el-col :span="24" >
        <el-menu
          active-text-color="#007aff"
          background-color="#fff"
          text-color="#000"
          default-active="/console/index"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
          style="border: none"
          :collapse= "isCollapse"
        >
          <br><br>
          <div class="l-content">
            <el-button @click="changeCollapse">
              <el-icon ><Fold></Fold></el-icon>
            </el-button>
          </div>
          <br>
          <el-menu-item index="/console/index" route="">
            <el-icon><icon-menu style="color:#007aff;  font-size: 30px"/></el-icon>
            <span style="font-size: 20px">&nbsp;&nbsp;首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页</span>
          </el-menu-item>
          <el-menu-item index="/console/management"  >
            <el-icon><document style="color:#007aff;  font-size: 30px"/></el-icon>
            <span style="font-size: 20px" >&nbsp;&nbsp;频&nbsp;&nbsp;道&nbsp;&nbsp;管&nbsp;&nbsp;理</span>
          </el-menu-item>
          <el-menu-item index="/console/setup">
            <el-icon><setting style="color:#007aff;  font-size: 30px"/></el-icon>
            <span style="font-size: 20px" >&nbsp;&nbsp;设&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;置</span>
          </el-menu-item>
          <el-sub-menu index="4">
            <template #title>
              <el-icon><location style="color:#007aff; font-size: 30px"/></el-icon>
              <span style="font-size: 20px">&nbsp;&nbsp;更&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;多</span>
            </template>
            <el-menu-item-group title="Group One" >
              <el-menu-item index="4-1">选项1</el-menu-item>
              <el-menu-item index="4-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="4-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="4-4">
              <template #title>选项4</template>
              <el-menu-item index="4-4-1">选项1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-aside>
  </div>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting, Fold
} from '@element-plus/icons-vue'

import { ref } from 'vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const isCollapse = ref(false)
function changeCollapse () {
  isCollapse.value = !isCollapse.value
  console.log(isCollapse.value)
  return isCollapse
}

</script>

<style scoped>
.el-menu-vertical-demo{
  height: 100vh;
}

</style>
