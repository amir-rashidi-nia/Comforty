<template>
    <component
        :is="as"
        class="flex justify-center items-center rounded-lg bg-primary px-2 py-1 text-sm font-semibold leading-6 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" type="submit">
        <slot />
    </component>
</template>
<script setup>
defineProps({
    as: {
        required: false,
        type: String,
        default: 'button'
    },
})
</script>