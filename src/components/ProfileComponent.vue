<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 col-lg-3 text-center">
          <img alt="Profile Picture" src="../assets/profile.jpg" class="img-fluid rounded-circle">
          <div class="mt-4">
            <a v-for="social in profile.socials" :key="social.name" class="btn btn-dark me-2" :href="social.link" role="button" target="_blank">
              <i :class="'bi bi-' + social.name"></i>
            </a>
          </div>
        </div>
        <div class="col-12 col-lg-9">
          <h1 class="text-gradient mb-4">{{ profile.name }}</h1>
          <p class="lead mb-4">Looking for a skilled and ambitious software engineer who is eager to join your team? Look no further!</p>
          <p class="mb-4" v-for="paragraph in profile.about" :key="paragraph">{{ paragraph }}</p>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "ProfileComponent",
    props: {
      profile: Object,
    },
  };
  </script>
  <style scoped>
  img {
    width: 10vw;
  }
  
  .text-gradient {
    background: linear-gradient(to bottom, #007bff, #42d392);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .btn-dark {
    background-color: #343a40;
    border-color: #343a40;
    margin-top: 10px;
  }
  
  .btn-dark:hover {
    background-color: #1d2124;
    border-color: #1d2124;
  }
  
  .container {
    width: 90%;
  }
  
  @media (min-width: 992px) {
    img {
      width: 20vw;
    }
  
    .container {
      max-width: 900px;
    }
  }

  @media (max-width: 990px) {
    img {
        width: 30vw;
    }
}

@media (max-width: 768px) {
  img {
    width: 50vw;
  }
}
</style>