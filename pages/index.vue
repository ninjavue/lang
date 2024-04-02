<template>
  <div class="pt-20 pl-40 pr-40">
    <UInput icon="i-heroicons-magnifying-glass-20-solid" size="xl" color="blue" trailing placeholder="Search..."
      v-model="text" @change="getText" class="mb-10" />
  
    <UTable :rows="list" />
  </div>
</template>

<script>
import { getNewList } from '~/store/news.store';
export default {
  data() {
    return {
      text: '',
      list: []
    }
  },
  methods: {
    async getText() {
      if (!this.text) {
        this.list = []
      } else {
        const news = await getNewList();
        this.list = news.filter(item => item.title.toLowerCase().includes(this.text.toLowerCase()));
      }

    }
  },
  mounted() {
    document.title = this.$t('main_title')

    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      this.$router.push(this.localePath('/auth'));
    }

  },
}
</script>