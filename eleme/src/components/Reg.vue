<template>
  <div>
    <van-field v-model="username" required clearable label="用户名" right-icon="question-o" placeholder="请输入用户名" @click-right-icon="$toast('question')" />
    <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>

