pipeline {
    agent any
    tools {
        maven 'maven'
        nodejs 'node'
    }
    stages {
        stage ("Clean up"){
            steps {
                deleteDir()
            }
        }
        
        stage ("Clone repo"){
            steps {
                sh "git clone https://github.com/Mahdimidi/MeetNoote.git"
            }
        }
         
        stage ("Generate MeetNoote/front_projet_finale image") {
            steps {
                dir("MeetNoote/front_projet_finale/"){ 
                    sh "npm install"
                    sh "npm run build"
                    sh "docker build -t front-i ."
                }
            }
        }
        stage ("Generate meetnote/Back-end Project image") {
            steps {
                dir("MeetNoote/Back-end Project"){ 
                    sh "mvn clean install"
                    sh "docker build -t back-i ."
                }
            }
        }
       
        
        stage ("Run docker compose") {
            steps {
                dir("MeetNoote"){
                    sh "docker compose up -d "
                }
            }
        }
    }                        
}
