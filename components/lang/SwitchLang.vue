<template>
    <div class="dropdown">
      <UButton @click="toggleDropdown" class="dropbtn" color="blue" variant="soft">
        {{title}}
        <UIcon name="keyboard-arrow-down"></UIcon>
      </UButton>
      <div :class="['dropdown-content focus:outline-none overflow-y-auto scroll-py-1 divide-y divide-gray-200 dark:divide-gray-700 ring-1 ring-gray-200 dark:ring-gray-700 rounded-md shadow-lg bg-white dark:bg-gray-800 ', {show: isDropdownOpen}]">
        <div v-for="lang,i of allLanguage" :key="i" @click="handleTitle(lang.name)">
          <nuxt-link :to="switchLocalePath(lang.code)" class="group flex items-center gap-1.5 w-full px-1.5 py-1.5 text-sm text-gray-700 dark:text-gray-200 z-50">
            <span> {{lang.name}}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </template>
    
    <script>
  export default {
    name: 'LangSwitcher',
    data() {
      return {
        open: false,
        language: 'uz',
        isDropdownOpen: false,
        title: 'Uzbek'
      }
    },
    computed: {
      allLanguage() {
        return this.$i18n.locales
      }
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
      closeDropdown(event) {
        if (!event.target.closest('.dropdown')) {
          this.isDropdownOpen = false;
        }
      },
      handleTitle(text) {
        this.title = text
      },
      firstTitle(){
       let lang = this.$i18n.locales.filter(locale => locale.code === this.$i18n.locale)
       this.title = lang[0].name
      }
      
    },
    mounted() {
      window.addEventListener('click', this.closeDropdown);
    },
    created(){
      this.firstTitle()
    },
    beforeDestroy() {
      window.removeEventListener('click', this.closeDropdown);
    }
  }
    </script>
  
    <style lang="scss" scoped>
 
    
    .dropdown {
      position: relative;
      display: inline-block;
    }
    
    .dropdown-content {
      display: none;
      position: absolute;
      overflow: auto;
      z-index: 22;
      top: 37px;
      right: -5px;
    }
    
    .dropdown-content a {
        padding: 6px 25px;
        &:hover{
            background: rgba(17,24,39,1);
            color: lightgray;
        }
    }
    
   
    
    .show {
      display: block;
    }
  </style>