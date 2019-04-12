<template>
  <div>
    <el-button-group class="btn-group">
      <el-button v-for="(city, index) in cities" :key="index" type="button" class='btn'>{{ city }}</el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: 'cities',
  props: {
    cities: {
      required: true,
      type: Array,
    },
  },
}
</script>

<style scoped lang="scss">

</style>
