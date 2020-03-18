FROM node:lts-alpine as build

RUN apk upgrade --no-cache && \
    apk add --no-cache bash git

WORKDIR /build

RUN npm install -g truffle && npm install web3

COPY . .

RUN truffle compile

CMD ["truffle", "deploy", "--network=testnet"]