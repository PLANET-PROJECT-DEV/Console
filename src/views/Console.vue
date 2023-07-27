<template>
  <div class="common-layout" style="height: 500px">
    <el-container>
        <NavigationBar></NavigationBar>
      <el-container>
        <el-header>
        <ConsoleHeader></ConsoleHeader>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import NavigationBar from '@/components/NavigationBar'
import ConsoleHeader from '@/components/ConsoleHeader'
import $store from '@/store'
</script>

<style scoped>
.el-header{
  padding: 0;
}
</style>
