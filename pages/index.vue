<template>
    <section>
        <TheHiro class="-z-10" />
        <TheService class="z-20" />
        <TheBrand />
        <ModuleSlider :items="products" class="pt-8" title="Featured Products">
            <template #item="{ item }">
                <ProductCard :product-date="item" />
            </template>
        </ModuleSlider>
        <ModuleSlider :items="Categories" class="pt-16" title="Top Categories" :breakpoints="breakpoints" :center="true">
            <template #item="{ item }">
                <CategoryCard :category-date="item" />
            </template>
        </ModuleSlider>
        <TheOurProducts />
        <TheAbout />
        <ModuleSlider :items="products" class="pt-16" title="Recently Products">
            <template #item="{ item }">
                <ProductCard :product-date="item" />
            </template>
        </ModuleSlider>
    </section>
</template>
<script setup>
const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '5',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        active: true,
        new: true,
        salesPrice: '',
        sales: false,
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '2',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        active: false,
        new: false,
        salesPrice: '$25',
        sales: true,
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '3',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        active: false,
        new: false,
        salesPrice: '',
        sales: false,
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '4',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        active: false,
        new: false,
        salesPrice: '',
        sales: false,
    },
]
const Categories = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '5',
        imageAlt: "Front of men's Basic Tee in black.",
        count: '35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '2',
        imageAlt: "Front of men's Basic Tee in black.",
        count: '35',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '3',
        imageAlt: "Front of men's Basic Tee in black.",
        count: '35',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '4',
        imageAlt: "Front of men's Basic Tee in black.",
        count: '35',
        color: 'Black',
    },
    {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '2',
        imageAlt: "Front of men's Basic Tee in black.",
        count: '35',
        color: 'Black',
    },
    {
        id: 6,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '4',
        imageAlt: "Front of men's Basic Tee in black.",
        count: '35',
        color: 'Black',
    },
]
const breakpoints = {
    320: {
        slidesPerView: 1,
        spaceBetween: 10
    },
    640: {
        slidesPerView: 2,
        spaceBetween: 10
    },
    768: {
        slidesPerView: 4,
        spaceBetween: 12
    }, 
}
</script>