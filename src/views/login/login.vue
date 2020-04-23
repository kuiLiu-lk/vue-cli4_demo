<template>
  <div class="main-box">
    <header class="head-box">
      <img class="logo" src="../../assets/img/hywb_logo.png" alt="华友文保"> 文化遗址安全防护一体化智慧平台
    </header>
    <div class="login-box">
      <el-form
        :model="ruleForm"
        status-icon
        class="login-form-box"
        :rules="rules"
        ref="ruleForm"
        label-width="0px"
      >
        <el-form-item prop="username">
          <el-input size="large" prefix-icon="el-icon-user" 
                    v-model.number="ruleForm.username" placeholder="请输入用户名">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input size="large" prefix-icon="el-icon-lock" type="password"
                    v-model="ruleForm.password" placeholder="请输入用户名" autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { loginApi } from '../../request/login'
export default {
  components: {},
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: "123456",
        username: "admin"
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: checkName, trigger: "blur" }]
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    submitForm(formName) {
      const self = this;
      let result = loginApi(self.ruleForm);
      result.then(res => {
        if(res.data.resultCode===200) {
            self.$router.push('/main')
        }
        console.log(res, 'loginApi')
      })
    },
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped></style>
