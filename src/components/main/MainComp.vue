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
        <!--SEZIONE 4 PARTE DUE INTERNA-->
        <FourthSection2/>
        <!--SEZIONE 5-->
        <FifthSection/>
        <!--SEZIONE 6-->
        <SixthSection/>
        <!--SEZIONE 7-->
        <SeventhSection/>
        <!--SEZIONE 8-->
        <EighthSection/>

    </main>
</template>

<script>

import FirstSection from './FirstSection.vue'
import SecondSection from './SecondSection.vue'
import ThirdSection from './ThirdSection.vue'
import ThirdSection2 from './ThirdSection2.vue'
import FourthSection from './FourthSection.vue'
import FourthSection2 from './FourthSection2.vue'
import FifthSection from './FifthSection.vue'
import SixthSection from './SixthSection.vue'
import SeventhSection from './SeventhSection.vue'
import EighthSection from './EighthSection.vue'

    export default {
        name: 'MainComp',
        components: {
            FirstSection,
            SecondSection,
            ThirdSection,
            ThirdSection2,
            FourthSection,
            FourthSection2,
            FifthSection,
            SixthSection,
            SeventhSection,
            EighthSection
        }
    }
</script>

<style lang="scss" scoped>

</style>