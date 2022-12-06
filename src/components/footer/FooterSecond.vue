<template>
    <!--INIZIO SEZIONE-->
    <div class="section-second-footer">
        <!--TEXT CONT-->
        <div class="text-container-center">
            <!--SPAN-->
            <span class="span-grey">© Copyright 2012 - 2020 | Avada theme by <span class="span-white">ThemeFusion</span>
            | All rights reserved | Powered by <span class="span-white">Alessandro Lega</span></span>
        </div>
        <!--ARROW UP-->
        <button class="btn-arrow"><font-awesome-icon icon="fa-solid fa-angle-up" /></button>
    </div>
</template>

<script>
    export default {
        name: 'FooterSecond'
    }
</script>

<style lang="scss" scoped>

.section-second-footer{
    background: black;
    border-top: 1px solid grey;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.text-container-center{
    text-align: center;
    width: 40%;
}

.span-white{
    color: white;
}

.span-grey{
    color: grey;
}

.btn-arrow{
    width: 40px;
    height: 30px;
    border:none;
    border-radius: 5px;
    background-color: #2F2F2F;
    color: white;
    position: absolute;
    bottom: 0;
    right: 70px;
}

</style>