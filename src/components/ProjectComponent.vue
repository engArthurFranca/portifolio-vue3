<template>
    <div class="container projects-div">
        <h1> Projects </h1>
        <p> As long as my father loves magazines pastime games I decided to challenge myself and deploy some of his most liked games.</p>
        <div class="container d-flex justify-content-center cards-div">
            <div class="card border border-light" v-for="project in projects" :key="project.name">
                <h4 class="card-header"> <h5 class="card-title">{{ project.name }} </h5></h4>
                <div class="card-body">
                    <p class="card-text">{{ project.dsc}}</p>
                    <a :href="project.Link" class="btn btn-primary">Access</a>
                    <a :href="project.gitLink" class="btn btn-outline-light border-0">
                        <i class="bi bi-github"></i>
                    </a>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
    name: "ProjectComponent",
    props: {
        projects: Array
    }
}
</script>

<style scoped>
.projects-div {
    margin-top: 4vh;
}

a {
    margin-left: 5px;
}

p {
    margin-top: 3vh;
}
.cards-div {
    margin-top: 3vh;
    margin-bottom: 2vh;
    flex-wrap: wrap;
}

.card {
    background: inherit;
    margin-left: 3vw;
    margin-bottom: 2vh;
    max-width: 25vw;
    min-width: 200px;
}
</style>