<template>
   <!--CONTAINER 70-->
   <section class="container">
        <!--SPAN CONTAINER-->
        <div class="span-container">
            <div class="playlist">
                <span>Latest articles</span>
            </div>
            <div class="videos">
                <span>Read all articles <font-awesome-icon icon="fa-solid fa-angle-right" /></span>
            </div>
        </div>
            <!--CARDS CONTAINER-->
            <div class="cards-container">
                <!--CARDS-->
                <div class="card card1">
                    <!--TEXT CONTAINER-->
                <div class="text-container">
                            <div class="text-cont">
                                <h3>The best protein shake</h3>
                                <span>By admin | November 26th, 2019 | Gym</span>
                            </div>
                        </div>
                </div>
                <div class="card card2">
                    <!--TEXT CONTAINER-->
                 <div class="text-container2">
                            <div class="text-cont">
                                <h3>Ultimate cardio workout</h3>
                                <span>By admin | November 26th, 2019 | Gym</span>
                            </div>
                        </div>
                </div>
                <div class="card card3">
                    <!--TEXT CONTAINER-->
                 <div class="text-container3">
                            <div class="text-cont">
                                <h3>New juices available now</h3>
                                <span>By admin | November 26th, 2019 | Gym</span>
                            </div>
                        </div>
                </div>    
            </div>
    </section>
</template>

<script>
    export default {
        name: 'FifthSection'
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
    margin-top: 100px;
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
    background-image: url('../../assets/img/blog4-2x.jpg');
    display: flex;
    justify-content: center;
    align-items: center;
}

.card2{
    background-image: url('../../assets/img/blog1-2x.jpg');
    display: flex;
    justify-content: center;
    align-items: center;
}

.card3{
    background-image: url('../../assets/img/blog3-2x.jpg');
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

.text-container{
    position: absolute;
    bottom: 30px;
    left: 480px;
}

.text-container2{
    position: absolute;
    bottom: 30px;
    left: 20px;

}

.text-container3{
    position: absolute;
    bottom: 30px;
    right: 170px;
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