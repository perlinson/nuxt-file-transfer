<template>
  <el-container direction="vertical">
    <el-descriptions title="员工信息信息">
      <el-descriptions-item label="姓名">{{
        employee.name
      }}</el-descriptions-item>
      <el-descriptions-item label="身份证号">{{
        employee.id_number
      }}</el-descriptions-item>
      <el-descriptions-item label="年龄">{{
        employee.age
      }}</el-descriptions-item>
    </el-descriptions>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>岗位创建</span>
        <el-divider></el-divider>
        <el-row>
          <el-col :span="2">
            <span>岗位名称</span>
          </el-col>
          <el-col :span="6">
            <el-cascader
              v-model="value"
              :options="options"
              :props="{ expandTrigger: 'hover' }"
              style="width: 100%"
              @change="handleChange"
            >
            </el-cascader>
          </el-col>
          <el-col :span="4" :offset="4">
            <el-button class="login-button" type="primary">保存</el-button>
          </el-col>
        </el-row>
      </div>
      <div v-for="o in value" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
    </el-card>
    <el-divider></el-divider>
    <el-button class="login-button" type="primary">保存</el-button>
    <el-divider></el-divider>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="content" label="证号" width="180">
      </el-table-column>
      <el-table-column align="center" label="操作" fixed="right" width="300">
        <template slot-scope="{ row }">
          <router-link
            :to="`/employee/${$route.params.employeeId}/${row.name}/`"
          >
            <el-button type="primary" size="mini" icon="el-icon-upload"
              >上传图片</el-button
            >
          </router-link>
          <el-button type="danger" icon="el-icon-delete" size="mini"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>

<script>
import { POST_OPTIONS } from '@/constants'
export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  async asyncData({ params, $axios }) {
    const data = await $axios.$get('/api/employee/' + params.employeeId)
    return { employee: data }
  },
  data() {
    return {
      tableData: [
        {
          name: '土建质量员',
          content: '4217245646456456',
        },
        {
          name: '市政施工质量员',
          content: '4217245646456456',
        },
        {
          name: '质量员',
          content: '4217245646456456',
        },
        {
          name: '质量员',
          content: '4217245646456456',
        },
      ],
      value: [],
      options: POST_OPTIONS,
    }
  },

  methods: {
    handleChange() {},
    submitClick(formName) {},
  },
}
</script>
<style scoped></style>
