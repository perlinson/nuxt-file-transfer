<template>
  <el-container direction="vertical">
    <el-row>
      <el-col :span="2">人员列表</el-col>
      <el-col :span="2">
        <router-link to="/employee/create">
          <el-button>新增人员</el-button>
        </router-link>
      </el-col>
    </el-row>
    <el-table :data="employees" title="FILE LSIT" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="id_number" label="身份证号"> </el-table-column>
      <el-table-column align="center" label="操作" fixed="right" width="300">
        <template slot-scope="{ row }">
          <router-link :to="`/employee/${row._id}/update`">
            <el-button type="primary" size="mini" icon="el-icon-edit"
              >编辑</el-button
            >
          </router-link>
          <el-button type="primary" size="mini" icon="el-icon-view"
            >预览</el-button
          >
          <el-button type="danger" icon="el-icon-delete" size="mini"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const employees = await $axios
      .$get('/api/employee/')
    return { employees }
  },

  data() {
    return {
      uploadImages: [],
    }
  },
  methods: {
    handleImages(files) {
      this.uploadImages = [...files]
    },
  },
}
</script>
