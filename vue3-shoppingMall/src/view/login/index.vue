<template>
	<main>
		<div class="login_box">
			<p><span>账号</span><input type="text" v-model="loginInfo.username" @change="changeUsername" /></p>
			<p><span>密码</span><input type="password" v-model="loginInfo.password" name="password" id="" /></p>
			<p>
				<span>验证码</span><input class="codes" type="text" v-model="loginInfo.codes" width="60px" />
				<span v-html="loginCode" class="loginCode"></span>
			</p>

			<div>
				<button @click="handleLogin">登录</button>
				<button @click="getReg">注册</button>
			</div>
		</div>
	</main>

</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref, reactive } from "vue";
import { memberReg, getLoginCode, login } from '../../api/login'

const loginInfo = reactive({
	username: '',
	password: '',
	codes: ''
})
let loginCode = ref()
const router = useRouter()
console.log(`login`)

// 此处是一个 target对象
function changeUsername(value: any) {
	console.log(value)
}

function handleMemberReg() {

}

const handleLoginCode = async () => {
	try {
		let res = await getLoginCode()
		loginCode.value = res
	} catch (error) {

	}

}

handleLoginCode()

const handleLogin = async () => {
	try {
		let res = await login(loginInfo)
		if (res.status === 200) {
			// 字符串
			router.push('home')

			// 对象
			// router.push({ path: 'home' })
		}
	} catch (error) {
		alert(error)
	}
}

const getReg = async () => {
	router.push('/home')
}




</script>

<style lang="scss" scoped>
main {
	height: 100vh;
	width: 100vw;
	// 暂时只能使用 相对路径
	background: url('../../assets/img/login.jpg') center no-repeat;
	background-size: 100%;

	.login_box{
		position: fixed;
		bottom: 200px;
		right: 300px;
	}

	p {
		text-align: center;
		line-height: 40px;

		.codes {
			width: 60px;
		}

		>.loginCode {
			background-color: #fff;
			display: inline-block;
			height: 50px;
			width: 150px;
		}
	}
}
</style>