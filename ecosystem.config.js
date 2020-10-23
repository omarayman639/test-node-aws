module.exports = {
    apps: [{
      name: 'test-node-2',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-3-138-191-238.us-east-2.compute.amazonaws.com',
        key: 'D:/Development/test-aws/test-node-key.pem',
        ref: 'origin/master',
        repo: 'https://github.com/omarayman639/test-node-aws.git',
        path: '/home/ubuntu/node-test-2',
        ssh_options: 'ForwardAgent=yes',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }