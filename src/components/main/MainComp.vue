<template>
    <main>
        <!--SEZIONE 1-->
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <ThirdSection2/>

    </main>
</template>

<script>

import FirstSection from './FirstSection.vue'
import SecondSection from './SecondSection.vue'
import ThirdSection from './ThirdSection.vue'
import ThirdSection2 from './ThirdSection2.vue'

    export default {
        name: 'MainComp',
        components: {
            FirstSection,
            SecondSection,
            ThirdSection,
            ThirdSection2
        }
    }
</script>

<style lang="scss" scoped>

</style>