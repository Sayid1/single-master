<template>
  <div class='es'>
    <div class='nav'>
      <h1>集群列表</h1>
    </div>
    <div class="main-content">
      <Cities :cities="cities" />
      <div class="actions">
        <el-row type="flex" justify="space-between">
          <router-link to="es-add"><el-button size="small" type="primary">新建</el-button></router-link>
          <el-input placeholder="请输入实例名、实例ID">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-row>
      </div>
      <el-table :data="esData" style="width: 100%">
        <el-table-column prop="a" label="ID/名称" />
        <el-table-column prop="b" label="状态" />
        <el-table-column prop="c" label="节点规格" />
        <el-table-column prop="d" label="节点数" />
        <el-table-column prop="e" label="健康状态" />
        <el-table-column prop="f" label="可用区" />
        <el-table-column prop="g" label="网络" />
        <el-table-column prop="h" label="ES版本" />
        <el-table-column prop="i" label="付费类型" />
        <el-table-column prop="j" label="操作" />
      </el-table>
    </div>
  </div>
</template>

<script>
import Cities from '@/components/Cities'
export default {
  data() {
    return {
      cities: ['北京', '上海', '深圳', '广州'],
      esData: [{
        a: 'a',
        b: 'a',
        c: 'a',
        d: 'a',
        e: 'a',
        f: 'a',
        g: 'a',
        h: 'a',
        i: 'a',
        j: 'a',
      }],
    }
  },
  components: {
    Cities,
  },
}
</script>

<style  scoped lang="scss">
.main-content {
  padding: 20px;
}
</style>
