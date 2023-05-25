pipeline {
  agent {
    docker {
      image 'yjb28/project-management-app:v.1'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }
  stages {
    stage('Build') {
      steps {
        // Perform build steps here
        sh 'docker build -t myapp .'
      }
    }
    stage('Test') {
      steps {
        // Perform test steps here
        sh 'docker run myapp npm test'
      }
    }
    stage('Deploy') {
      steps {
        // Perform deployment steps here
        sh 'docker push yjb28/project-management-app:v.1'
      }
    }
  }
}
