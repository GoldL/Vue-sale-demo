<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" key="reg" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" key="reg" placeholder="请设置密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="sePasswordModel" key="reg" placeholder="请确认密码">
        </div>
        <span class="g-form-error">{{ sePasswordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onRegister">注册</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usernameModel: '',
      passwordModel: '',
      sePasswordModel: '',
      errorText: ''
    }
  },
  computed: {
    userErrors () {
      let errorText, status
      if (!/@/g.test(this.usernameModel)) {
        status = false
        errorText = '必须包含@'
      } else {
        status = true
        errorText = ''
      }
      if (!this.userFlag) {
        this.userFlag = true
        errorText = ''
      }
      return {
        status,
        errorText
      }
    },
    passwordErrors () {
      let errorText, status
      if (!/^\w{1,6}$/g.test(this.passwordModel)) {
        status = true
        errorText = '密码不是1-6位'
      } else {
        status = true
        errorText = ''
      }
      if (!this.passwordFlag) {
        this.passwordFlag = true
        errorText = ''
      }
      return {
        status,
        errorText
      }
    },
    sePasswordErrors () {
      let errorText, status
      if (this.sePasswordModel !== this.passwordModel) {
        status = false
        errorText = '密码不一致'
      } else {
        status = true
        errorText = ''
      }
      if (!this.sePasswordFlag) {
        this.sePasswordFlag = true
        errorText = ''
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    onRegister () {
      if (!this.userErrors.status || !this.passwordErrors.status || !this.sePasswordErrors.status) {
        this.errorText = '部分选项未通过'
      } else {
        this.errorText = ''
      }
    }
  }
}
</script>

<style>

</style>
