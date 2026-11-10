pipeline {
    agent none

    stages {
        stage('build') {
            agent {
                label 'buildnode1'
            }
            steps {
                deleteDir()

                sh '''
                    git clone https://github.com/thejlakshmi28-debug/depoly.git
                    ls -la
                '''

                stash name: 'webpage', includes: 'portfolio-test/**'
            }
        }

        stage('deploy') {
            agent {
                label 'deploy1'
            }
            steps {
                deleteDir()

                unstash 'webpage'

                sh '''
                    rm -rf /var/www/html/*
                    cp -r deploy/* /var/www/html/
                    ls -la /var/www/html/
                '''
            }
        }
    }
}
