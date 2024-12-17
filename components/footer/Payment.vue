<template>
  <div class="flex space-x-4 md:order-2">
    <a v-for="item in payment" :key="item.name" :href="item.href">
      <span class="sr-only">{{ item.name }}</span>
      <component :is="item.icon" class="text-6xl text-[#636270] hover:text-[#007580] transition" aria-hidden="true" />
    </a>
  </div>
</template>
<script setup>
const payment = [
  {
    name: 'paypal',
    href: '#',
    icon: 'SvgoPaypal'
  },
  {
    name: 'express',
    href: '#',
    icon: 'SvgoExpress',

  },
  {
    name: 'mastercard',
    href: '#',
    icon: 'SvgoMastercard',

  },
  {
    name: 'visa',
    href: '#',
    icon: 'SvgoVisa',
  },
]
</script>