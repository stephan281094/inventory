<template>
  <div class="content">
    <app-sidebar />
    <main class="main">
      <h1>404. Not found.</h1>
    </main>
  </div>
</template>

<script>
  import TheSidebar from '@/components/TheSidebar.vue';

  export default {
    name: 'NotFoundPage',
    components: {
      'app-sidebar': TheSidebar
    }
  }
</script>
