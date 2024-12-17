<template>
  <footer aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="pb-4 pt-16">
      <div class="border-y border-[#E1E3E5] py-16">
        <div class="mx-auto container px-4 xl:grid xl:grid-cols-3 xl:gap-8 ">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:col-span-2">
            <div class="flex flex-col gap-8">
              <div class="flex items-center gap-x-2">
                <img src="/img/Logo.png" alt="logo" class="h-10 w-10 flex-none" />
                <h1>
                  <div class="text-26 font-medium text-text">Comforty</div>
                </h1>
              </div>
              <p class="text-text/60 text-base max-w-96">
                Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                Cras egestas purus
              </p>
              <FooterSocialMedia />
            </div>
            <div class="grid grid-cols-2 md:gap-8">
              <FooterList :list="navigation.CATEGORY" title="CATEGORY" />
              <FooterList :list="navigation.SUPPORT" title="SUPPORT" />
            </div>
          </div>
          <FooterForm />
        </div>
      </div>
      <div class="mx-auto container px-4 pt-4 md:flex md:items-center md:justify-between">
        <FooterPayment />
        <p class="text-sm text-textInverted md:order-1 md:mt-0">
          @ 2021 - Blogy - Designed & Develop by 
          <span class="text-text">Zakirsoft</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from 'vue'

const navigation = {
  CATEGORY: [
    { name: 'Sofa', href: '#' },
    { name: 'Armchair', href: '#' },
    { name: 'Wing Chair', href: '#' },
    { name: 'Desk Chair', href: '#' },
    { name: 'Wooden Chair', href: '#' },
    { name: 'Park Bench', href: '#' },
  ],
  SUPPORT: [
    { name: 'Help & Support', href: '#' },
    { name: 'Tearms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Help', href: '#' },
  ],
}
</script>