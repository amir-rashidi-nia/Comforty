<template>
    <section class="container mx-auto -mt-24 sm:-mt-8 px-4 grid grid-cols-3 sm:grid-cols-4 gap-6 lg:flex items-center lg:justify-between">
        <div v-for="brand in brands" :key="brand?.id" class="flex items-center">
            <div class="w-full h-ful">
                <img :src="`/img/brands/${brand.img}.png`" :alt="brand.img" class="w-full h-full object-cover">
            </div>
        </div>
    </section>
</template>
<script setup>
const brands = ref([
    { id: 1, img: 'burnt'},
    { id: 2, img: 'cib'},
    { id: 3, img: 'z'},
    { id: 4, img: 'pd'},
    { id: 5, img: 'moz'},
    { id: 6, img: 'zapier'},
    { id: 7, img: 'pip'},
])
</script>