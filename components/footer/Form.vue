<template>
    <div class="mt-10 xl:mt-0">
        <h3 class="font-medium text-sm  text-textInverted">NEWSLETTER</h3>
        <form class="mt-4 sm:flex sm:max-w-md">
            <label for="email-address" class="sr-only">Email address</label>
            <input type="email" name="email-address" id="email-address" autocomplete="email" required=""
                class="w-full min-w-0 appearance-none rounded-md border-0 bg-transparent px-3 py-1.5 text-base shadow-sm ring-1 ring-inset ring-[#E1E3E5] placeholder:text-textInverted focus:ring-2 focus:ring-inset focus:ring-[#029FAE] sm:w-64 xl:w-full"
                placeholder="Your email" />
            <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <BaseButton class="text-white bg-[#029FAE] h-[46px]">Subscribe</BaseButton>
            </div>
        </form>
        <p class="mt-4 text-15 text-text/60">
            The latest news, articles, and resources, sent to your inbox
            weekly.
        </p>
    </div>
</template>