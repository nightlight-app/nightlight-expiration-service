import { Job, Worker, WorkerOptions } from "bullmq";
import { WorkerJob } from "./jobs";
import dotenv from "dotenv";
dotenv.config();

const workerHandler = async (job: Job<WorkerJob>) => {
  switch (job.data.type) {
    case "PrintHelloWorld": {
      console.log(`Hello world!`, job.data);
      return;
    }
  }
};

const workerOptions: WorkerOptions = {
  connection: {
    host: "localhost",
    port: 5050,
  },
};

const worker = new Worker("testQueue", workerHandler, workerOptions);

console.log("Worker started!");
