<template>
  <el-container direction="vertical">
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">FILE lIST</div></el-col
      >
    </el-row>

    <el-table :data="tableData" title="FILE LSIT" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </el-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const res = await $axios.$get('/api/file/list')
    return { tableData: res.data }
  },

  data() {
    return {}
  },
}
</script>
