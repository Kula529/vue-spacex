<template>
  <header class="bg-indigo-600">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
        <div class="flex items-center">
          <a href="#">
            <img class="h-10 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="">
          </a>
          <div class="hidden ml-10 space-x-8 lg:block">
            <router-link :to="{ name: 'Home' }" class="text-base font-medium text-white hover:text-indigo-50">
              Home
            </router-link>
            <router-link :to="{ name: 'Launches' }" class="text-base font-medium text-white hover:text-indigo-50">
              Recent Launches
            </router-link>
            <router-link :to="{ name: 'Missions' }" class="text-base font-medium text-white hover:text-indigo-50">
              Missions
            </router-link>
            <router-link :to="{ name: 'Ships' }" class="text-base font-medium text-white hover:text-indigo-50">
              Ships
            </router-link>
            <router-link :to="{ name: 'Payloads' }" class="text-base font-medium text-white hover:text-indigo-50">
              Payloads
            </router-link>
            <router-link :to="{ name: 'Capsules' }" class="text-base font-medium text-white hover:text-indigo-50">
              Capsules
            </router-link>
            <router-link :to="{ name: 'Dragons' }" class="text-base font-medium text-white hover:text-indigo-50">
              Dragons
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>
