<template>
  <div class="mt-5">
    <div class="flex justify-between align-center pt-20 mb-5 container">
      <UInput icon="i-heroicons-magnifying-glass-20-solid" size="xl" color="blue" trailing placeholder="Search..."
        width="600px" />
  
      <UButton @click="isOpen = true" color="blue" variant="solid">Qo'shish</UButton>
    </div>
    <UTable :rows="news" />
  
    <UModal v-model="isOpen">
      <UCard>
        <UForm :state="state" class="space-y-4" @submit="onSubmit">
          <UFormGroup label="Title" name="text">
            <UInput v-model="state.title" color="blue" required/>
          </UFormGroup>
  
          <UFormGroup label="Body" name="text">
            <UInput v-model="state.body" color="blue" required/>
          </UFormGroup>
  
          <div class="flex justify-end gap-3">
            <UButton @click="isOpen=false" type="button" color="rose" variant="outline">
            Bekor qilish
          </UButton>
          <UButton type="submit" color="blue">
            Yuborish
          </UButton>
          </div>
        </UForm>
      </UCard>
    </UModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getNewList, createNews } from '~/store/news.store'
import { getUserInfo } from '~/store/user.store'

interface NewsItem {
  id: number;
  title: string;
  view_count: number;
  body: string;
  user: number;
  category: number;
  tag: number[];
}

interface New {
  title: string,
  body: string
}

export default defineComponent({
  data() {
    return {
      accessToken: '' as string,
      news: [] as NewsItem[],
      user: [] as any,
      isOpen: false as boolean,
      state: {} as New
    }
  },
  methods: {
  async onSubmit(){
       await createNews(this.state)
    }
  },
  async mounted() {
    this.accessToken = localStorage.getItem('accessToken') || '';

    if (this.accessToken) {
      try {
        const newList = await getNewList();
        this.news = newList;
        const userInfo = await getUserInfo()
        this.user = userInfo
        if (!this.user.is_superuser) {
          this.$router.push(this.localePath('/'));
        }
      } catch (error) {
        console.error('Ma\'lumotlarni olishda xatolik:', error);
      }
    }else{
      this.$router.push(this.localePath('/auth'));
    }
  },
})
</script>
