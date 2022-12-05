<template>
    <section class="section1">
        <div class="container">
            <div class="section1-cont">
                <div class="text-cont">
                    <h1>Certified fitness professional</h1>
                    <h2>Take control of your health</h2>
                    <div class="icon-cont">
                        <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave" />
                        <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave" />
                        <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave" />
                    </div>
                    <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolori sit amet. </p>
                </div>
                <div class="btn-container1">
                    <button class="btn-visit-yt"><font-awesome-icon icon="fa-brands fa-youtube" /><span class="span-btn">Visit my Youtube Channel</span></button>
                    <button class="btn-buy-avada1">Buy Avada today <span class="icon-arrow-right"><font-awesome-icon icon="fa-solid fa-arrow-right" /></span></button>
                </div>
                <button class="circle-btn-cont">
                        <font-awesome-icon icon="fa-solid fa-play" class="icon-play"/>
                </button>

            </div>

        </div>
        <button class="btn-demos"><font-awesome-icon icon="fa-solid fa-folder" class="icon-folder" /><p>Demos</p></button>
        <button class="btn-sales"><font-awesome-icon icon="fa-solid fa-dollar-sign" class="icon-dollar" /><span class="price">39</span><p>On Sale</p></button>
       

    </section>
</template>

<script>
    export default {
        name: 'FirstSection'
    }
</script>

<style lang="scss" scoped>

.section1{
    background-image: url('../../assets/img/slider82x-scaled.jpg') ;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    
}

.container{
    width: 70%;
    margin: 0 auto;
}

.section1-cont{
    padding-top: 80px;
    padding-bottom: 280px;
    position: relative;
}

.icon-wave{
    color: yellow;
    
}
.text-cont{
    width: 55%;
}

.text-cont > h1{
    color: #FF413C;
    padding: 10px;
}

.text-cont > h2{
    font-size: 4.3rem;
    color: white;
    padding: 10px;
    margin-bottom: 10px;
}

.text-cont  p{
    font-size: 1.3rem;
    color:#979798;
    padding: 10px;
    margin-top: 10px;
}

.icon-cont{
    margin-left: 10px;
}

.btn-container1{
    display: flex;
}

.btn-visit-yt{
    background-color: #4154FF;
    padding: 20px;
    color: white;
    border-radius: 40px;
    margin-right: 20px;
    margin-top: 20px;
}

.btn-visit-yt:hover{
    background-color: #ff414b;
    cursor: pointer;
}


.span-btn{
    padding: 5px;
}

.btn-buy-avada1{
    background-color: black;
    color: #A6A6A6;
    border-color: #979798;
    border-radius: 40px;
    padding: 10px;
    width: 15%;
    margin-top: 20px;
}

.btn-buy-avada1:hover{
    background-color: white;
    color: black;
    cursor: pointer;
    font-weight: bold;
}

.icon-arrow-right{
    padding: 5px;
}

.circle-btn-cont{
    position: absolute;
    top: 240px;
    right: 120px;
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

.btn-demos{
    position: absolute;
    top: 35px;
    right: 20px;
    padding: 12px;
    border: none;
    border-radius: 5px;
    color: #33475b;
    font-weight: bold;
}

.btn-sales{
    position: absolute;
    top: 95px;
    right: 20px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: #33475b;
    font-weight: bold;
}

.icon-dollar{
    color: limegreen;
    width: 10px;
    margin-bottom: 15px;
}

.price{
    color: limegreen;
    font-size: 2rem;
    font-weight: bold;
}

.icon-folder{
        width: 25px;
    }

</style>