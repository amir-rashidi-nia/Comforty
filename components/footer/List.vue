<template>
    <div>
        <h3 class="text-sm font-medium text-textInverted">{{ title }}</h3>
        <ul role="list" class="mt-4 space-y-3">
            <li v-for="item in list" :key="item.name">
                <a :href="item.href" class="text-base text-text hover:text-[#007580] hover:underline">{{ item.name }}</a>
            </li>
        </ul>
    </div>
</template>
<script setup>
const props = defineProps({
    title: {
        default: false,
    },
    list: {
        required: true,
        type: Array,
    },
})
</script>