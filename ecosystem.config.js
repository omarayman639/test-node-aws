module.exports = {
    apps: [{
      name: 'test-node-2',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-3-138-191-238.us-east-2.compute.amazonaws.com/',
        key: '~/.ssh/tutorial-2.pem',
        ref: 'origin/master',
        repo: 'https://github.com/omarayman639/test-node-aws.git',
        path: '/home/ubuntu/test-node-2',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }