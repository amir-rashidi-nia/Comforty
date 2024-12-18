<template>
    <div class="relative isolate overflow-hidden px-10 pb-24">
        <div class="absolute inset-0 -z-10 md:mx-[2%] bg-[#F0F2F3] rounded-b-[48px] overflow-hidden" aria-hidden="true">
            <span class=" absolute -top-40 right-[20%] w-[747px] h-[747px] bg-[#E1E3E5] rounded-full"></span>
        </div>
        <div class="container mx-auto px-4">
            <div class="pb-24 sm:pb-32 lg:flex lg:justify-between lg:py-24">
                <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-28">
                    <div class="mt-24 sm:mt-32 lg:mt-16">
                        <p href="#" class="inline-flex text-text text-sm leading-4 tracking-widest">
                            Welcome to chairy
                        </p>
                    </div>
                    <h1 class="mt-2 text-4xl font-bold tracking-tight text-text sm:text-6xl">
                        Best Furniture
                        Collection for your
                        interior.
                    </h1>
                    <div class="mt-10 flex items-center gap-x-6">
                        <BaseButton class="text-white bg-[#029FAE] h-[52px] px-6 gap-x-6 text-base font-semibold">
                            Shop Now
                            <SvgoArrow class="text-2xl text-white rotate-180" />
                        </BaseButton>
                    </div>
                </div>
                <div class="hidden mx-auto lg:flex relative">
                    <div class="flex flex-col items-center justify-center h-[124px] w-[140px] rounded-full absolute -top-10 -right-10 font-medium text-sm bg-white text-text">
                        <span class="text-4xl font-bold text-[#F05C52]">54%</span>
                        Discount
                    </div>
                    <div class="flex-none">
                        <img src="/img/chair.png" alt="App screenshot" />
                    </div>
                </div>
            </div>
        </div>
        <button
            class="hidden absolute top-4 2xl:inset-y-0 2xl:my-auto 2xl:left-[3%] bg-[#ffff]  lg:flex items-center justify-center rounded-full h-[52px] w-[52px]">
            <p class="sr-only">slider controller</p>
            <SvgoArrow class="text-xl text-[#007580]" />
        </button>
        <button class="hidden absolute top-4 left-24 2xl:inset-y-0 2xl:my-auto 2xl:left-auto 2xl:right-[3%] bg-[#ffff]  lg:flex items-center justify-center rounded-full h-[52px] w-[52px]">
            <p class="sr-only">slider controller</p>
            <SvgoArrow class="text-xl text-[#007580] rotate-180" />
        </button>
        <div class="hidden lg:block absolute inset-x-0 mx-auto bottom-32 space-x-2 text-center">
            <button class="h-3 w-3 rounded-full bg-textInverted">
                <p class="sr-only">slider slide btn</p>
            </button>
            <button class="h-3 w-3 rounded-full bg-text">
                <p class="sr-only">slider slide btn</p>
            </button>
            <button class="h-3 w-3 rounded-full bg-textInverted">
                <p class="sr-only">slider slide btn</p>
            </button>
        </div>
    </div>
</template>

<script setup>

</script>