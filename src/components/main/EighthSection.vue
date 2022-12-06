<template>
    <!--INIZIO SEZIONE-->
    <section class="section8">
        <!--OVERLAY DIV GRADIENT-->
        <div class="overlay-box-gradient">
            <!--TEXT CONT-->
            <div class="text-cont-flex">
                <!--TEXT-CONT-CENTER-->
                <div class="text-cont-center">
                    <!--PLAY BUTTON-->
                    <button class="circle-btn-cont">
                        <font-awesome-icon icon="fa-solid fa-play" class="icon-play"/>
                </button>
                <!--TITLE-->
                    <h2>Crossfit workout of the day</h2>
                    <h3>November 15th, 2019</h3>
                    <span>View all videos <font-awesome-icon icon="fa-solid fa-arrow-right-long" /></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'EighthSection'
    }
</script>

<style lang="scss" scoped>

.section8{
    background-image: url('../../assets/img/banner14-2x.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.overlay-box-gradient{
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right bottom, rgba(0, 0, 255, 0.60), rgba(255, 0, 118, 0.40));
    padding-bottom: 180px;
    padding-top: 200px;
}

.text-cont-flex{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle-btn-cont{
    height: 80px;
    background-color: white;
    border-radius: 50%;
    width: 80px;
    border: none;
}

.icon-play{
    color: #4154FF;
}

.text-cont-center{
    text-align: center;
}

.text-cont-center h2{
    font-size: 3.5rem;
    color: white;
    padding-top: 20px;
    padding-bottom: 20px;
}

.text-cont-center h3{
    font-size: 2.5rem;
    color: yellow;
    padding-bottom: 20px;
}

.text-cont-center span{
    color: white;
}

.icon-play:hover{
    color: #ff414b;
    cursor: pointer;
}



</style>