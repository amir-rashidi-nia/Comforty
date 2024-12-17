<template>
    <div class="flex min-h-full flex-1 flex-col justify-center py-12 px-4">
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[648px]">
            <div class="bg-[#ffff] px-6 py-12 rounded-lg sm:px-10 shadow-[0_0px_30px_0px_#2723431F]">
                <h2 class="text-center text-3xl font-semibold leading-8 tracking-tight text-text pb-6">
                    Sign in
                </h2>
                <form class="space-y-6" action="#">
                    <BaseInput name="email" type="email" label="Email"/>
                    <BaseInput name="password" :type="passwordTypeInput" label="Password" icon="SvgoEye" @change="changeInputType"/>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox"
                                class="h-5 w-5 appearance-none border-2 rounded border-textInverted text-[#007580] focus:ring-[#007580]" />
                            <label for="remember-me" class="ml-3 block text-sm text-[#636270]">
                                Remember me
                            </label>
                        </div>

                        <div class="text-base">
                            <a href="#" class="font-medium text-[#007580]">Forgot Password</a>
                        </div>
                    </div>
                    <BaseButton class="bg-[#029FAE] text-white w-full h-[52px] text-base font-semibold">
                        Sign in
                        <SvgoArrow class="ml-2 rotate-180 text-xl" />
                    </BaseButton>
                </form>


                <p class="mt-6 text-center text-sm text-text">
                    Don’t have account?
                    {{ ' ' }}
                    <a href="#" class="font-medium text-[#007580] hover:text-[#007580]">
                        Sign Up
                    </a>
                </p>

            </div>
        </div>
    </div>
</template>
<script setup>
const passwordTypeInput = ref('password')
function changeInputType() {
    if(passwordTypeInput.value == 'password') {
        passwordTypeInput.value = 'text'
    } else{
        passwordTypeInput.value = 'password'
    }
}
</script>