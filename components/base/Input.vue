<template>
  <div class="relative">
    <label :for="name" class="sr-only">{{ label }}</label>
    <input 
      :type="type" 
      :name="name" 
      :id="name" 
      class="appearance-none rounded-md border-0 bg-[#F0F2F3] h-[50px] px-3 py-1.5 text-base shadow-sm text-text placeholder:text-textInverted placeholder:text-base focus:ring-2 focus:ring-inset focus:ring-[#029FAE] w-full"
      :placeholder="label" />
      <component v-if="icon" @click="emit('change')" :is="icon" filled class="absolute cursor-pointer right-5 top-0 bottom-0 my-auto -translate-y-1/2 text-text text-2xl"/>
  </div>
</template>
<script setup>
const emit = defineEmits(['change'])
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  icon: {
    type: String,
    default: "text",
  },
});
</script>