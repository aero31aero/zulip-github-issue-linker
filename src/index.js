const zulip = require('zulip-js');

// var config = {
//   username: 'github-issue-linker-bot@chat.zulip.org',
//   apiKey: 'WA2IjWayvWrxXDljCFA6nXoVqa9IKitz',
//   realm: 'https://chat.zulip.org/api'
// };
var globaldata = "";
var config = {
  username: 'testbot-bot@zulip.localhost',
  apiKey: 'B0CU4FWEnrHvxCNU9rIGfwoTDxqLD8bh',
  realm: 'http://localhost:9991'
};

//remove /api at the end of the realm name.
//config.realm = config.realm.replace('/api','');

const client = zulip(config);


// //Send a message
// client.messages.send({
//   to: 'test',
//   type: 'stream',
//   subject: 'github-issues',
//   content: 'Further Debugging.'
// });

client.queues.register({
  event_types: ['message']
}).then((res) => {
  // Retrieve events from a queue
  // Blocking until there is an event (or the request times out)
  client.events.retrieve({
    queue_id: res.queue_id,
    last_event_id: -1,
    dont_block: false
  }).then(function(data){
    globaldata = data;
    console.log("Hello");
    console.log(data);
    console.log("FLAGS");
    console.log(data.events[0].flags);
    console.log("Message");
    console.log(data.events[0].message);
  });
});