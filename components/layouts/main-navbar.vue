<template>
    <div class="h-[10vh] fixed top-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 z-50">
        <div class="container mx-auto flex items-center h-full justify-between">
            <nuxt-link :to="`${localePath('/')}`" class="flex items-center space-x-1">
                <NuxtImg src="logo.svg" width="50" height="50" />
                <span class="text-2xl font-medium">Demo</span>
            </nuxt-link>
    
            <div class="flex item-center space-x-2">
                <SharedColorMode />
                <LangSwitchLang/>
                <template v-if="accessToken">
                    <SharedProfileDrop :user="user"/>
                </template>
                <template v-else>
                    <nuxt-link :to="`${localePath('/auth')}`">
                        <UButton color="blue" variant="outline">
                            {{$t('login')}}
                        </UButton>
                    </nuxt-link>
                </template>
    
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { getUserInfo } from '~/store/user.store'


export default defineComponent({
  data() {
    return {
      accessToken: '' as string,
      user: [] as any
    }
  },
  async mounted() {
    this.accessToken = localStorage.getItem('accessToken') || '';

    if(this.accessToken){
        const userInfo = await getUserInfo()
        this.user = userInfo
    }
  },
})
</script>



<style lang="scss">
    
</style>