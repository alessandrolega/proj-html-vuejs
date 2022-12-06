<template>
    <div>
        <!--FOOTER ELEMENT-->
        <FooterElement :footerNav="footerNav"/>
        <FooterSecond/>

    </div>
</template>

<script>

import FooterElement from './FooterElement.vue'
import FooterSecond from './FooterSecond.vue'


    export default {
        name: 'FooterComp',
        components: {
            FooterElement,
            FooterSecond
        },
    data() {
        return {
            footerNav: [
                {
                    name: 'The best protein shake',
                    url: 'https://www.google.com'
                },
                {
                    name: 'Ultimate cardio workout',
                    url: 'https://www.google.com'
                },
                {
                    name: 'New juices available now',
                    url: 'https://www.google.com'
                },
                {
                    name: 'Tips to find training partners',
                    url: 'https://www.google.com'
                },
                {
                    name: '20 best healthy recipes',
                    url: 'https://www.google.com'
                }
            ]
        }
    }

}
</script>

<style lang="scss" scoped>

</style>

