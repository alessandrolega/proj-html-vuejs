<template>
    <section class="section2">
        <div class="container">
            <div class="section2-cont">
                <div class="card-cont">
                    <div class="card-section1">
                        <div class="card1-text-cont">
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <h2>Crossfit workout</h2>
                            <h3>Push your limits</h3>
                        </div>
                    </div>
                    <div class="card-section2">
                        <div class="card1-text-cont">
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <h2>New gym apparel</h2>
                            <h3>Look good, feel good</h3>
                        </div>
                    </div>
                    <div class="card-section3">
                        <div class="card1-text-cont">
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave card-wave" />
                            <h2>Team training</h2>
                            <h3>Find a partner</h3>
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <p>"How you respond to the challenge in the second half will
                        determine what you become after the game, wheter you are
                        winner or loser."</p>
                        <div class="icon-cont">
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave" />
                            <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave" />
                        </div>
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
}

.brand-span2{
    color: lightgrey;
}


</style>