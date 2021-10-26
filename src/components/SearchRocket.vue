<template>
  <div class="bg-white">
    <h3 class="text-xl my-2 text-center text-green-500">
      Filter Rockets
    </h3>
    <t-input-group label="Search By Rocket Name" class="my-3 font-semibold">
      <t-input v-model="rocketName" type="text" placeholder="Search By Rocket Name" name="Search By Rocket Name" />
    </t-input-group>

    <t-input-group label="Search By Launch Date" class="my-3 font-semibold">
      <t-select v-model="launchDate" placeholder="Search By Launch Date" :options="['Last Week', 'Last Month', 'Last Year']" name="Search By Launch Date" />
    </t-input-group>

    <t-input-group label="Launch Status" class="my-3 font-semibold">
      <t-select v-model="launchStatus" placeholder="Mission Launch Status" :options="['Success', 'Failed']" name="Launch Status" />
    </t-input-group>

    <t-input-group label="Upcoming Mission" class="my-3 font-semibold">
      <t-select v-model="isUpcoming" placeholder="Upcoming Mission" :options="['Yes', 'No']" name="Upcoming Mission" />
    </t-input-group>
    <p v-if="errorText" class="font-semibold text-center my-2 text-red-500">
      {{ errorText }}
    </p>
    <div class="flex">
      <t-button class="mx-auto" @click.prevent="filterResults">
        Search Rockets
      </t-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterRocketComponent',
  data() {
    return {
      rocketName: '',
      launchDate: '',
      isUpcoming: '',
      launchStatus: '',
      errorText: '',
    };
  },
  methods: {
    filterResults() {
      if (!this.rocketName && !this.launchDate && !this.isUpcoming && !this.launchStatus) {
        this.errorText = 'Please choose at least one filter';
      } else {
        this.errorText = '';
        const filters = {
          name: this.rocketName,
          launchDate: this.launchDate,
          upcoming: this.isUpcoming,
          status: this.launchStatus,
        };
        this.$emit('filterResults', filters);
      }
    },
  },
};
</script>
