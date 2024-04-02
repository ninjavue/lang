<template>
    <div class="mt-5">
       <div class="flex justify-between align-center pt-20 mb-5 container">
            <UInput
                icon="i-heroicons-magnifying-glass-20-solid"
                size="xl"
                color="blue"
                trailing
                placeholder="Search..."
                width="600px"
            />

            <UButton color="blue" variant="solid">Qo'shish</UButton>
       </div>
        <UTable :rows="news" />

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getNewList } from '~/store/news.store'

interface NewsItem {
    id: number;
    title: string;
    view_count: number;
    body: string;
    user: number;
    category: number;
    tag: number[];
}

export default defineComponent({
  data() {
    return {
      accessToken: '' as string,
      news: [] as NewsItem[] 
    }
  },
  async mounted() {
    this.accessToken = localStorage.getItem('accessToken') || '';

    if(this.accessToken){
        try {
            const newList = await getNewList();
            this.news = newList;
        } catch (error) {
            console.error('Ma\'lumotlarni olishda xatolik:', error);
        }
    }
  },
})
</script>
