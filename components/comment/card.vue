<template>
    <div class="relative rounded-xl p-8 bg-[#ffff] shadow-[0_8px_40px_0px_#27234314] w-full flex-1 flex flex-col justify-between h-[400px] xs:h-[320px] sm:h-auto">
        <SvgoComma class="absolute bottom-5 right-10 text-[#F0F2F3] text-8xl z-0" />
        <div class="relative w-full h-[170px]">
            <p class="pl-6 text-[#636270] text-sm sm:text-xl  border-l-2 border-[#029FAE]">
                {{ commentDate.text }}
            </p>
        </div>
        <div class="mt-6 flex items-center gap-4">
            <div>
                <img :src="`/img/comments/${commentDate.imageSrc}.png`" :alt="commentDate.imageAlt">
            </div>
            <div>
                <h3 class="text-base" :class="[ true ? 'text-[#007580]' : 'text-text']">
                        {{ commentDate.name }}
                </h3>
                <p class="mt-1 text-base font-bold text-text">{{ commentDate.role }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    commentDate: {
        required: true,
        type: Object,
    },
})
</script>