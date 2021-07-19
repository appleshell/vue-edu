<template>
  <div id="app">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <p class="text">hello world asdfasfasdfasfasdf</p>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import request from '@/utils/request'

request.get('/boss/v2/api-docs?group=edu-boss-boot').then(res => console.log(res))
// import Component from 'vue-class-component'

// @Component
// export default class App extends Vue {
//   a = 1
//   b = 2
// }

export default Vue.extend({
	data() {
		return {}
	},

	methods: {}
})
</script>

<style lang="scss" scoped>
.text {
	color: $success-color;
}
</style>
