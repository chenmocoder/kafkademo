const kafka = require("kafka-node");

const client = new kafka.KafkaClient({
    kafkaHost: '192.168.209.36:9092,192.168.209.38:9092,192.168.209.38:9093'
});

const Producer = kafka.Producer;
const KeyedMessage = kafka.KeyedMessage;
const producer = new Producer(client);

const topics = [{
    topic: 'test2',
    partitions: 1,
    replicationFactor: 3
}];

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
            topic: "test2",
            messages: "hello kafka!!! i'm huihui",
        }], (err, data) => {
            console.log("send msg = :" + JSON.stringify(data));
        })
    },5000)

});
producer.on('error', (err) => {
    console.log(err);
})