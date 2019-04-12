<template>
  <div>
    <el-button @click="$root.click">我是来着parcel的按钮</el-button>
    <!-- <p>登录用户：{{user}}</p>
    来着调用者的属性：{{$root.aa}} -->
  </div>
</template>
<script>
export default {
  name: 'helloWord',
  data() {
    return {
      // ...this.mapState('user'),
    }
  },
  mounted() {
  }
}
</script>
