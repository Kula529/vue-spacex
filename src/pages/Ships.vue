<template>
  <loading-component v-if="isLoading" />
  <div v-else class="p-4 my-3">
    <h3 class="text-blue-500 text-2xl text-center my-3 font-semibold">
      Ships
    </h3>
    <t-card v-for="ship in ships"
            :key="ship.ship_id"
            :header="ship.ship_name"
            class="my-3 p-3 text-center"
    >
      <div v-if="ship.year_built" class="text-blue-700 flex bg-gray-300 justify-between mx-auto items-center my-3 px-2 py-3">
        <p class="font-semibold">
          Year Built
        </p>
        <p class="font-semibold">
          {{ ship.year_built }}
        </p>
      </div>
      <div v-if="ship.roles" class="text-blue-700 flex bg-gray-300 justify-between mx-auto items-center my-3 px-2 py-3">
        <p class="font-semibold">
          Ship Roles
        </p>
        <p class="font-semibold">
          {{ ship.roles | filterRoles }}
        </p>
      </div>
      <div v-if="ship.ship_id" class="text-blue-700 flex bg-gray-300 justify-between mx-auto items-center my-3 px-2 py-3">
        <p class="font-semibold">
          Ship ID
        </p>
        <p class="font-semibold">
          {{ ship.ship_id }}
        </p>
      </div>
      <div v-if="ship.home_port" class="text-blue-700 flex bg-gray-300 justify-between mx-auto items-center my-3 px-2 py-3">
        <p class="font-semibold">
          Home Port
        </p>
        <p class="font-semibold">
          {{ ship.home_port }}
        </p>
      </div>
      <div v-if="ship.ship_type" class="text-blue-700 flex bg-gray-300 justify-between mx-auto items-center my-3 px-2 py-3">
        <p class="font-semibold">
          Ship Type
        </p>
        <p class="font-semibold">
          {{ ship.ship_type }}
        </p>
      </div>
      <div v-if="ship.url" class="text-blue-700 flex bg-gray-300 justify-between mx-auto items-center my-3 px-2 py-3">
        <p class="font-semibold">
          Ship Url
        </p>
        <p class="font-semibold text-indigo-500">
          {{ ship.url }}
        </p>
      </div>
      <div v-if="ship.image" class="my-3 mx-auto p-2 flex justify-center">
        <img :src="ship.image" align="center" height="350" width="400">
      </div>

      <div v-if="ship.missions.length">
        <p class="my-3 text-2xl text-gray-600">
          SHIP MISSIONS
        </p>
        <t-table
          :headers="tableHeaders"
          :data="ship.missions"
          class="bg-white shadow-md"
        >
          <template slot="row" slot-scope="props">
            <tr :class="[props.trClass]">
              <td :class="props.tdClass" class="text-left">
                {{ props.row.name }}
              </td>
              <td :class="props.tdClass" class="text-left">
                {{ props.row.flight }}
              </td>
            </tr>
          </template>
        </t-table>
      </div>

      <p v-else class="text-red-500 font-semibold my-2">
        Image not available
      </p>
    </t-card>
  </div>
</template>

<script>
import axios from 'axios';
import LoadingComponent from '../components/common/Loader.vue';

export default {
  name: 'ShipPage',
  components: {
    LoadingComponent,
  },
  filters: {
    filterRoles(value) {
      let res = '';
      value.forEach((item) => {
        res = `${res + item},`;
      });
      return res;
    },
  },
  data() {
    return {
      ships: [],
      isLoading: false,
      tableHeaders: ['Mission Name', 'Flight Name'],
    };
  },
  mounted() {
    this.getApiData();
  },
  methods: {
    async getApiData() {
      this.isLoading = true;
      try {
        const responseData = await axios.get('https://api.spacexdata.com/v3/ships');
        if (responseData) {
          this.isLoading = false;
          this.ships = responseData.data;
        }
      } catch (err) {
        this.isLoading = false;
        console.log(err);
      }
    },
  },
};
</script>
