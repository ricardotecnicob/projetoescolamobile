<p align="center">
<a href="#" alt="PROJETO ESCOLA MOBILE">
  </a></p>

# PROJETO ESCOLA - MOBILE

## Description

Aplicação Hackathon

## Installing

```console
yarn install or npm install
```

## Running

Install dependences.

Create file .env with yout ip.

```console
MY_IP=192.168.xx.xx
```

To run mocked json-server open the file and run the json-server. Ps: json-server must be installed globally before.

```console
cd src/services
json-server bilheteescolarserver.json -p 3332 -H 192.168.xx.xx
```

Run metro bundler.


```console
yarn start --reset-cache
```

Install the app.

```console
react-native run-android
```

## Team

- Ricardo Alves
- Leonardo
- Eduardo Quintino
- Espaker
- Felipe

## License

MIT
