<template>
  <div id="app">
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
#app {
	width: 100%;
	height: 100%;
}
</style>
