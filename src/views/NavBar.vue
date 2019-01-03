<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <span class="navbar-brand mr-6" href="#"><img src="../assets/logo.png" /></span>
    </div>
    <div class="block lg:hidden">
      <button v-on:click="toggleHidden" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div id="navbar-links" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto overflow-hidden lg:overflow-visible" v-bind:class="{'h-px': isHidden}">
        <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">Home</router-link>
        <router-link to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">About</router-link>
        <router-link to="/students" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">Students</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data: function() {
    return {
      isHidden: true
    }
  },
  methods: {
    toggleHidden: function () {
      this.isHidden = !this.isHidden;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.navbar-brand {
  img{
    height: 40px;
  }
}

#navbar-links {
  max-height: 100px;
  transition: max-height .5s ease-out;
  &.h-px {
    max-height: 0;
    height: auto;
  }
}
</style>
