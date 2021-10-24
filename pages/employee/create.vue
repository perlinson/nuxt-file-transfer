<template>
  <div>
    <!-- 在使用表单验证时，需要注意：
    1.必须给表单对象绑定一个对象：:model="employee"，而且不能写成：v-model="employeeForm"
    2.所有的子控件的绑定对象必须是表单对象的内部对象，比如：v-model="employeeForm.username"，否则总是验证失败
     -->
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
      <el-form-item>
        <el-button class="login-button" type="primary" @click="createEmployee"
          >创建</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employee: {
        name: '',
        id_number: '',
        sex: '',
        age: '',
      },
    }
  },

  methods: {
    getName(iden) {
      const val = iden.length
      let sex = null
      const myDate = new Date()
      const month = myDate.getMonth() + 1
      const day = myDate.getDate()
      let age = 0

      if (val === 18) {
        age = myDate.getFullYear() - iden.substring(6, 10) - 1
        sex = iden.substring(16, 17)
        if (
          iden.substring(10, 12) < month ||
          (iden.substring(10, 12) === month && iden.substring(12, 14) <= day)
        )
          age++
      }
      if (val === 15) {
        age = myDate.getFullYear() - iden.substring(6, 8) - 1901
        sex = iden.substring(13, 14)
        if (
          iden.substring(8, 10) < month ||
          (iden.substring(8, 10) === month && iden.substring(10, 12) <= day)
        )
          age++
      }

      if (sex % 2 === 0) sex = 1
      else sex = 0
      this.employee.sex = sex
      this.employee.age = age
    },
    async createEmployee() {
      try {
        await this.$axios.$post('/api/employee/', this.employee).then((res) => {
          this.$message({
            message: 'Created Success',
            type: 'success',
          })
          this.$router.push(`/employee/${res._id}/update`)
        })
      } catch (err) {
        this.$message({
          message: 'Created Failed',
          type: 'error',
        })
      }
    },
  },
}
</script>
<style scoped></style>
