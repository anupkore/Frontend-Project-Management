pipeline {
  agent {
    label 'your-agent-label' // Replace with the label of your Jenkins agent
  }
  
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    
    stage('Deploy') {
      steps {
        // Replace with your deployment commands
        // For example, deploying to a web server via FTP
        sh 'apt-get install -y lftp'
        sh 'lftp -c "open -u <ftp-username>,<ftp-password> <ftp-host>; mirror -R build/ /public_html"'
      }
    }
  }
}
