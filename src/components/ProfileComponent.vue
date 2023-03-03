<template>
    <div>
        <img alt="Profile Picture" src="../assets/profile.jpg" class="img-fluid rounded-circle">
        <div class="container">
            <h1 class="text-gradient">{{ profile.name }}</h1>
            <p>Looking for a skilled and ambitious software engineer who is eager to join your team?</p>
            <p> Look no further!</p>
            <p>Currently pursuing a degree in Software Engineering at Uninter, I have a strong foundation in Python, Vue3, JavaScript, HTML, and CSS. Although I'm an early-career professional, I'm eager to learn new skills and have already begun to explore Django and AI.</p> 
            <p>I am excited about finding my first opportunity to contribute to a company's success and am confident that my technical skills and passion for learning will make me a valuable asset to any team. Let's work together to make great things happen!</p>
            <div>
                <a v-for="social in profile.socials" :key="social.name" class="btn btn-dark" :href="social.link" role="button"> 
                    <i :class="'bi bi-'+social.name"></i>
                </a>
            </div>
            
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'ProfileComponent',
    props: {
        profile: Object
    }
}
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

.container {
    width: 70vw;
}

</style>