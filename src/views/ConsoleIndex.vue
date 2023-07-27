<template>
<div>
  <el-row class="index" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="icon('icon')" alt="" class="icon">
          <div class="userInfo">
            <p class="name">PlanetName</p>
            <p class="role">Master</p>
            <p class="">星球坐标: 24.27.77</p>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-card shadow="hover" class="channelCard">
      <el-col :span="25" style="margin-top: 10px">
        <ChannelCard></ChannelCard>
      </el-col>
    </el-card>
  </el-row>
</div>
</template>

<script setup lang="ts">
import ChannelCard from '@/components/ChannelCard.vue'

const icon = (icon:string) => {
  return `/static/icon/${icon}.jpg`
}
</script>

<style scoped lang="less">
.index{
  .user{
    display: flex;
    align-items: center;
    img{
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
  }
}
.channelCard{
  height: 190px;
  width: 680px;
  position: relative;
  top: 20px;
}
</style>
