import amqplib from "amqplib";
import dotenv from "dotenv";
import { QueueEvent } from "../../utils/constant.queue";
dotenv.config();

class MessageQueue {
  private nameQueue: string;
  private url_mq_cloud: string;

  constructor() {
    this.nameQueue = QueueEvent.ProductQueueName;
    this.url_mq_cloud = process.env.AMQP_URL_CLOUD_PRODUCT_SERVICE || "";
  }

  public async connectMessageQueue(nameQueue: string) {
    const connect = await amqplib.connect(this.url_mq_cloud);
    if (!connect) throw new Error("Error Connect RabbitMQ");
    const channel = await connect.createChannel();

    return {
      channel,
      connect,
    };
  }

  public async consumerQueue(channel: any, queueName: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        await channel.assertQueue(queueName, { durable: true });
        console.log("Waiting for Message ...");
        //
        channel.consume(
          queueName,
          (message: any) => {
            resolve(JSON.parse(message.content));
          },
          {
            noAck: true,
          }
        );
      } catch (error) {
        reject(error);
        console.error("Error", error);
      }
    });
  }
}

export default new MessageQueue();
