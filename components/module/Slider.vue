<template>
    <div class="flex flex-col w-full">
        <div class="container mx-auto px-4 flex justify-between">
            <h3 class="text-text text-2xl sm:text-32 font-semibold">
                {{ title }}
            </h3>
            <div class="flex items-center space-x-2 sm:space-x-4">
                <button @click="swiper.next()"
                    class="bg-[#007580]  flex items-center justify-center rounded-full h-[33px] w-[33px] sm:h-[44px] sm:w-[44px]">
                    <p class="sr-only">slider controller</p>
                    <SvgoArrow class="text-lg sm:text-xl text-[#ffff]" />
                </button>
                <button @click="swiper.prev()"
                    class="bg-[#F0F2F3]  flex items-center justify-center rounded-full h-[33px] w-[33px] sm:h-[44px] sm:w-[44px]">
                    <p class="sr-only">slider controller</p>
                    <SvgoArrow class="text-lg sm:text-xl text-text rotate-180" />
                </button>
            </div>
        </div>
        <ClientOnly>
            <swiper-container class="swiper w-full pt-8"
                :class="[ center ? 'container mx-auto px-4 xl:max-w-none xl:px-0' : 'container mx-auto px-4' ]" ref="containerRef" :autoHeight="true"
                :breakpoints="breakpoints" :centeredSlides="center" :loop="center"  :mousewheel="{ invert: true }" :autoplay="{ delay: 3000, enabled: true }">
                <swiper-slide v-for="item in items" :key="item?.id"  class="h-auto" :class="{ 'slide' : center}">
                    <slot name="item" :item="item" />
                </swiper-slide>
            </swiper-container>
            <template #fallback>
                <div class="animate-pulse  container mx-auto px-4 my-8 flex gap-4">
                    <div class="rounded-xl bg-textInverted aspect-square h-full w-full"></div>
                    <div class="hidden sm:block rounded-xl bg-textInverted aspect-square h-full w-full"></div>
                    <div class="hidden md:block rounded-xl bg-textInverted aspect-square h-full w-full"></div>
                    <div class="hidden lg:block rounded-xl bg-textInverted aspect-square h-full w-full"></div>
                </div>
            </template>
        </ClientOnly>
    </div>
</template>
<script setup>
const props = defineProps({
    title: {
        required: true,
        type: String,
    },
    center: {
        default: false,
    },
    sliderClass: {
        required: false,
        type: String,
    },
    items: {
        default: [],
        type: Array,
    },
    breakpoints: {
        default: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 12
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 24
            }
        },
        type: Object,
    },
})

const containerRef = ref(null)
const swiper = useSwiper(containerRef)
</script>
<style scoped>
.slide:not(.swiper-slide-active, .swiper-slide-prev, .swiper-slide-next) {
  opacity: 0.5; 
}
</style>