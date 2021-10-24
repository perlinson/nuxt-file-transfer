<template>
  <el-container>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <nuxt-link class="nav-link active" aria-current="page" to="/">
          Home
        </nuxt-link>
      </el-menu-item>
      <el-menu-item index="2">
        <nuxt-link class="nav-link active" aria-current="page" to="/fileList">
          业绩信息
        </nuxt-link>
      </el-menu-item>
      <el-menu-item index="3">
        <nuxt-link class="nav-link active" aria-current="page" to="/employee">
          人员信息
        </nuxt-link>
      </el-menu-item>
      <el-menu-item index="4">
        <nuxt-link class="nav-link active" aria-current="page" to="/achive">
          业绩信息
        </nuxt-link>
      </el-menu-item>
      <el-menu-item index="5">
        <nuxt-link class="nav-link active" aria-current="page" to="/fileList">
          File List
        </nuxt-link>
      </el-menu-item>
    </el-menu>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated // it check if user isAuthenticated
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout() // this method will logout the user and make token to false on the local storage of the user browser
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style></style>
