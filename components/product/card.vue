<template>
    <div class="group relative">
        <div class="relative aspect-square w-full group-hover:opacity-75">
            <span v-if="productDate.new || productDate.sales" class="absolute top-6 left-6 rounded flex items-center justify-center w-12 h-7 z-50 text-13 font-medium text-white" :class="[ productDate.new ? 'bg-[#01AD5A]' : productDate.sales ? 'bg-[#F5813F]' : '' ]" >
                {{ productDate.new ? 'New' : productDate.sales ? 'Sales' : '' }}
            </span>
            <img 
                :src="`/img/products/${productDate.imageSrc}.png`" 
                :alt="productDate.imageAlt"
                class="absolute  object-cover rounded-lg aspect-square w-full " />
        </div>
        <div class="mt-4 flex justify-between items-center">
            <div>
                <h3 class="text-base" :class="[ productDate.active ? 'text-[#007580]' : 'text-text']">
                    <a :href="productDate.href">
                        <span aria-hidden="true" class="absolute inset-0" />
                        {{ productDate.name }}
                    </a>
                </h3>
                <p v-if="productDate.sales" class="mt-1 text-base font-bold text-text">
                    {{ productDate.salesPrice }}
                    <span class=" text-sm text-textInverted line-through">{{ productDate.price }}</span>
                </p>
                <p v-else class="mt-1 text-base font-bold text-text">{{ productDate.price }}</p>
            </div>
            <BaseButton class="w-[44px] h-[44px]" :class="[ productDate.active ? 'bg-[#029FAE]' : 'bg-[#F0F2F3]']">
                <p class="sr-only">Add to Cart</p>
                <SvgoCart v-if="productDate.active " filled class="text-2xl text-[#ffff]"/>
                <SvgoCarttwo v-else filled class="text-2xl text-text" />
            </BaseButton>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    productDate: {
        required: true,
        type: Object,
    },
})
</script>