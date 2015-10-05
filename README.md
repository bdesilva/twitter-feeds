# twitter-feeds
A UI that collect and displays twitter feeds while performing simple aggregation on them.

###### Pre-requisites:
1. Install node
2. Install gulp to run tests
  * `$ npm install --global gulp`

###### Steps to run application:
1. After git cloning, run npm install on the root folder of the application and bower install on the public folder of the application.
2. Enter twitter dev creds using command line to run application:
  * `$ NODE_ENV=development TWITTER_CONSUMER_KEY=xxxxxxx TWITTER_CONSUMER_SECRET=xxxxxxx TWITTER_ACCESS_TOKEN=3773959992-xxxxxxx ACCESS_TOKEN_SECRET=xxxxxxx node server.js`
3. Navigate to `localhost:3000` to launch Angular web application.
4. To test the api's, navigate to `localhost:3000/api/feeds`

###### NOTE: Since this is a test, I included the node_modules and bower_components folder for ease of use, however I would usually not include this and add it as part of .gitignore.

###### Future changes/notes:
1. Deploy application using Docker and either Docker-ci or Docker-compose to launch application in a docker container so it can make use of Elasticsearch for better aggregations and new search features, and be platform-agnostic where docker is installed.
  * Also this makes it a lot easier to deploy on AWS using ECS.
2. Use Redis to cache oauth creds with a TTL.
