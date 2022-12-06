<template>
  <div id="app">
    <HeaderComp :navbarData="navbar"/>
    <MainComp/>
    <FooterComp :footerNav="footerNav"/>
    
  </div>
</template>

<script>
import HeaderComp from './components/header/HeaderComp.vue'
import MainComp from './components/main/MainComp.vue'
import FooterComp from './components/footer/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp
  },
 data(){
  return {
    navbar: [
      {
        name: 'Home',
        url: 'https://www.google.com'
      },
      {
        name: 'Services',
        url: 'https://www.google.com'
      },
      {
        name: 'About',
        url: 'https://www.google.com'
      },
      {
        name: 'Videos',
        url: 'https://www.google.com'
      },
      {
        name: 'Blog',
        url: 'https://www.google.com'
      },
      {
        name: 'Store',
        url: 'https://www.google.com'
      }
    ],
    footerNav: [
      {
        name: 'The best protein shake',
        url: 'https://www.google.com'
      },
      {
        name: 'Ultimate cardio workout',
        url: 'https://www.google.com'
      },
      {
        name: 'New juices available now',
        url: 'https://www.google.com'
      },
      {
        name: 'Tips to find training partners',
        url: 'https://www.google.com'
      },
      {
        name: '20 best healthy recipes',
        url: 'https://www.google.com'
      }
    ]
 
  }
 }

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed&family=Montserrat&display=swap');

#app{
  font-family: 'Barlow Semi Condensed', sans-serif;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul li{
    list-style: none;
}

</style>
