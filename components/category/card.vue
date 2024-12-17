<template>
    <div class="group relative">
        <div class="relative aspect-square w-full rounded-lg overflow-hidden group-hover:opacity-75">
            <img :src="`/img/categories/${categoryDate.imageSrc}.png`" :alt="categoryDate.imageAlt"
                class="absolute  object-cover  aspect-square w-full " />
            <div class="absolute bottom-0 inset-x-0 w-full flex flex-col items-start justify-center bg-black/70 h-[85px] p-5">
                <h3 class="text-xl font-bold text-[#ffff]">
                    <a :href="categoryDate.href">
                        <span aria-hidden="true" class="absolute inset-0" />
                        {{ categoryDate.name }}
                    </a>
                </h3>
                <p class="mt-1 text-sm">
                    {{ categoryDate.count }} Products
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    categoryDate: {
        required: true,
        type: Object,
    },
})
</script>