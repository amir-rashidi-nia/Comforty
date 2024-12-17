<template>
    <div class="pt-16 flex flex-col items-center space-y-4">
        <h2 class="text-text font-bold text-3xl text-center">{{ title }}</h2>
        <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select a topic</label>
            <select id="tabs" name="tabs"
                class="block w-full rounded-md text-text">
                <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
            </select>
        </div>
        <div class="hidden sm:block">
            <div class="">
                <nav class="-mb-px flex gap-x-4" aria-label="Tabs">
                    <a 
                        v-for="tab in tabs" 
                        :key="tab.name" 
                        :href="tab.href"
                        :class="[tab.current ? 'border-[#038053] text-text' : 'border-transparent text-textInverted hover:text-text', 'border-b-2 py-2 px-1 text-center text-base font-medium']"
                        :aria-current="tab.current ? 'page' : undefined">
                        {{ tab.name }}
                    </a>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
    },
    tabs: {
        required: true,
        type: Object,
    },
})

</script>