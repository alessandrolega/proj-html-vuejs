<template>
    <!--INIZIO FOOTER-->
    <footer class="footer-section">
        <!--CONTAINER-->
        <div class="container">
            <!--FOOTER CONT-->
            <div class="footer-cont">
                <!--FOOTER CARDS-->
                <div class="card">
                    <!--CARD HEAD-->
                    <div class="card-head">
                        <img src="../../assets/img/logo.png" alt="logo">
                    </div>
                    <!--CARD BODY-->
                    <div class="card-body">
                        <p>Ac aliquam neque sagittis diam faucibus vitae
                            purus turpis phasellus. Pellentesque consectetur amet
                            purus ultrices mauris.
                        </p>
                    </div>
                    <!--CARD FOOTER-->
                    <div class="card-footer">
                        <!--ICON CONT-->
                        <font-awesome-icon icon="fa-brands fa-facebook-f" class="icon-footer" />
                        <font-awesome-icon icon="fa-brands fa-twitter" class="icon-footer" />
                        <font-awesome-icon icon="fa-brands fa-youtube" class="icon-footer" />
                        <font-awesome-icon icon="fa-brands fa-instagram" class="icon-footer" />
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" class="icon-footer" />
                    </div>
                </div>
                <div class="card">
                    <h3>RECENT POSTS</h3>
                    <!--CARD BODY-->
                <div class="card-body">
                    <!--FOOTER MENU DINAMICO-->
                    <ul>
                        <li v-for="(element, index) in footerNav"
                        :key="index"
                        :footernav="element"><span><font-awesome-icon icon="fa-solid fa-angle-right" /></span> {{element.name}}</li>
                    </ul>
                </div>
                </div>
                <div class="card">
                    <h3>CONTACT INFORMATIONS</h3>
                    <p>4746 Tipple Road Michigan 48449</p>
                    <span>Mobile : 1.800.000.0000</span>
                    <span>Email : info@your-company.com</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'FooterComp',
        props: {
            footerNav: Array
        }
    }
</script>

<style lang="scss" scoped>

.container{
    width: 70%;
    margin: 0 auto;
}

.footer-section{
    background-color: black;
    padding-bottom: 100px;
}

.footer-cont{
    display: flex;
    gap: 120px;
    padding-top: 100px;
}

.card{
    width: calc(100% / 3);
    text-align: center;
}

.card h3{
    color: white;
}
.card-body p{
    text-align: center;
    padding: 20px;
    font-size: 1.1rem;
    color: #979798;
    font-weight: bold;
}

.card p{
    text-align: center;
    padding: 20px;
    font-size: 1.1rem;
    color: #979798;
    font-weight: bold;
}

.card span{
    text-align: center;
    padding: 5px;
    font-size: 1.1rem;
    color: white;
    font-weight: bold;
}

.card-footer{
    margin-top: 30px;
}

.icon-footer{
    color: #FF414B;
    padding-left: 5px;
    padding-right: 5px;
}

ul  li {
    color: white;
    padding-top: 20px;
}

</style>