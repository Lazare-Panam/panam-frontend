pipeline {
    agent any
     tools {
        nodejs 'node-22'
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

        

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
