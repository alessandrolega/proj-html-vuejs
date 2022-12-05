<template>
    <main>
        <!--SEZIONE 1-->
        <FirstSection/>
        <!--SEZIONE 2-->
        <SecondSection/>
        <!--SEZIONE 3-->
        <ThirdSection/>
        <!--SEZIONE 3 PARTE 2 INTERNA-->
        <ThirdSection2/>
        <!--SEZIONE 4-->
        <FourthSection/>

    </main>
</template>

<script>

import FirstSection from './FirstSection.vue'
import SecondSection from './SecondSection.vue'
import ThirdSection from './ThirdSection.vue'
import ThirdSection2 from './ThirdSection2.vue'
import FourthSection from './FourthSection.vue'

    export default {
        name: 'MainComp',
        components: {
            FirstSection,
            SecondSection,
            ThirdSection,
            ThirdSection2,
            FourthSection
        }
    }
</script>

<style lang="scss" scoped>

</style>