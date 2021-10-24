<template>
  <el-container direction="vertical">
    <el-row>
      <el-col :span="2">人员列表</el-col>
      <el-col :span="2">
        <el-button>新增人员</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" title="FILE LSIT" style="width: 100%">
      <el-table-column prop="file_mimetype" label="类型" width="180">
      </el-table-column>
      <el-table-column prop="file_path" label="路径"> </el-table-column>
      <el-table-column align="center" label="操作" fixed="right" width="300">
        <template slot-scope="scope">
          <router-link :to="'/performance/edit/' + scope.row._id">
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
    const res = await $axios.$get('/api/file/list')
    console.log(res.data)
    return { tableData: res.data }
  },

  data() {
    return {
      uploadImages: [],
    }
  },
  methods: {
    handleImages(files) {
      this.uploadImages = [...files]
      /*
        [
          {
              "name": "Screenshot from 2021-02-23 12-36-33.png",
              "size": 319775,
              "type": "image/png",
              "lastModified": 1614080193596
              ...
          },
          ...
          ]
        */
    },
  },
}
</script>
