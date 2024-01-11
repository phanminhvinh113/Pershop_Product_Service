"use strict ";
import MessageQueue from "../event/rabbitmq/init.rabbitmq";

export const consumerToQueue = async (queueName: string) => {
  try {
    //
    const { channel } = await MessageQueue.connectMessageQueue(queueName);
    //
    const result = await MessageQueue.consumerQueue(channel, queueName);
    console.log({ result });
    return result;
  } catch (error) {
    console.error("Error", error);

    throw error;
  }
};
