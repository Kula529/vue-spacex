<template>
  <loading-component v-if="isLoading" />
  <div v-else class="p-4 my-3">
    <h3 class="text-blue-500 text-2xl text-center my-3 font-semibold">
      LAUNCHES
    </h3>
    <t-button class="my-2" @click="isSearchFilterOpened = !isSearchFilterOpened">
      Search Rockets
    </t-button>
    <t-table v-if="launches.length"
             :headers="tableHeaders"
             :data="rocketResults"
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
    <t-modal v-model="isSearchFilterOpened">
      <search-filter-modal @filterResults="getFilteredResults" />
    </t-modal>
  </div>
</template>

<script>
import axios from 'axios';
import SearchFilterModal from '../components/SearchRocket.vue';
import LoadingComponent from '../components/common/Loader.vue';

export default {
  name: 'LaunchPage',
  components: {
    SearchFilterModal,
    LoadingComponent,
  },
  data() {
    return {
      launches: [],
      isLoading: false,
      filters: {},
      isSearchFilterOpened: false,
      tableHeaders: ['Mission Name', 'Launch Year', 'Mission Status', 'Rocket Name', 'Upcoming'],
    };
  },
  computed: {
    rocketResults() {
      let results = this.launches;
      if (this.filters.name) {
        results = results.filter((item) => item.rocket.rocket_name.match(this.filters.name));
      }
      if (this.filters.status) {
        if (this.filters.status === 'Success') {
          results = results.filter((item) => item.launch_success === true);
        } else {
          results = results.filter((item) => item.launch_success === false);
        }
      }
      if (this.filters.upcoming) {
        if (this.filters.upcoming === 'Yes') {
          results = results.filter((item) => item.upcoming === true);
        } else {
          results = results.filter((item) => item.upcoming === false);
        }
      }
      return results;
    },
  },
  mounted() {
    this.getApiData();
  },
  methods: {
    async getApiData() {
      this.isLoading = true;
      try {
        const responseData = await axios.get('https://api.spacexdata.com/v3/launches');
        if (responseData) {
          this.isLoading = false;
          this.launches = responseData.data;
        }
      } catch (err) {
        this.isLoading = false;
        console.log(err);
      }
    },
    getFilteredResults(filters) {
      this.filters = filters;
      this.isSearchFilterOpened = false;
    },
  },
};
</script>
