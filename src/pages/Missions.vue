<template>
  <loading-component v-if="isLoading" />
  <div v-else class="p-4 my-3">
    <h3 class="text-blue-500 text-2xl text-center my-3 font-semibold">
      Missions
    </h3>
    <t-table v-if="missions.length"
             :headers="tableHeaders"
             :data="missions"
             class="bg-white shadow-md"
    >
      <template slot="row" slot-scope="props">
        <tr :class="[props.trClass]">
          <td :class="props.tdClass">
            {{ props.row.mission_name }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.mission_id }}
          </td>
          <td :class="props.tdClass" class="cursor-pointer text-blue-500 font-semibold">
            {{ props.row.wikipedia }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.manufacturers.toString().split(',') }}
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
  name: 'MissionPage',
  components: {
    LoadingComponent,
  },
  data() {
    return {
      missions: [],
      isLoading: false,
      tableHeaders: ['Mission Name', 'Mission ID', 'Wikipedia', 'Manufacturers'],
    };
  },
  mounted() {
    this.getApiData();
  },
  methods: {
    async getApiData() {
      this.isLoading = true;
      try {
        const responseData = await axios.get('https://api.spacexdata.com/v3/missions');
        if (responseData) {
          this.isLoading = false;
          this.missions = responseData.data;
        }
      } catch (err) {
        this.isLoading = false;
        console.log(err);
      }
    },
  },
};
</script>
