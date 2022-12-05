<template>
    <!--CONTAINER 70-->
    <section class="container">
        <!--SPAN CONTAINER-->
        <div class="span-container">
            <div class="playlist">
                <span>Featured playlists</span>
            </div>
            <div class="videos">
                <span>View all videos <font-awesome-icon icon="fa-solid fa-angle-right" /></span>
            </div>
        </div>
            <!--CARDS CONTAINER-->
            <div class="cards-container">
                <!--CARDS-->
                <div class="card card1">
                    <!--PLAY BUTTON-->
                    <button class="circle-btn-cont"><font-awesome-icon icon="fa-solid fa-play" class="icon-play"/></button>
                    <!--TEXT CONTAINER-->
                <div class="text-container">
                            <div class="text-cont">
                                <h3>Thighs & glute workout</h3>
                                <a href="#">Increase your mobility</a>
                            </div>
                        </div>
                </div>
                <div class="card card2">
                    <!--PLAY BUTTON-->
                    <button class="circle-btn-cont"><font-awesome-icon icon="fa-solid fa-play" class="icon-play"/></button>
                    <!--TEXT CONTAINER-->
                 <div class="text-container2">
                            <div class="text-cont">
                                <h3>Lift, firm & perk up</h3>
                                <a href="#">Feel young again</a>
                            </div>
                        </div>
                </div>
                <div class="card card3">
                    <!--PLAY BUTTON-->
                    <button class="circle-btn-cont"><font-awesome-icon icon="fa-solid fa-play" class="icon-play"/></button>
                    <!--TEXT CONTAINER-->
                 <div class="text-container3">
                            <div class="text-cont">
                                <h3>Slim & trim your waist</h3>
                                <a href="#">Shed those extra pounds</a>
                            </div>
                        </div>
                </div>    
            </div>
    </section>
</template>

<script>
    export default {
        name: 'ThirdSection2'
    }
</script>

<style lang="scss" scoped>

.container{
    width: 70%;
    margin: 0 auto;
    padding-bottom: 100px;
}

.span-container{
    display: flex;
    justify-content: space-between;
}

.cards-container{
    display: flex;
    justify-content: space-between;
    gap: 40px;
    padding-bottom: 100px;
    position: relative;
}

.card{
    background-size: cover;
    background-repeat: no-repeat;
    width: calc(100% / 3);
    height: 300px;
    background-position: center;
    border-bottom-right-radius:20px;
    
}

.card1{
    background-image: url('../../assets/img/video2-2x.jpg');
    display: flex;
    justify-content: center;
    align-items: center;
}

.card2{
    background-image: url('../../assets/img/video7-2x.jpg');
    display: flex;
    justify-content: center;
    align-items: center;
}

.card3{
    background-image: url('../../assets/img/video9-2x.jpg');
    display: flex;
    justify-content: center;
    align-items: center;
}

.playlist > span{
    font-size: 1.2rem;
    font-weight: bold;
}

.videos{
    margin-top: 5px;
    margin-bottom: 40px;
}

.videos > span{
    font-size: 1.1rem;
    font-weight: bold;

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

.icon-play:hover{
    color: #ff414b;
    cursor: pointer;
}

.text-container, .text-container2, .text-container3{
    position: absolute;
    bottom: 30px;
}

.text-cont{
    text-align: center;
}

a{
    text-decoration: none;
    color: #4154FF;
    font-weight: bold;
    font-size: 15px;
}

h3{
    padding-bottom: 10px;
}




</style>