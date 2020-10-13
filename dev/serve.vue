<script>
import Vue from 'vue';
import { VueComponentsSample, VueButton, VueTable } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueComponentsSample,
    VueButton,
    VueTable
  }
});
</script>

<template>
  <div id="app">
    <vue-components-sample/>
    <vue-button></vue-button>
    <vue-table></vue-table>
  </div>
</template>
