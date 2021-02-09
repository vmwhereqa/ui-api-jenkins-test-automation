pipeline {
    agent any
    node {
    git url: 'https://github.com/vmwhereqa/ui-api-jenkins-test-automation'
    sh 'yarn'
    
    stages {
        stage('build') {
            steps {
                sh 'yarn'
            }
        }
    }
    }
}
