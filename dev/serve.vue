<script>
import Vue from 'vue';
import { VueComponentsSample, VueButton } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueComponentsSample,
    VueButton
  }
});
</script>

<template>
  <div id="app">
    <vue-components-sample />
    <vue-button></vue-button>
  </div>
</template>
