# nightlight-queue-service

### _Backend micro-service for handling asynchronous jobs, expiring data, and other delayed database actions._

## **How to use**

_You need the docker cli and docker desktop for this to work_

1. Open up docker desktop to ensure that the docker daemon is running.
2. Open up 3 split terminals.
4. In any terminal: `npm install`
5. In any terminal: `docker compose up`
6. In one terminal: `brew install redis`
7. In another terminal: `npm server start`
8. In the final terminal: `npm worker start`

---

## **To test**

Go to post man or HTTP client and post to the endpoints in server.ts

Open [BullBoard Dashboard](http://localhost:${QUEUE_PORT}/bull-board) to view status of queue requests and history.
