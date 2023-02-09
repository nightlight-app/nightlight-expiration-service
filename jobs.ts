export interface HelloWorldJob {
  type: "PrintHelloWorld";
  data: { hello: string };
}

export type WorkerJob = HelloWorldJob;
