<template>
  <div class="aside sticky">
    <router-link class="logo" to="/">Inventory.</router-link>
    <div class="aside-item">
      <router-link class="aside-item__link" to="/accounts">Accounts</router-link>
    </div>
    <div class="aside-item">
      <router-link class="aside-item__link" to="/finance">Finance</router-link>
    </div>
    <div class="aside-item">
      <router-link class="aside-item__link" to="/food">Food</router-link>
      <div class="aside-item">
        <router-link
          to="/food/nutritional-information"
          class="aside-item__link aside-item__link--sublink"
        >
          Nutritional Information
        </router-link>
        <router-link
          to="/food/recipes"
          class="aside-item__link aside-item__link--sublink"
        >
          Recipes
        </router-link>
      </div>
    </div>
    <div class="aside-item">
      <router-link class="aside-item__link" to="/health">Health</router-link>
    </div>
    <div class="aside-item">
      <router-link class="aside-item__link" to="/notes">Notes</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TheSidebar'
  }
</script>


