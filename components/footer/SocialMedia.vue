<template>
  <div class="flex space-x-4 md:order-2">
    <a v-for="item in social" :key="item.name" :href="item.href"
      class="border p-3 rounded-full border-transparent hover:border-[#007580] group transition">
      <span class="sr-only">{{ item.name }}</span>
      <component :is="item.icon" class="text-xl text-[#636270] group-hover:text-[#007580] transition"
        aria-hidden="true" />
    </a>
  </div>
</template>
<script setup>
const social = [
  {
    name: 'Facebook',
    href: '#',
    icon: 'SvgoFacebook'
  },
  {
    name: 'Instagram',
    href: '#',
    icon: 'SvgoInstagram',

  },
  {
    name: 'Twitter',
    href: '#',
    icon: 'SvgoTwitter',

  },
  {
    name: 'Pinterest',
    href: '#',
    icon: 'SvgoPinterest',
  },
  {
    name: 'YouTube',
    href: '#',
    icon: 'SvgoYoutube',
  },
]
</script>