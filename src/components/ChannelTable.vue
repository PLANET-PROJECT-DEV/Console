<template>
  <el-table-v2
    :columns="columns"
    :data="data"
    :row-class="rowClass"
    :width="1100"
    :height="600"
    style="top: 37px"
  />
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import {
  ElButton,
  ElIcon,
  ElTag,
  ElTooltip,
  TableV2FixedDir
} from 'element-plus'

import type { Column, RowClassNameGetter } from 'element-plus'

let id = 0

const dataGenerator = () => ({
  id: `random-id-${++id}`,
  name: '普通频道',
  planet: '频道一'
})

const columns: Column[] = [
  {
    key: 'planet',
    title: 'Planet',
    dataKey: 'planet',
    width: 450,
    fixed: TableV2FixedDir.LEFT,
    cellRenderer: ({ cellData: planet }) => (
      <span>{planet}</span>
    )
  },
  {
    key: 'name',
    title: 'Type',
    dataKey: 'name',
    width: 350,
    align: 'center',
    cellRenderer: ({ cellData: name }) => <ElTag>{name}</ElTag>
  },
  {
    key: 'operations',
    title: 'Operations',
    cellRenderer: () => (
      <>
        <ElButton size="small">编辑</ElButton>
        <ElButton size="small" type="danger">
          删除
        </ElButton>
      </>
    ),
    width: 250,
    align: 'center',
    flexGrow: 1
  }
]

const data = ref(Array.from({ length: 10 }).map(dataGenerator))

const rowClass = ({ rowIndex }: Parameters<RowClassNameGetter<any>>[0]) => {
  if (rowIndex === 5) {
    return 'bg-red-100'
  } else if (rowIndex === 3) {
    return 'bg-blue-200'
  }
  return ''
}
</script>
