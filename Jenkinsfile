pipeline {
    agent any
    stages {
        stage('Clone Code') {
            steps {
                echo "Clone the project"
                git url : "https://github.com/tahaMage4/AngularLearning.git", branch: "main"
            }
        }
        stage('Build the Docker') {
            steps {
                echo "Build the docker Image"
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploy the Container"
                sh "docker compose down && docker compose up -d"
            }
        }
    }
}
