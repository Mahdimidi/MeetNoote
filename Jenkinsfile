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
                sh "git clone https://github.com/Mahdimidi/meetBoard.git"
            }
        }
        
        stage ("Generate meetBoard/Back-end Project image") {
            steps {
                dir("meetBoard/Back-end Project"){ 
                    sh "mvn clean install"
                    sh "docker build -t back-i ."
                }
            }
        }
        
        stage ("Generate meetBoard/projet_angular image") {
            steps {
                dir("meetBoard/projet_angular"){ 
                    sh "npm install"
                    sh "npm run build"
                    sh "docker build -t front-i ."
                }
            }
        }
        
        stage ("Run docker compose") {
            steps {
                dir("meetBoard"){
                    sh "docker compose up -d "
                }
            }
        }
    }                        
}