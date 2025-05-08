<script setup lang="ts">
const localePath = useLocalePath();
let { t } = useI18n()



const navigation = {
    main: [
        { name: t('footer.quickLinks.home'), href: '/' },
        { name: t('footer.quickLinks.solutions'), href: '/solutions' },
        { name: t('footer.quickLinks.research'), href: '/research' },
        { name: t('footer.quickLinks.about'), href: '/about' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',

        },
        {
            name: 'Instagram',
            href: '#',

        },
        {
            name: 'Twitter',
            href: '#',

        },
    ],
};
console.log(t('quickLinks.home'), '城市')
console.log(navigation, '==navigation')
</script>

<template>
    <footer class="bg-gray-900 text-white" :style="{ background: 'pink' }">
        <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
            <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                {{ navigation.main }}
                <div :key="item.name" class="pb-6" v-for="item in navigation.main">
                    <Link :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">
                    {{ item.name }}===name
                    </Link>
                </div>
            </nav>
            <div class="mt-10 flex justify-center space-x-10">
                <div v-for="item in navigation.social">
                    <Link :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-300">
                    <span class="sr-only">{{ item.name }}</span>
                    <item.icon class="h-6 w-6" aria-hidden="true" />
                    </Link>
                </div>
            </div>
            <p class="mt-10 text-center text-xs leading-5 text-gray-400">
                &copy; {{ new Date().getFullYear() }} {{ t('copyright') }}
            </p>
        </div>
    </footer>
</template>

<style scoped lang="less"></style>
