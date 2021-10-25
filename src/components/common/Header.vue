<template>
  <header class="bg-indigo-600">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
        <div class="flex items-center">
          <a href="#">
            <img class="h-10 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="">
          </a>
          <div class="hidden ml-10 space-x-8 lg:block">
            <a key="spacex" href="#" class="text-base font-medium text-white hover:text-indigo-50">
              SpaceX Launcher
            </a>
          </div>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <a key="spacex" href="#" class="text-base font-medium text-white hover:text-indigo-50">
          SpaceX Launcher
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>
