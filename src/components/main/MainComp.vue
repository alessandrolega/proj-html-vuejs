<template>
    <main>
        <!--SEZIONE 1-->
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>

    </main>
</template>

<script>

import FirstSection from './FirstSection.vue'
import SecondSection from './SecondSection.vue'
import ThirdSection from './ThirdSection.vue'

    export default {
        name: 'MainComp',
        components: {
            FirstSection,
            SecondSection,
            ThirdSection
        }
    }
</script>

<style lang="scss" scoped>

</style>