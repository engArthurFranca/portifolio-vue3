<template>
  <div class="container">
    <ProfileComponent :profile="profile" />
    <hr>
    <FormationComponent :formations="formations"/>
    <hr>
    <ProjectComponent :projects="projects" />
  </div>
  
</template>

<script>
import ProfileComponent from './components/ProfileComponent.vue';
import ProjectComponent from './components/ProjectComponent.vue';
import FormationComponent from './components/FormationComponent.vue';
import dataJson from '../data/data.json';


export default {
  name: 'App',
  components: {
    ProfileComponent,
    FormationComponent,
    ProjectComponent
  },
  data () {
    return {
      profile: dataJson.profile,
      formations: dataJson.formations,
      projects: dataJson.projects
    }
  }
}
</script>

<style>

#app {
  font-family: 'Nanum', monospace;
  line-height: 1.6em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

hr {
  border-color: gray;
  border-width: 2px 0 0 0;
  height: 0;
}

h1, h2, h3, h4, h5, h6, p {
  color: #fff;
}

a {
  color: #b9c3c9;
}

a:hover {
  color: #fff;
}

.card {
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}


</style>
