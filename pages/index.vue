<template>
  <h1 class="text-black dark:text-white">{{ $t('main_title') }}</h1>
</template>

<script>
export default {
    mounted() {
        document.title = this.$t('main_title')

      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        this.$router.push(this.localePath('/auth'));
      }
      
    },
}
</script>