const kue = require('kue')
const redisConfig = require('../../config/redis')
const MeetupSubscription = require('../Jobs/MeetupSubscription')

const Queue = kue.createQueue({ redis: redisConfig })

Queue.process(MeetupSubscription.key, MeetupSubscription.handle)

module.exports = Queue
