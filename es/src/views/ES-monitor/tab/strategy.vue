<template>
  <div class='strategy'>
    <Table></Table>
  </div>
</template>

<script>
import Table from './strategy.table'
export default {
  data() {
    return {

    }
  },
  components: {
    Table,
  },
}
</script>


<style  scoped lang="scss">
.strategy{height:800px;background: #ffffff;margin: 0 auto;margin-top: 20px; border:1px solid #cccccc; -webkit-box-shadow:0px 3px 3px #c8c8c8 ;-moz-box-shadow:0px 3px 3px #c8c8c8 ;box-shadow:0px 3px 3px #c8c8c8;}
</style>
