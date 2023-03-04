<template>
    <div class="container projects-div">
      <h1> Projects </h1>
      <p>
        As long as my father loves magazines pastime games I decided to challenge
        myself and deploy some of his most liked games.
      </p>
      <div class="container d-flex justify-content-center cards-div">
        <div class="card border border-light" v-for="project in projects" :key="project.name">
          <h4 class="card-header">
            <h5 class="card-title">{{ project.name }} </h5>
          </h4>
          <div class="card-body">
            <p class="card-text">{{ project.dsc}}</p>
            <a :href="project.link" class="btn btn-primary" target="_blank">Access</a>
            <a class="btn git-btn me-2" :href="project.gitLink" role="button" target="_blank">
              <i class="bi bi-github text-light fs-4"></i>
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
      projects: Array,
    },
  };
  </script>
  
  <style scoped>
  .projects-div {
    margin-top: 4vh;
  }

  .git-btn:hover {
  background: linear-gradient(to bottom, #007bff, #42d392);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
    margin-top: 3vh;
    max-width: 25vw;
    min-width: 200px;
    border: 1px solid black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .btn:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }


  .btn-primary:hover {
    background-color: #007bff;
    background-image: linear-gradient(to bottom, #007bff, #42d392);
  }
  
  .card-title {
    font-size: 1.5rem;
  }
  </style>