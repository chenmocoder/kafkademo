#项目中使用 kafka作为 一个实时的 消息系统推送设备的实时状态顾 花点时间 看看kafka 做技术储备

* 1了解kafka 最好的 途径就是从官方文档 
https://kafka.apache.org/ 
全文当 是英文的，我一般会 看英文官方文档 再结合 国内一些好的文章来辅助理解，毕竟有些名词 不好理解。
此处推荐一篇文章 微信公众号上的 一篇技术文章
http://mp.weixin.qq.com/s?__biz=MjM5MjE4MjU5OA==&mid=2650796139&idx=1&sn=bbc8284d425db41acb3c0b9456e31544&chksm=bea1684289d6e154e7a3ac7a19a3a50b1287b0f3b6fbff25bdbc9e8fa859f2017f58357addb7&mpshare=1&scene=24&srcid=1122B8S25U9GtAj1HlHdIoqD#rd
此文章我觉得 讲得很好。

* 2最近在测试环境 搭建kafka集群 试试，到时候 整理一下遇到的 坑 再次总结一下，以便后面查找问题 

搭建集群貌似都会碰到 不能解析域名的问题。其实仔细看 官方文档，在下载的kafka目录里面 config/server.properties配置文件里面就有详细的说明：
摘抄出来 提醒大家 注释写的很清楚

 The address the socket server listens on. It will get the value returned from 
 java.net.InetAddress.getCanonicalHostName() if not configured.
   FORMAT:
     listeners = listener_name://host_name:port
   EXAMPLE:
     listeners = PLAINTEXT://your.host.name:9092
listeners=PLAINTEXT://192.168.209.36:9092

Hostname and port the broker will advertise to producers and consumers. If not set, 
it uses the value for "listeners" if configured.  Otherwise, it will use the value
returned from java.net.InetAddress.getCanonicalHostName().
advertised.listeners=PLAINTEXT://127.0.0.1:9093

还有一种解决办法就是 配置host文件，添加 ip 域名 映射，在集群相互连接时 可以解析到ip建立 socket连接。

除此之外好像就没有什么大的问题了，主要还是 仔细看官方文档，这个很重要 看官方文档,仔细看有关 server的配置（server.properties,zookeeper.properties）配置 在config目录下.

目前技术算是基本打通了(真正的问题估计会在实际使用及测试中才会更多的涌现出来).接着就是适应具体的业务配合业务做封装 ，利用。

* 3准备抽空在详细看看其原理。

下一步准备 整整 kafka的周边 kafka监控管理 
目标使用官方生态 推荐的 kafkamanager,

