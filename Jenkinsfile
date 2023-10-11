pipeline {
    agent any
    stages {
        stage('Clone Code') {
            steps {
                echo "Clone the project"
                git url : "https://github.com/tahaMage4/AngularLearning.git", branch: "main"
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
