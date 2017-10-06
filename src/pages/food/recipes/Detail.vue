<template>
  <div class="content">
    <app-sidebar />
    <main class="main">
      <recipe-hero
        :title="recipe.title"
        :serves="recipe.serves"
        :time="recipe.time"
        :difficulty="recipe.difficulty"
        :image="recipe.image"
      />
    </main>
  </div>
</template>

<script>
  import TheSidebar from '@/components/TheSidebar.vue';
  import RecipeHero from '@/components/RecipeHero';

  export default {
    name: 'FoodRecipesDetailPage',
    data () {
      return {
        recipe: {
          slug: 'chicken-fajita',
          serves: 2,
          time: '45 minutes',
          difficulty: 'Not too tricky',
          title: 'Chicken Fajita',
          image: 'http://localhost:3000/public/assets/images/food/chicken-fajita.jpg'
        }
      }
    },
    components: {
      'app-sidebar': TheSidebar,
      'recipe-hero': RecipeHero
    }
  }
</script>
