

<template>
  <div>
    <SelectProvinces v-if="step == 0"/>
    <SelectCities v-else-if="step == 1"  :cities="citiesList" />
  </div>
</template>

<script>

import SelectProvinces from './location-components/select-provinces.vue'
import SelectCities from './location-components/select-cities.vue'

export default {
  components:{
    SelectProvinces,
    SelectCities,
  },
  props:['categoryList'],
  data(){
    return{
      step : 0,
      citiesList : '',
    }
  },
  methods:{
    selectedProvince(index){
      this.citiesList = this.categoryList[index].subcategories
      this.step = 1;
    },
    selectedCity(item){
      this.$parent.product.city_id = item.id
        this.$parent.currentStep++;
    },
    stepBack(){
        this.$parent.currentStep--;
    }
  },
 
}

</script>
