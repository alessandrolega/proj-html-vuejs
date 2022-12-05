<template>
    <!--INIZIO SEZIONE-->
    <section class="section3">
        <!--CONTAINER SEZIONE-->
        <div class="section3-cont">
            <!--CONTAINER IMMAGINE-->
            <div class="img-cont">
                <!--OVERLAY DIV TRASPARENTE-->
                <div class="overlay-box">
                    <!--PLAY BUTTON-->
                    <button class="circle-btn-cont"><font-awesome-icon icon="fa-solid fa-play" class="icon-play"/></button>
                </div>  
            </div>
            <!--TEXT CONTAINER-->
            <div class="text-cont-sect3">
                <a href="#">Turn up your workouts</a>
                <h2>The best health & fitness advice online</h2>
                <!--CONTAINER LOGO-->
                <div class="logo2-cont">
                    <div class="logo">
                        <img src="../../assets/img/unnamed.jpg" alt="">
                    </div>
                    <!--CONTAINER SPAN-->
                    <div class="span-cont"> 
                        <span class="span-theme">ThemeFusion</span>
                        <!--YOUTUBE BUTTONS CONTAINER-->
                        <div class="youtube-cont">
                            <button class="yt-red-btn"><font-awesome-icon icon="fa-brands fa-youtube" /><span class="span-btn">YouTube</span></button>
                            <button class="btn-yt-2">999+</button>
                        </div>    
                    </div>
                </div>
                <!--PARAGRAFO SEZIONE-->
                <div class="p-sect">
                    <p>Arcu eu facilisi ut quisque placerat nunc habitant. Magna semper mauris, venenatis, leo integer sit pellentesque.</p>
                </div>
                <!--YOUTUBE BUTTON 3-->
                <div class="btn-yt-3">
                    <button class="btn-visit-yt"><font-awesome-icon icon="fa-brands fa-youtube" /><span class="span-btn">Visit my YouTube channel</span></button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ThirdSection'
    }
</script>

<style lang="scss" scoped>

.section3{
    background-color: white;
}

.container{
    width: 70%;
    margin: 0 auto;
}

.section3-cont{
    display: flex;
    align-items: center;
}

.img-cont{
    margin-top: -100px;
    background-image: url('../../assets/img/service15-2x.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    flex-basis: 70%;
    border-bottom-right-radius:20px;
    height: 800px;
    width: 100%; 
}

a{
    text-decoration: none;
    color: #4154FF;
    font-size: 1.5rem;
    font-weight: bold;
}

.text-cont-sect3{
    padding: 150px;
}

.text-cont-sect3 h2{
    font-size: 4.2rem;
    padding-top: 50px;
}

.logo2-cont{
    display: flex;
    margin-top: 40px;
}

.span-cont{
    margin-left: 10px;
}

.yt-red-btn{
    background-color: red;
    color: white;
    padding: 5px;
    border:none;
}

.btn-yt-2{
    background-color: white;
    color: grey;
    padding: 5px;
    border:none;
    border: 1px solid grey;
}

.youtube-cont{
    display: flex;
    margin-top: 10px;
    align-items: center;
}

.span-theme{
    color: grey;
}

.img-cont{
    position: relative;
}

.p-sect{
    margin-top: 30px;
}
.p-sect p{
    color: grey;
    font-size: 1.3rem;
}

.btn-visit-yt{
    background-color: red;
    padding: 20px;
    color: white;
    border-radius: 40px;
    border:none;
    width: 35%;
}

.btn-visit-yt:hover{
    background-color: #ff414b;
    cursor: pointer;
}

.btn-yt-3{
    margin-top: 30px;
}

.circle-btn-cont{
    position: absolute;
    top: 460px;
    left: 420px;
    height: 80px;
    background-color: white;
    border-radius: 50%;
    width: 80px;
    border: none;
}

.icon-play{
    color: #4154FF;
}

.icon-play:hover{
    color: #ff414b;
    cursor: pointer;
}

.overlay-box{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    border-bottom-right-radius:20px;
}

.span-btn{
    padding: 5px;
}

</style>