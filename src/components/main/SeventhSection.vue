<template>
    <!--INIZIO SEZIONE-->
    <section class="section6">
        <!--CONTAINER 70-->
        <div class="container">
            <!--CARD CONTAINER-->
            <div class="card-cont">
                <!--CARDS-->
                <div class="card">
                    <!--CARD HEAD-->
                   <div class="card-head">
                        <img src="../../assets/img/sponsor-1-2x.png" alt="yoga-studio">
                        <!--ICON CONT-->
                        <div class="icon-cont">
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                        </div>         
                   </div> 
                   <!--CARD BODY-->
                   <div class="card-body">
                    <!--PARAGRAFO CARD BODY-->
                        <p>Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in
                            suspendisse dolor, aliquet.
                        </p>
                   </div>
                   <!--CARD FOOTER-->
                   <div class="card-footer">
                        <span>Visit Yoga Studio <font-awesome-icon icon="fa-solid fa-angle-right" /></span>
                   </div>
                </div>
                <div class="card">
                    <!--CARD HEAD-->
                   <div class="card-head">
                        <img src="../../assets/img/sponsor-2-2x.png" alt="fitness-center">
                        <!--ICON CONT-->
                        <div class="icon-cont">
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                        </div>
                   </div> 
                   <!--CARD BODY-->
                   <div class="card-body">
                    <!--PARAGRAFO CARD BODY-->
                        <p>Feugiat etiam dui mauris pharetra mauris sed pharetra. Convallis sapien ornare cras faucibus
                            nulla porta dui a.
                        </p>
                   </div>
                   <!--CARD FOOTER-->
                   <div class="card-footer">
                    <!--SPAN CARD FOOTER-->
                        <span>Join Fitness Center <font-awesome-icon icon="fa-solid fa-angle-right" /></span>
                   </div>
                </div>
                <div class="card">
                    <!--CARD HEAD-->
                   <div class="card-head">
                        <img src="../../assets/img/sponsor-3-2x.png" alt="fitness-club">
                        <!--ICON CONT-->
                        <div class="icon-cont">
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                        </div>
                   </div> 
                   <!--CARD BODY-->
                   <div class="card-body">
                    <!--PARAGRAFO CARD BODY-->
                        <p>Nisl at quam adipiscing montes, nec, adipiscing commodo aliquam tincidunt. Ligula
                            in habitant et sagittis imperdiet.
                        </p>
                   </div>
                   <!--CARD FOOTER-->
                   <div class="card-footer">
                    <!--SPAN CARD FOOTER-->
                        <span>Learn about FC <font-awesome-icon icon="fa-solid fa-angle-right" /></span>
                   </div>
                </div>
                <div class="card">
                    <!--CARD HEAD-->
                   <div class="card-head">
                        <img src="../../assets/img/sponsor-4-2x.png" alt="power-gym">
                        <!--ICON CONT-->
                        <div class="icon-cont">
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                        </div>
                   </div> 
                   <!--CARD BODY-->
                   <div class="card-body">
                    <!--PARAGRAFO CARD BODY-->
                        <p>Proin in viverra maecenas et mattis ut nibh enim. Gravida ultricies
                            mi porta lacus. Et posuere velit sed nec eleifend.
                        </p>
                   </div>
                   <!--CARD FOOTER-->
                   <div class="card-footer">
                    <!--SPAN CARD FOOTER-->
                        <span>Visit Power Gym <font-awesome-icon icon="fa-solid fa-angle-right" /></span>
                   </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SeventhSection'
    }
</script>

<style lang="scss" scoped>

.section6{
    padding-bottom: 160px;
}

.container{
    width: 70%;
    margin: 0 auto;
}

.card-cont{
    display: flex;
    gap: 50px;
    margin-top: 100px;
}

.card-head > img{
    width: 60%;
}

.card-head{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.card{
    width: calc(100% / 4);
    text-align: center; 
}

.icon-cont{
    color: #4154FF;
    margin-top: 30px;
}

.card-body p{
    padding-top: 20px;
    padding-bottom: 30px;
    font-size: 1.2rem;
    color:grey;
}

.card-footer span{
    font-weight: bold;
}

</style>