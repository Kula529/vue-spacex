<template>
  <div class="p-4 my-3">
    <h3 class="text-blue-500 text-2xl text-center my-3 font-semibold">
      LAUNCHES
    </h3>
    <t-table v-if="launches.length"
             :headers="tableHeaders"
             :data="launches"
             class="bg-white shadow-md"
    >
      <template slot="row" slot-scope="props">
        <tr :class="[props.trClass]">
          <td :class="props.tdClass">
            {{ props.row.mission_name }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.launch_year }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.launch_success ? 'Success' : 'Failed' }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.rocket.rocket_name ? props.row.rocket.rocket_name : '' }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.upcoming ? 'Yes' : 'No' }}
          </td>
        </tr>
      </template>
    </t-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LaunchPage',
  data() {
    return {
      launches: [],
      tableHeaders: ['Mission Name', 'Launch Year', 'Mission Status', 'Rocket Name', 'Upcoming'],
    };
  },
  mounted() {
    this.getApiData();
  },
  methods: {
    async getApiData() {
      const responseData = await axios.get('https://api.spacexdata.com/v3/launches');
      if (responseData) {
        this.launches = responseData.data;
      }
    },
  },
};
</script>
