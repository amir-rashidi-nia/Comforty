<template>
    <nav class="relative w-full py-12" aria-label="Breadcrumb">
        <div class="absolute w-full inset-0 -z-10 bg-[#F0F2F3] rounded-b-[48px] overflow-hidden" aria-hidden="true">
        </div>
        <div class="mx-auto container px-4 flex flex-col gap-2 w-">
            <ol role="list" class="flex items-center space-x-2">
                <li>
                    <div>
                        <a href="#" class="text-sm text-textInverted hover:text-gray-700">
                            Home
                        </a>
                    </div>
                </li>
                <li v-for="page in pages" :key="page.name">
                    <div class="flex items-center">
                        <SvgoChevron filled class="text-sm rotate-[270deg] flex-shrink-0 text-[#636270]" aria-hidden="true" />
                        <a 
                            :href="page.href" class="ml-2 text-sm  hover:text-gray-700"
                            :class="[ page.current ? 'text-text font-medium' : 'text-textInverted' ]"
                            :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
                    </div>
                </li>
            </ol>
            <h2 class="text-2xl font-semibold text-text">Sign in</h2>
        </div>
    </nav>
</template>

<script setup>

const pages = [
    { name: 'Account', href: '#', current: false },
    { name: 'Sign in', href: '#', current: true },
]
</script>