pipeline {
    agent any
    tools {
        maven 'maven'
        nodejs 'NodeJs'
    }
    stages {
        stage ("Clean up"){
            steps {
                deleteDir()
            }
        }
        
        stage ("Clone repo"){
            steps {
                sh "git clone https://github.com/Naouresss/projet_pds_part1.git"
            }
        }
        
        stage ("Generate projet_pds_part1/Back-end Project  image") {
            steps {
                dir("projet_pds_part1/Back-end Project"){ 
                    sh "mvn clean install"
                    sh "docker build -t springboot ."
                }
            }
        }
        
        stage ("Generate spring-angular/angular-app image") {
            steps {
                dir("spring-angular/angular-app"){ 
                    sh "npm install"
                    sh "npm run build"
                    sh "docker build -t angular-app ."
                }
            }
        }
        
        stage ("Run docker compose") {
            steps {
                dir("spring-angular"){
                    sh "docker compose up -d "
                }
            }
        }
    }                        
}
