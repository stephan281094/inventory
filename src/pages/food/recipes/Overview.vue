<template>
  <div class="content">
    <app-sidebar />
    <main class="main">
      <div class="items">
        <recipe-item
          v-for="recipe in $store.state.food.recipes"
          :key="recipe.slug"
          :title="recipe.title"
          :slug="recipe.slug"
          :image="recipe.image"
        />
      </div>
    </main>
  </div>
</template>

<script>
  import TheSidebar from '@/components/TheSidebar.vue';
  import RecipeItem from '@/components/RecipeItem';

  export default {
    name: 'FoodRecipesPage',
    components: {
      'app-sidebar': TheSidebar,
      'recipe-item': RecipeItem
    }
  }
</script>
