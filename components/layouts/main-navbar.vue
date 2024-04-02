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
                    <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />

                    <div class="dropdown">
                        {{user.username}}
                    </div>
                </template>
                <template v-else>
                    <nuxt-link :to="`${localePath('/auth')}`" class="mr-5">
                        <UButton color="blue">
                           {{  $t('get_free') }}
                        </UButton>
                    </nuxt-link>
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
        console.log(this.user)
    }
  },
})
</script>
