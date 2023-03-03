<template>
  <div class="container my-5">
    <h2 class="text-center">Educational Formations</h2>
    <div class="table-responsive">
      <table class="table table-striped bg-dark">
        <tbody>
          <tr v-for="formation in formations" :key="formation.id">
            <td class="align-middle"><h4 class="text-light">{{ formation.date }}</h4></td>
            <td>
              <h4 class="text-light mb-1">{{ formation.title }}</h4>
              <a :href="formation.institutionLink" role="button" target="_blank">
                <h6 class="text-muted mb-3">{{ formation.institution }}</h6>
              </a>
              
              <p class="text-light">{{ formation.dsc }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormationComponent",
  props: {
    formations: Array,
  },
};
</script>

<style scoped>
h2 {
  font-size: 2.5rem;
}

.table {
  border-radius: 10px;
  overflow: hidden;
  margin-top: 2em;
}

th,
td {
  vertical-align: middle !important;
}

.table td,
.table th {
  border-top: none !important;
  padding: 1.25rem !important;
}

.table td h4 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.table td h6 {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.table td p {
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 0;
  color: #c7c7c7;
}

@media (max-width: 576px) {
  .table td h4 {
    font-size: 1rem;
  }
}
</style>