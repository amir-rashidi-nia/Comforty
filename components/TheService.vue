<template>
    <section class="mx-auto w-full px-4 -translate-y-[30%] lg:-translate-y-[50%]">
        <div
            class="mx-auto z-40 rounded-xl bg-[#ffff] shadow-[0_24px_100px_0px_#16193212] px-8 lg:px-12 py-12 grid grid-cols-1 max-w-xs sm:container sm:grid-cols-2 lg:flex flex-row lg:gap-x-12 xl:gap-x-24 items-center justify-center">
            <div v-for="service in services" :key="service?.id" class="flex space-x-6">
                <component :is="service.icon" class="text-6xl text-text" />
                <div>
                    <h4 class="text-text text-lg font-medium">
                        {{ service.title }}
                    </h4>
                    <p class="text-textInverted text-15">
                        {{ service.subTitle }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const services = ref([
    { id: 1, icon: 'SvgoBox', title: 'Discount', subTitle: 'Every week new sales' },
    { id: 2, icon: 'SvgoTruck', title: 'Free Delivery', subTitle: '100% Free for all orders' },
    { id: 3, icon: 'SvgoHours', title: 'Great Support 24/7', subTitle: 'Every week new sales' },
    { id: 4, icon: 'SvgoShield', title: 'Secure Payment', subTitle: 'Every week new sales' },
])
</script>