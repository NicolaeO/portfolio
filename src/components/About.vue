<template>
    <div class="container">
        <div class="about-me">
            <h2 class="text-center">Nicolae Orlov</h2>
            <h4 class="text-center">a.k.a. Nick</h4>
            <div class="text-center">
                <p class="d-inline-block pr-3">Phone: <a href="tel:1-872-999-0045">(872)-999-0045</a></p>
                <p class="d-inline-block pr-3">Email: <a href="mailto:nicu104@gmail.com">nicu104@gmail.com</a></p>
                <p class="d-inline-block">LinkedIn: <a href="https://www.linkedin.com/in/nicolae-orlov/">linkedin.com/in/nicolae-orlov</a></p>
            </div>

            <div class="row">

                <div class="col-md-8 col-sm-12">
                    <ul>
                        <li>
                            Over 4 years of experience in development, maintaining and deploying web applications using Python, Django, JavaScript, HTML and CSS. While collaborating and mapping the requirements to the system.
                        </li>
                        <li>
                            Great experience at different companies with different backgrounds writing Python scripts to parse JSON documents and load the data in database. Using ETL methodology with different databases like PostgreSQL, MSSQL and MySQL.
                        </li>
                        <li>
                            Experience in using AWS services like EC2, S3 and some experience with lambda.
                        </li>
                        <li>
                            Good working knowledge with Linux and Windows environments.
                        </li>
                        <li>
                            Experience in building Python API’s (RESTful Web Service) using Django MVC and Django REST framework.
                        </li>
                        <li>
                            Ability to easily slide into any project and start hitting goals from the very first day.
                        </li>
                        <li>
                            Over 2 years of experience in using Atlassian tools like Bitbucket for Code version and repository, Confluence for Documentation and JIRA for Ticketing and agile workflow especially Kanban board. 
                        </li>
                    </ul>
                </div>
                <div class="col-md-4 col-sm-12 text-center" id="linkedin_profile" :inner-html.prop="linkedInHtml()">
                    
                </div>
            </div>
        </div>

        <div class="cards-container" v-if="experience.length != 0">
            <div class="mt-2 col-md-6 col-sm-12 pl-md-1" v-for="exp of experience" :key="exp.id">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title"><b>{{ exp.title }}</b> at {{ exp.company }}</h4>
                        <h6 class="card-subtitle mb-2 text-muted">{{ exp.date_start }} - {{ exp.date_end }}</h6>
                        <p class="card-text">
                            {{ exp.description }}
                        </p>
                        <div :inner-html.prop="exp.technologies_used | badgeCreator"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    import { LinkedIn } from '../assets/js/profile.js';

    export default {
        name: 'About',
        data() {
            return {
                experience: [],
                base_url: "http://nicolaeorlov.com/",
            }
        },
        created (){
            fetch(`${this.base_url}api/resume`)
            .then(response => {
                    return response.json();
            })
            .then(res => {
                this.experience = res;
            });
            document.title = "About";
        },
        filters: {
            badgeCreator: function(value){
                let tech_used = value.split(",");
                let html = "";
                for(let tech of tech_used){
                    html += `<span class="badge badge-primary">${tech}</span> `;
                }
                return html;
            }
        },
        methods: {
            LinkedIn,
            linkedInHtml(){
                return `<div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="nicolae-orlov"><a class="LI-simple-link" href='https://www.linkedin.com/in/nicolae-orlov/en-us?trk=profile-badge'>Nicolae Orlov</a></div>`;
            }
        },
        updated() {
            this.LinkedIn(window);
        }
    }
</script>



<style scoped>
    .cards-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .card {
        background-color: rgba(255, 255, 255, 0.75);
        height: 100%;
    }
    
    .linkedin-alert-light {
        color:rgba(255, 255, 255, 0.75)
    }
</style>