import express from "express";
import dotenv from "dotenv";
import { createAdapter } from "./adapter";
import { ConnectionOptions, Queue, QueueScheduler, RedisOptions } from "bullmq";
import { HelloWorldJob } from "./jobs";
dotenv.config();

const app = express();

const QUEUE_PORT = process.env.QUEUE_PORT || 3010;
const REDIS_PORT = process.env.REDIS_PORT || 5050;

const redisOptions = {
  host: "localhost",
  port: REDIS_PORT,
} as ConnectionOptions;

/* Setup */
const queues = {
  testQueue: new Queue("testQueue", {
    connection: redisOptions,
  }),
};

const schedulers = {
  testQueue: new QueueScheduler(queues.testQueue.name, {
    connection: redisOptions,
  }),
};

/* Queue modifiers */
const addJobToTestQueue = (job: HelloWorldJob) => {
  queues.testQueue.add(job.type, job);
};

/* End points */
app.post("/testQueue", async (_req, res) => {
  try {
    await addJobToTestQueue({
      type: "PrintHelloWorld",
      data: { hello: "world" },
    });
  } catch (error: any) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  } finally {
    return res.status(201).send({ queued: true });
  }
});

/* Adapter for testing UI */
const adapter = createAdapter("/bull-board", queues);

/* Server set up */
app.use("/bull-board", adapter.getRouter());

app.listen(QUEUE_PORT, () => {
  console.log(`Example app listening on port ${QUEUE_PORT}`);
  console.log(
    `Bull-board is available at: http://localhost:${QUEUE_PORT}/bull-board`
  );
});
