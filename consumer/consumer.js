const kafka = require("kafka-node");

const client = new kafka.KafkaClient({
    kafkaHost: '192.168.209.38:9092'
});
console.log("////");
const Consumer = kafka.Consumer;
const consumer = new Consumer(client, [{
    topic: "test2",
    partition : 0,
    offset : 0,
}], {
    autoCommit: true
});

consumer.on("message", (msg) => {
    console.log("receive msg ：" + JSON.stringify(msg))
})