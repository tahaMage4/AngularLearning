pipeline {
    agent any
    stages {
        stage('Clone Code') {
            steps {
                echo "Clone the project"
                git url : "https://github.com/tahaMage4/AngularLearning.git", branch: "main"
            }
        }
        stage('Run Locally') {
            steps {
                echo "Run Locally"
                sh "apt update"
                sh "apt install nodejs"
                sh "node -v"
                sh "npm -v"
            }
        }
        stage('Build & Deploy the Docker') {
            steps {
                echo "Build & Deploy the Docker"
                sh "docker compose down && docker compose up"
            }
        }
    }
}
