<template>
  <nav class="bg-white w-full shadow-[0_1px_0px_0px_#E1E3E5]">
    <div class="container mx-auto flex items-center justify-between py-4 sm:py-6 px-4">
      <div class="flex items-center gap-x-6">
        <BaseButton class="text-text text-sm leading-4 font-medium gap-x-4 rounded-md border border-[#E1E3E5 h-[47px] px-4">
          <SvgoHam class="text-lg"/>
          All Categories
        </BaseButton>
        <div class="hidden sm:flex sm:gap-x-4 lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
            class="text-sm font-semibold leading-6 text-[#636270] first:text-[#007580] hover:text-[#007580]">
            {{ item.name }}
          </a>
        </div>
      </div>
      <div class="hidden md:flex space-x-2">
        <span class="text-[#636270] text-sm">Contact:</span>
        <span class="text-text text-sm font-medium">(808) 555-0111</span>
      </div>
      <div class="flex sm:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <SvgoHam aria-hidden="true" />
        </button>
      </div>
    </div>

    <div
      :class="[ mobileMenuOpen ? 'translate-x-0' : '-translate-x-full']"
      @click="mobileMenuOpen = false"
      class="fixed top-0 left-0 z-40 h-full w-full overflow-y-auto overscroll-y-none transition duration-500">
      <div class="float-left min-h-full w-[50%] bg-white px-6 pt-12 shadow-2xl">
        <menu class="divide-y">
          <li v-for="item in navigation" :key="item.name" class="py-2">
            <a :href="item.href" class="text-text hover:text-[#007580]">{{ item.name }}</a>
          </li>
        </menu>
      </div>
    </div>

  </nav>
</template>
<script setup>
const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Shop', href: '#' },
  { name: 'Product', href: '#' },
  { name: 'Pages', href: '#' },
  { name: 'About', href: '#' },
]
</script>