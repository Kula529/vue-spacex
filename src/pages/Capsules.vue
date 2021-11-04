<template>
  <loading-component v-if="isLoading" />
  <div v-else class="p-4 my-3">
    <h3 class="text-blue-500 text-2xl text-center my-3 font-semibold">
      Capsules
    </h3>
    <t-table v-if="capsules.length"
             :headers="tableHeaders"
             :data="capsules"
             class="bg-white shadow-md"
    >
      <template slot="row" slot-scope="props">
        <tr :class="[props.trClass]">
          <td :class="props.tdClass">
            {{ props.row.capsule_id }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.status }}
          </td>
          <td :class="props.tdClass" class="cursor-pointer text-blue-500 font-semibold">
            {{ props.row.details ? props.row.details : 'Not available' }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.original_launch }}
          </td>
        </tr>
      </template>
    </t-table>
  </div>
</template>

<script>
import axios from 'axios';
import LoadingComponent from '../components/common/Loader.vue';

export default {
  name: 'CapsulePage',
  components: {
    LoadingComponent,
  },
  data() {
    return {
      capsules: [],
      isLoading: false,
      tableHeaders: ['Capsule ID', 'Status', 'Details', 'Original Launch'],
    };
  },
  mounted() {
    this.getApiData();
  },
  methods: {
    async getApiData() {
      this.isLoading = true;
      try {
        const responseData = await axios.get('https://api.spacexdata.com/v3/capsules');
        if (responseData) {
          this.isLoading = false;
          this.capsules = responseData.data;
        }
      } catch (err) {
        this.isLoading = false;
        console.log(err);
      }
    },
  },
};
</script>
