# How to run the application
## Backend
Build:
```
./server: npm i
```
Environment Variables:
`./server/.env` file:
```
MONGODB_URI=[mongo db connection string]
PORT=[port number]
```
Run:
```
./server: npm start
```
## Frontend
Build:
```
./client: npm i
```
Host url is defined inside `./client/src/utils/getApiEndpoint.ts`.
Run:
```
./client: npm run dev
```
