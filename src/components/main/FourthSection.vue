<template>
    <!--SEZIONE 4-->
    <section class="section4">
        <!--OVERLAY DIV TRASPARENTE-->
        <div class="overlay-box">
            <!--CONTAINER 70-->
            <div class="container">
                <!--TEXT CONT-->
                <div class="text-cont">
                    <h1>Join our mailing list today</h1>
                    <h2>Insider offers & flash sales in your inbox every week.</h2>
                    <!--CONTAINER ICONE-->
                    <div class="icon-cont">
                        <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave" />
                        <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave" />
                        <font-awesome-icon icon="fa-solid fa-wave-square" class="icon-wave" />
                    </div>
                    <!--INPUT TEXT-->
                    <input type="text" class="input-text" placeholder="Insert your email...*">
                    <!--BUTTON SUBSCRIBE-->
                    <button class="btn-subscribe">Subscribe</button>
                    <!--PARAGRAFO SECTION-->
                    <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolori sit amet,
                        consectetur adipiscing elit sed porttitor lectus.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'FourthSection'
    }
</script>

<style lang="scss" scoped>

.section4{
    background-image: url('../../assets/img/banner1-2x.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.overlay-box{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
}

.container{
    width: 70%;
    margin: 0 auto;
}

.text-cont{
    width: 60%;
    padding-top: 100px;
    padding-bottom: 180px;
}


.text-cont > h1{
    color: #FF413C;
    padding-bottom: 40px;
    
}

.text-cont > h2{
    font-size: 3.6rem;
    color: white;
    margin-bottom: 10px;
}

.icon-wave{
    color: yellow;
    padding-top: 30px;
    padding-bottom: 50px;

}
.input-text{
    width: 65%;
    padding: 15px;
    border-radius: 20px;
    border: none;
}

.btn-subscribe{
    background-color: #4154FF;
    color: white;
    padding: 15px;
    border-radius: 20px;
    border: none;
    width: 30%;
    margin-left: 20px;
}

.btn-subscribe:hover{
    background-color: #ff414b;
    cursor: pointer;
}

.text-cont  p{
    font-size: 1.3rem;
    color:#979798;
    padding-top: 40px;
}


</style>