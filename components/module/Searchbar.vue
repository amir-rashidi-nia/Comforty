<template>
    <form class="max-w-sm ml-auto w-full">
        <label for="default-search" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                    class="w-4 h-4 text-gray-200 z-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 20 20">
                    <path
                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input
                id="default-search" v-model="tracknumber" type="search" placeholder="شماره پیگیری سفارش..."
                class="block w-full p-4 ps-10 bg-transparent text-sm outline-none focus:ring-primary focus:ring-2 placeholder:text-textInverted appearance-none rounded-lg ring-0 gradient shadow-sm">
            <BaseButton class="absolute end-2.5 bottom-2.5 max-w-12" @click.prevent="seachHandler">جستجو</BaseButton>
        </div>
    </form>
</template>
<script setup>
const tracknumber = ref(null);
const route = useRoute();
async function seachHandler() {
    return navigateTo(`${route.path}?search=search&tracknumber=${tracknumber.value}`)
}
</script>