<template>
  
  <el-form
    ref="employeeForm"
    :model="employee"
    class="container"
    label-position="left"
  >
    <el-form-item label="姓名" prop="name">
      <el-input v-model="employee.name" placeholder="请输入姓名"></el-input>
    </el-form-item>
    <el-form-item label="身份证号" prop="id_number">
      <el-input
        v-model="employee.id_number"
        placeholder="请输入身份证号"
        @blur="getName(employee.id_number)"
      ></el-input>
    </el-form-item>

    <el-form-item label="性别" prop="sex">
      <el-radio-group v-model="employee.sex" disabled="disabled">
        <el-radio :label="0">男</el-radio>
        <el-radio :label="1">女</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="年龄" prop="age">
      <el-input
        v-model="employee.age"
        placeholder="年龄"
        disabled="disabled"
      ></el-input>
    </el-form-item>
    <el-form-item prop="posts">
      <ele-upload-image
        v-model="images"
        :file-size="5"
        :response-fn="handleResponse"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76/"
        multiple
      ></ele-upload-image>
    </el-form-item>
    <el-form-item>
      <el-button class="login-button" type="primary" @click="createEmployee"
        >创建</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {},
  async asyncData({ params, $axios }) {
    const employee = await $axios.$get(`/api/employee/${params.id}`)
    return { employee }
  },
  data() {
    return {
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
    handleResponse() {},
    createEmployee() {
      
    },
  },
}
</script>
<style scoped></style>
