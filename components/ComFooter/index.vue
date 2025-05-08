<script setup lang="ts">
const localePath = useLocalePath();
let { t } = useI18n()



const navigation = {
    main: [
        { name: t('footer.quickLinks.home'), href: '/' },
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
        <div v-for="item in navigation.main">
            {{ item.name }}
        </div>
    </footer>
</template>

<style scoped lang="less"></style>
