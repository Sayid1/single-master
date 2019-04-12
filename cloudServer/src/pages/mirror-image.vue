<template>
  <div class='es'>
    <div :class="$style.nav">
      <h1 :class="$style.h1">镜像列表</h1>
      <div ref="parcel"></div>
      <!-- <ParcelButton /> -->
    </div>
    <div class="main-content">
      <Cities :cities="cities" />
    </div>
  </div>
</template>

<script>
import Cities from '../components/Cities'
// import { axiosInstance, ParcelButton } from 'parcelUtils!sofe'

export default {
  data() {
    return {
      cities: ['北京', '上海', '深圳', '广州'],
      a: 1,
      vm: null
    }
  },
  components: {
    Cities,
  },
  mounted() {
    console.log(this)
    // ParcelButton.mount({
    //   domElement: this.$refs.parcel,
    //   globalEventDistributor: this.$root.globalEventDistributor,
    //   aa: this.a,
    //   click:() =>{
    //     this.vm.aa = 3
    //   }
    // }).then(vm => {
    //   this.vm = vm.instance
    // })
  },
  methods: {
    xhr() {
      this.vm.aa = 2
      // axiosInstance.get('test').then(res => console.log(res))
    }
  }
}
</script>
<style lang="scss" module>
.nav{
  width: 100%;
  line-height: 60px;
  background: #ffffff;
  display: flex;

  .h1{
    font-size: 16px;
    padding-left: 20px !important;
  }
}
.searh {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
  .searh-width{width: 30%;}
}
</style>

