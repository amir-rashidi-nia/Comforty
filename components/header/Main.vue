<template>
    <div class="bg-[#F0F2F3]">
        <div class="container mx-auto px-4 py-4">
            <div class="mx-auto flex items-center justify-between gap-x-8">
                <div class="flex items-center gap-x-2">
                    <img src="/img/Logo.png" alt="logo" class="h-10 w-10 flex-none" />
                    <h1>
                        <div class="text-26 font-medium text-text">Comforty</div>
                    </h1>
                </div>
                <div class="hidden md:flex items-center bg-[#ffff] h-[44px] rounded-[5px] px-4">
                    <input placeholder="Search here..."
                        class="placeholder:text-textInverted placeholder:text-base appearance-none border-0" />
                    <SvgoSearch filled class="text-text text-xl" />
                </div>
                <div class="hidden sm:flex items-center gap-x-2 text-text">
                    <BaseButton class="bg-[#ffff] text-xs space-x-2 h-[44px]">
                        <SvgoCart filled class="text-xl mr-2" />
                        Cart
                        <span
                            class="w-5 h-5 rounded-full bg-[#007580] flex items-center justify-center text-white text-10">
                            2
                        </span>
                    </BaseButton>
                    <BaseButton class="bg-[#ffff] w-[44px] h-[44px]">
                        <p class="sr-only">favorite</p>
                        <SvgoHeart filled class="text-xl" />
                    </BaseButton>
                    <BaseButton class="bg-[#ffff] w-[44px] h-[44px]">
                        <p class="sr-only">Account</p>
                        <SvgoUser filled class="text-xl" />
                    </BaseButton>
                    <BaseButton class="bg-[#ffff] w-[44px] h-[44px] block md:hidden">
                        <p class="sr-only">Search</p>
                        <SvgoSearch filled class="text-text text-xl" />
                    </BaseButton>
                </div>
                <div class="sm:hidden relative text-text">
                    <button type="button" @click="isShow = !isShow">
                        <p class="sr-only">option</p>
                        <SvgoThreedot filled class="text-text text-xl" aria-hidden="true" />
                    </button>
                    <Transition>
                        <div v-if="isShow" class="absolute bg-[#fff] py-2 px-3 rounded right-0 shadow-[0_0px_30px_0px_#2723431F]">
                            <ul class="divide-y">
                                <li class="py-1">
                                    Search
                                </li>
                                <li class="py-1">
                                    favorite
                                </li>
                                <li class="py-1">
                                    Account
                                </li>
                            </ul>
                        </div>
                    </Transition>
                </div>
              </div>
        </div>
    </div>
</template>
<script setup>
const isShow = ref(false)
</script>