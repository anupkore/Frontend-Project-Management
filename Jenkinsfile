pipeline {
  agent {
    node {
      label 'docker'
    }
  }
  stages {
    stage('Build') {
      steps {
        script {
          docker.image('registry.access.redhat.com/ubi8/nodejs-16:1').inside {
            // Perform build steps here
            sh 'docker build -t myapp .'
          }
        }
      }
    }
    stage('Test') {
      steps {
        script {
          docker.image('myapp').inside {
            // Perform test steps here
            sh 'npm test'
          }
        }
      }
    }
    stage('Deploy') {
      steps {
        script {
          docker.image('registry.access.redhat.com/ubi8/nodejs-16:1').inside {
            // Perform deployment steps here
            sh 'docker push yjb28/project-management-app:v.1'
          }
        }
      }
    }
  }
}
