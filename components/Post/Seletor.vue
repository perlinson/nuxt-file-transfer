<template>
  <el-container id="container">
    <el-select v-model="value1" style="width: 100%" multiple placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </el-container>
</template>


<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '建造师'
        }, {
          value: '选项2',
          label: '技术负责人'
        }, {
          value: '选项3',
          label: '施工员'
        }, {
          value: '选项4',
          label: '质量员'
        }, {
          value: '选项5',
          label: '材料员'
        }],
        value1: [],
        value2: []
      }
    }
  }
</script>
<style>

