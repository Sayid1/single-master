<template>
 <fieldset>
    <legend>parcel 区域</legend>
     <el-button @click="$root.click">点我更改p</el-button>
    <p>登录用户：{{user}}</p>
    来着调用者的属性 p：{{$root.aa}}
  </fieldset>
</template>
<script>
export default {
  name: 'ParcelButton',
  data() {
    return {
      ...this.mapState('user'),
    }
  },
  mounted() {
    
  }
}
</script>