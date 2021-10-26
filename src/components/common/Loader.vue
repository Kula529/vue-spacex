<template>
  <div class="w-full h-full fixed top-0 left-0 bg-white opacity-80 z-50 flex">
    <span class="text-blue-800 opacity-90 top-1/2 my-0 mx-auto block relative" style="top: 50%">
      <svg class="w-20 h-20 animate-spin" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" /></svg>
      <p class="w-full">Please wait...</p>
    </span>
  </div>
</template>
<script>
export default {
  name: 'LoadingComponent',
};
</script>
