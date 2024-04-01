<template>
  <h1 class="text-black dark:text-white">{{ $t('welcome') }}</h1>
</template>

<script>
export default {
    mounted() {
        document.title = 'Home Page | Demo'
    },
}
</script>