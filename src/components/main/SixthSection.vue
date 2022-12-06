<template>
    <!--INIZIO SEZIONE-->
    <section class="section6">
        <!--TEXT CONT-->
        <div class="text-cont">
            <h2>"I've failed over and over again in my life. And that is why I succeed."</h2>
                    <!--CONTAINER ICONE-->
                    <div class="icon-cont">
                        <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave" />
                        <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave" />
                        <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave" />
                    </div>
                    <!--PARAGRAFO-->
                    <p>Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. In lacinia
                        lacus donec sed massa in ipsum eros, tristique. Gravida suspendisse etiam 
                        in iaculis
                    </p>
                    <div class="btn-cont">
                        <button class="btn-buy">Buy avada today <span><font-awesome-icon icon="fa-solid fa-angle-right" /></span></button>
                    </div>                   
        </div> 
    </section>
</template>

<script>
    export default {
        name: 'SixthSection'
    }
</script>

<style lang="scss" scoped>

.section6{
    background-image: url('../../assets/img/banner2-2x.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 320px;
    
}

.overlay-box{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,1);
    display: flex;
    justify-content: center;
}

.text-cont h2{
    color: white;
    font-size: 3.5rem;
    text-align: center;
}

.text-cont{
    width: 45%;
    padding-top: 230px;
}

.icon-cont{
    text-align: center;
    margin-top: 20px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon-wave{
    color: yellow;
}

.text-cont  p{
    font-size: 1.6rem;
    color:#979798;
    text-align: center;
    padding: 10px;
    font-weight: bold;
}

.btn-buy{
    background-color: #4154FF;
    padding: 20px;
    color: white;
    border-radius: 40px;
    text-align: center;
    border: none;
    width: 25%;
}

.btn-buy:hover{
    background-color: white;
    color: black;
    cursor: pointer;
    font-weight: bold;
}


.btn-cont{
    text-align: center;
    margin-top: 30px;
}

</style>