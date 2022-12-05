<template>
    <header>
        <!--LOGO-->
      <div class="container logo-cont header-flex">
        <img src="../../assets/img/logo-2x.png" alt="logo">
         <!--NAV-->
      <nav>
        <ul>
            <!--NAVBAR DINAMICA-->
            <li v-for="(element,index) in navbarData"
            :key="index"
            :navbarData="element"><a href="#">{{element.name}}</a></li>  
        </ul>
        <!--SPAN NEW-->
        <span class="span-header">new</span>
        <!--BUTTON-->
        <button class="header-btn">Schedule a workout</button>
        <!--ICONE-->
        <font-awesome-icon icon="fa-solid fa-cart-shopping" class="icon1" />
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon2" />
      </nav>
      </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComp',
        props: {
            navbarData: Array
        }
    }
</script>

<style lang="scss" scoped>

header{
    background-color: #060607;
    padding: 30px;
    color: white;
}

.container{
    width: 70%;
    margin: 0 auto;
}

.header-flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-cont > img{
    width: 200px;
}

nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

ul{
    display: flex;
    align-items: center;
}

ul li{
    padding-left: 20px;
    padding-right: 20px;
}

li a{
    text-decoration: none;
    font-size: 20px;
    color: #979798;
    font-weight: bold;
}

li a:hover{
    color: white;
}

.span-header{
    background-color: #FFF941;
    color: black;
    padding: 7px;
    border-radius: 2px;
}

.header-btn{
    background-color: #4154FF;
    padding: 15px;
    color: white;
    border-radius: 20px;
    margin-right: 30px;
    margin-left: 30px;
}

.header-btn:hover{
    background-color: #ff414b;
    cursor: pointer;
}

.icon1, .icon2{
    color: #979798;
    margin-left: 20px;
    margin-right: 20px;
}

.icon1:hover, .icon2:hover{
    cursor: pointer;
    color: white;
}

</style>