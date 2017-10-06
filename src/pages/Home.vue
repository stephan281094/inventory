<template>
  <div class="content">
    <app-sidebar />
    <main class="main">
      <h1>Home</h1>
    </main>
  </div>
</template>

<script>
  import TheSidebar from '@/components/TheSidebar.vue';

  export default {
    name: 'HomePage',
    components: {
      'app-sidebar': TheSidebar
    }
  }
</script>
