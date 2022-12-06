<template>
    <!--INIZIO SEZIONE-->
    <section class="section4-part2">
        <!--CONTAINER 70-->
        <div class="container">
            <!--CARD CONTAINER-->
            <div class="card-container">
                <!--CARDS-->
                <div class="card">
                    <!--CARD HEAD-->
                    <div class="card-head">
                        <font-awesome-icon icon="fa-solid fa-clock" class="icon-card" />
                        <h3>Team training</h3>
                        <h4>Find a partner</h4>
                    </div>
                    <!--CARD BODY-->
                    <div class="card-body">
                        <p>Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing.Nisl sit fames 
                            amet senectus eget sed duis vehicula.
                            <br>
                            Tristique. 
                        </p>
                    </div>
                    <!--CARD FOOTER-->
                    <div class="card-footer">
                        <span>Find a partner <font-awesome-icon icon="fa-solid fa-angle-right" /></span>
                    </div>
                </div>
                <div class="card card-hover">
                    <!--CARD HEAD-->
                    <div class="card-head">
                        <font-awesome-icon icon="fa-solid fa-dumbbell" class="icon-card" />
                        <h3>Crossfit workout</h3>
                        <h4>Push your limits</h4>
                    </div>
                    <!--CARD BODY-->
                    <div class="card-body">
                        <p>Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing.Nisl sit fames 
                            amet senectus eget sed duis vehicula.
                            <br>
                            Tristique. 
                        </p>
                    </div>
                    <!--CARD FOOTER-->
                    <div class="card-footer">
                        <span>Learn about Crossfit <font-awesome-icon icon="fa-solid fa-angle-right" /></span>
                    </div>
                </div>
                <div class="card">
                    <!--CARD HEAD-->
                    <div class="card-head">
                        <font-awesome-icon icon="fa-solid fa-child-reaching" class="icon-card" />
                        <h3>Weight loss plan</h3>
                        <h4>Shed those pounds</h4>
                    </div>
                    <!--CARD BODY-->
                    <div class="card-body">
                        <p>At laoreet senectus volutpat diam vel sed sed amet pellentesque. Lobortis ut aliquam
                            risus purus. A tellus ut etiam. 
                        </p>
                    </div>
                    <!--CARD FOOTER-->
                    <div class="card-footer">
                        <span>Schedule a workout <font-awesome-icon icon="fa-solid fa-angle-right" /></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'FourthSection2'
    }
</script>

<style lang="scss" scoped>

.section4-part2{
    background-color: black;
    padding-bottom: 100px;
}

.container{
    width: 70%;
    margin: 0 auto;
}

.card-container{
    display: flex;
    gap: 50px;
    padding-top: 100px;
}

.card{
    width: calc(100% / 3);
    border-radius: 8px;
    border: 3px solid #4154FF;
    text-align: center;
    padding-bottom: 80px;
}

.icon-card{
    color: white;
    font-size: 3rem;
}

.card-head{
    margin-top: 50px;
}

.card-head h3{
    color: white;
    padding-top: 20px;
    padding-bottom: 10px;
}

.card-head h4{
    color: yellow;
}

.card-body{
    padding: 70px;
}

.card-body > p{
    color: #979798;
    font-size: 1.3rem;
    text-align: center;
}

.card-footer span {
    color: white;
    font-weight: bold;
}

.card-hover:hover{
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>