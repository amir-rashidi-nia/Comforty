<template>
    <section class="w-full bg-[#F0F2F3] mt-16 py-16">
        <div class="w-full container mx-auto px-4">
            <ModuleSlider 
                title="What Client SaysAbout US" 
                :items="comments"
                :breakpoints="breakpoints"
                slider-class="grid grid-cols-2 gap-x-6 auto-rows-[1fr]">
                <template #item="{ item }">
                    <CommentCard :comment-date="item" />
                </template>
            </ModuleSlider>
        </div>
    </section>
</template>
<script setup>
const breakpoints = {
    320: {
        slidesPerView: 1,
        spaceBetween: 10
    },
    1280: {
        slidesPerView: 2,
        spaceBetween: 20
    }
}
const comments = [
    {
        id: 1,
        name: 'Basic Tee',
        imageSrc: '1',
        imageAlt: "Front of men's Basic Tee in black.",
        text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“',
        role: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '2',
        imageAlt: "Front of men's Basic Tee in black.",
        text: 'Nullam sapien elit, dignissim eu viverra et, scelerisque et felis. Aliquam egestas dui elit, quis tincidunt lacus aliquam et. Duis nulla velit, dignissim ut odio ac, eleifend luctus leo. Ut ac imperdiet velit. Aliquam semper ex in volutpat rutrum. ',
        role: 'Black',
    },
]
</script>