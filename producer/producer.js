const kafka = require("kafka-node");

const client = new kafka.KafkaClient({
    kafkaHost: '127.0.0.1:9092'
});

const Producer = kafka.Producer;
const KeyedMessage = kafka.KeyedMessage;
const producer = new Producer(client);

const topics = [{
    topic: 'test',
    partitions: 1,
    replicationFactor: 1
} ];

client.createTopics(topics, (error, result) => {
    if(error) {
        console.log(error);
    }
    if(result) {
        console.log(result);
        console.log("topic created successfully!!!!!!!!!!")
    }
});

producer.on("ready", () => {
    setInterval(() => {
        producer.send([{
            topic: "test",
            messages: "hello kafka!!! i'm tianhuihui",
        }], (err, data) => {
            console.log("send msg = :" + JSON.stringify(data));
        })
    },1000)

});
producer.on('error', (err) => {
    console.log(err);
})