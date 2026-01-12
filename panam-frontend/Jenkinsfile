pipeline {
    agent any
     tools {
        nodejs 'node-18'
    }

    stages {
        
       

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependancies'){
            steps{
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
