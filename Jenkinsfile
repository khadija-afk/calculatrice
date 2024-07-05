pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('git checkout') {
            steps {
               git branch: 'main', url: 'https://github.com/khadija-afk/calculatrice.git'
            }
        }
        stage('installation dependances') {
            steps {
                bat 'npm install'
            }
        }
        stage('exuction test') {
            steps {
                bat 'npm test'
                echo 'fin test'
            }
        }
    }
}
