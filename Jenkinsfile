node {
   stage('Install') {
      git 'https://github.com/vmwhereqa/ui-api-jenkins-test-automation.git'
   }
   stage('Build') {
     
         sh "cd ui-api-jenkins-test-automation"
         sh "yarn"
      
   }
   stage('Setup') {
        sh "test"

   }
   stage('Results') {
        echo seleniumPID
   }
}
