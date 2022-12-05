<template>
    <main>
        <!--SEZIONE 1-->
        <FirstSection/>
        <SecondSection/>

    </main>
</template>

<script>

import FirstSection from './FirstSection.vue'
import SecondSection from './SecondSection.vue'

    export default {
        name: 'MainComp',
        components: {
            FirstSection,
            SecondSection
        }
    }
</script>

<style lang="scss" scoped>

</style>