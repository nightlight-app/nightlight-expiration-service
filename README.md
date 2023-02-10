# nightlight-queue-service

### _Backend micro-service for handling asynchronous jobs, expiring data, and other delayed database actions._

## **How to use**

1. Open up docker desktop to ensure that the docker daemon is running.
2. Open up a split terminal.
3. On one terminal: `npm server start`
4. On the other terminal: `npm worker start`

---

## **To test**

Go to post man or HTTP client and post to the endpoints in server.ts

Open [BullBoard Dashboard](http://localhost:${QUEUE_PORT}/bull-board) to view status of queue requests and history.
