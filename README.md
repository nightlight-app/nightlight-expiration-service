# nightlight-queue-service

### _Backend micro-service for handling asynchronous jobs, expiring data, and other delayed database actions._

## **How to use**

_You need the docker cli and docker desktop for this to work_

1. Open up docker desktop to ensure that the docker daemon is running.
2. Open up a split terminal.
3. In any terminal: `npm install`
4. In any terminal: `docker compose up`
5. On one terminal: `npm server start`
6. On the other terminal: `npm worker start`

---

## **To test**

Go to post man or HTTP client and post to the endpoints in server.ts

Open [BullBoard Dashboard](http://localhost:${QUEUE_PORT}/bull-board) to view status of queue requests and history.
