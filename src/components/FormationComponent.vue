<template>
    <div class="container justify-content-center">
        <h2> Educational Formations </h2>
        <div class="table-responsive">
            <table class="table text-light">
                <tbody>
                    <tr v-for="formation in formations" :key="formation.id">
                        <td>{{ formation.date }}</td>
                        <td style="float: left">
                            <h6>{{ formation.title }}</h6>
                            <h7>{{ formation. institution }}</h7>
                            <p> {{ formation.dsc }}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

export default {
    name: 'FormationComponent',
    props: {
        formations: Array
    }
}
</script>

<style scoped>
table {
    border-bottom-width: 0px;
}

.container {
    margin-top: 4vh;
}

.table-responsive {
    margin-top: 3vh;
}

</style>
