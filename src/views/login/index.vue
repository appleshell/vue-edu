<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px" label-position="top" class="login-form">
      <el-form-item label="手机号">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="onSubmit" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import request from '@/utils/request'
import qs from 'qs'

export default Vue.extend({
	name: 'LoginIndex',
	data() {
		return {
			loading: false,
			form: {
				phone: '',
				password: ''
			}
		}
	},
	methods: {
		async onSubmit() {
			this.loading = true
			const { data } = await request({
				method: 'POST',
				headers: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				url: '/front/user/login',
				data: qs.stringify(this.form)
			})

			this.loading = false
			if (data.state !== 1) {
				return this.$message.error(data.message)
			}

			this.$router.push('/')
			this.$message.success('登录成功')
		}
	}
})
</script>

<style lang="scss" scoped>
.login {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

.login-form {
	width: 360px;
	background: #fff;
	padding: 20px;
	border-radius: 6px;

	.login-btn {
		width: 100%;
	}
}
</style>
