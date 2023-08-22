<template>
  <div>
    <div class="gradient-div p-3">
      <img src="../assets/profile.png" class="img-fluid rounded-circle border border-white border-3">
      <h1 class="text-gradient">{{ profile.name }}</h1>
      <div class="mt-4">
        <a v-for="social in profile.socials" :key="social.name" class="btn social-btn me-2" :href="social.link" role="button" target="_blank">
          <i :class="'bi bi-' + social.name + ' text-light fs-4'"></i>
        </a>
      </div>
    </div>
    <br>
    <div class="container">
        <p class="lead mb-4">Looking for a skilled and ambitious software engineer who is eager to join your team? Look no further!</p>
        <div class="text-gray">
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
.gradient-div {
  background: linear-gradient(to bottom, rgb(66, 68, 82), rgb(33,37,41));
}

.img-fluid {
  background: linear-gradient(to bottom, #007bff, #42d392);
}

.social-btn:hover {
  background: linear-gradient(to bottom, #007bff, #42d392);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

img {
  width: 10vw;
}

.text-gradient {
  background: linear-gradient(to bottom, #007bff, #42d392);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

.text-gray p {
  margin-bottom: 1rem;
  color: #c7c7c7;
}
</style>