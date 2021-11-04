<template>
  <loading-component v-if="isLoading" />
  <div v-else class="p-4 my-3">
    <h3 class="text-blue-500 text-2xl text-center my-3 font-semibold">
      Dragons
    </h3>
    <t-card v-for="dragon in dragons"
            :key="dragon.id"
            :header="dragon.name"
            class="my-3 p-3 text-center"
    >
      <p class="text-red-700 font-semibold my-2">
        Type is {{ dragon.type }}
      </p>
      <p class="text-red-700 font-semibold my-2">
        Mass in KGs is {{ dragon.dry_mass_kg }}
      </p>
      <p class="text-red-700 font-semibold my-2">
        Takes {{ dragon.orbit_duration_yr }} years to complete 1 orbit
      </p>
      <p class="text-red-700 font-semibold my-2">
        Crew capacity is {{ dragon.crew_capacity }}
      </p>
      <p class="text-red-700 font-semibold my-2">
        First flight was taken on {{ dragon.first_flight }}
      </p>
      <div class="flex justify-between items-center flex-wrap p-2">
        <img v-for="image in dragon.flickr_images" :key="image" :src="image" height="300" width="450">
      </div>
      <p class="text-blue-700 my-2">
        {{ dragon.description }}
      </p>
      <p class="text-red-700 font-semibold my-2">
        {{ dragon.wikipedia }}
      </p>
    </t-card>
  </div>
</template>

<script>
import axios from 'axios';
import LoadingComponent from '../components/common/Loader.vue';

export default {
  name: 'DragonPage',
  components: {
    LoadingComponent,
  },
  data() {
    return {
      dragons: [],
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
        const responseData = await axios.get('https://api.spacexdata.com/v3/dragons');
        if (responseData) {
          this.isLoading = false;
          this.dragons = responseData.data;
        }
      } catch (err) {
        this.isLoading = false;
        console.log(err);
      }
    },
  },
};
</script>
