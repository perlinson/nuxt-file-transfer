<template>
  <el-container>
    <el-row>
      <el-descriptions title="员工信息信息">
        <el-descriptions-item label="ID">{{
          $route.params.employeeId
        }}</el-descriptions-item>
        <el-descriptions-item label="岗位名称">{{
          $route.params.postName
        }}</el-descriptions-item>
      </el-descriptions>
    </el-row>
    <el-row>
      <ele-upload-image
        v-model="images"
        :file-size="5"
        :response-fn="handleResponse"
        :action="`http://localhost:8080/api/file/upload/${$route.params.employeeId}`"
        multiple
      ></ele-upload-image>
    </el-row>
  </el-container>
</template>

<script>
export default {
  props: {},
  async asyncData({ params, $axios }) {},
  data() {
    return {
      postUrl: '',
      images: [],
      options: [
        {
          value: '建造师',
          label: '建造师',
        },
        {
          value: '技术负责人',
          label: '技术负责人',
        },
        {
          value: '施工员',
          label: '施工员',
        },
        {
          value: '质量员',
          label: '质量员',
        },
        {
          value: '材料员',
          label: '材料员',
        },
      ],
      value1: [],
      value2: [],
    }
  },
  methods: {
    handleResponse(response, file, fileList) {
      this.$message({
        message: file.url,
        type: 'info',
      })
      return file.url
    },
    createEmployee() {},
  },
}
</script>
<style scoped></style>
