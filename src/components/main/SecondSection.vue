<template>
    <!--INIZIO SEZIONE-->
    <section class="section2">
        <!--CONTAINER 70-->
        <div class="container">
            <!--CONTAINER SECTION-->
            <div class="section2-cont">
                <!--CARD CONTAINER-->
                <div class="card-cont">
                    <!--CARD SECTION 1-->
                    <div class="card-section1">
                        <!--CARD OVERLAY TRASPARENTE-->
                        <div class="card-overlay">
                            <!--TEXT CONTAINER-->
                            <div class="card1-text-cont">
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <h2>Crossfit workout</h2>
                            <h3>Push your limits</h3>
                        </div>
                        </div>  
                    </div>
                    <div class="card-section2">
                        <!--CARD SECTION 2-->
                        <div class="card-overlay">
                            <!--CARD OVERLAY TRASPARENTE-->
                            <div class="card1-text-cont">
                                <!--TEXT CONTAINER-->
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <h2>New gym apparel</h2>
                            <h3>Look good, feel good</h3>
                        </div>
                        </div>  
                    </div>
                    <div class="card-section3">
                        <!--CARD SECTION 2-->
                        <div class="card-overlay">
                            <!--CARD OVERLAY TRASPARENTE-->
                            <div class="card1-text-cont">
                                <!--TEXT CONTAINER-->
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <h2>Team training</h2>
                            <h3>Find a partner</h3>
                        </div>
                        </div>  
                    </div>
                </div>
                <!--CONTAINER PARAGRAFO CITAZIONE-->
                <div class="text-container">
                    <p>"How you respond to the challenge in the second half will
                        determine what you become after the game, wheter you are
                        winner or loser."</p>
                        <!--CONTAINER ICONE-->
                        <div class="icon-cont">
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave" />
                        </div>
                        <!--CONTAINER SPAN TESTIMONIAL-->
                        <div class="brad-cont">
                            <img class="pic-cont" src="../../assets/img/avatar-1-2x.jpg" alt="avatar">
                            <span class="brad-span1">Brad Johnson</span>
                            <span class="brand-span2">Las Vegas</span>
                        </div>     
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SecondSection'
    }
</script>

<style lang="scss" scoped>

.section2{
    background-image: linear-gradient(to right bottom, blue,  #ff0076);
    padding-bottom: 200px;
}

.container{
    width: 70%;
    margin: 0 auto;
}

.section2-cont{
    position: relative;
}

.card-section1{
    background-image: url('../../assets/img/service6-2x.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 300px;
    width: 300px;
    border-bottom-right-radius:20px;
    position: relative;
    
}
.card-section2{
    background-image: url('../../assets/img/box1-2x.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 300px;
    width: 300px;
    border-bottom-right-radius:20px;
    position: relative;
}

.card-section3{
    background-image: url('../../assets/img/box3-2x.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 300px;
    width: 300px;
    border-bottom-right-radius:20px;
    position: relative;
}

.card-cont{
     display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -50px;
}

.text-container{
    margin-top: 100px;
}

.text-container > p{
    text-align: center;
    color: white;
    font-size: 3.9rem;
    font-weight: bold;
}

.icon-cont{
    text-align: center;
    color: yellow;
    margin-top: 30px;
}

.card1-text-cont{
    position: absolute;
    bottom: 30px;
    left: 30px;
}

.card-wave{
    color: white;
    margin-bottom: 10px;
}

.card1-text-cont h2{
    color: white;
}

.card1-text-cont h3{
    color: yellow;
}

.pic-cont{
    text-align: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    vertical-align: middle;
}

.brad-cont{
    text-align: center;
}

.brad-span1{
    padding-left: 20px;
    padding-right: 20px;
    color: white;
    font-weight: bold;
}

.brand-span2{
    color: lightgrey;
}

.card-overlay{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    border-bottom-right-radius:20px;
}

</style>