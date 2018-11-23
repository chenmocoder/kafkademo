const kafka = require("kafka-node");

const client = new kafka.KafkaClient({
    kafkaHost: '127.0.0.1:9092'
});

const Consumer = kafka.Consumer;
const consumer = new Consumer(client, [{
    topic: "test",
    partition: 0,
    offset: 0
}], {
    autoCommit: false
});

consumer.on("message", (msg) => {
    console.log("receive msg ：" + JSON.stringify(msg))
})