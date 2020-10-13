<template>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Occupation</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="!items.length">
            <td colspan="3">Nothing to display</td>
            </tr>
            <tr v-for="item in items" :key="item.id" @click="onClick(item)">
                <td>{{ item.name }}</td>
                <td>{{ item.age }}</td>
                <td>{{ item.job }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  name: "VueTable", // vue component name
  props: {
      items: {
          type: Array,
          default: () => []
      }
  },
  methods: {
      onClick: function(item) {
          console.log(item);
          this.$emit('row-clicked', {item});
      }
  },
  data() {}
};
</script>

<style scoped>
    table {
        border-collapse: collapse;
        text-align: center;
        table-layout: auto;
        width: 100%;
    }
    thead{
        color: white;
        background-color: #b7adff;
    }
    th {
        padding: 1rem .7rem;
        text-align: center;
    }
    tr {
        box-shadow: 0 0 1px 0 rgba(0,0,0,.2)
    }
    td {
        padding: 1rem 0.7rem;
        text-align: center;
    }
</style>
