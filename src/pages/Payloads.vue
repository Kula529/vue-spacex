<template>
  <loading-component v-if="isLoading" />
  <div v-else class="p-4 my-3">
    <h3 class="text-blue-500 text-2xl text-center my-3 font-semibold">
      Payloads
    </h3>
    <t-table v-if="payloads.length"
             :headers="tableHeaders"
             :data="payloads"
             class="bg-white shadow-md"
    >
      <template slot="row" slot-scope="props">
        <tr :class="[props.trClass]">
          <td :class="props.tdClass">
            {{ props.row.payload_id }}
          </td>
          <td :class="props.tdClass" class="cursor-pointer text-blue-500 font-semibold">
            {{ props.row.nationality }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.manufacturer }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.payload_type }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.orbit }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.payload_mass_kg }}
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
  name: 'PayloadPage',
  components: {
    LoadingComponent,
  },
  data() {
    return {
      payloads: [],
      isLoading: false,
      tableHeaders: ['Payload ID', 'Nationality', 'Manufacturer', 'Payload Type', 'Orbit', 'Payload Mass (KG)'],
    };
  },
  mounted() {
    this.getApiData();
  },
  methods: {
    async getApiData() {
      this.isLoading = true;
      try {
        const responseData = await axios.get('https://api.spacexdata.com/v3/payloads');
        if (responseData) {
          this.isLoading = false;
          this.payloads = responseData.data;
        }
      } catch (err) {
        this.isLoading = false;
        console.log(err);
      }
    },
  },
};
</script>
