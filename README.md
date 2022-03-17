# Donations Test Task for Fundraise Up

> В нашей [форме приема пожертвований](https://fundraiseup.com/checkout) есть 6 подсказок и поле с предустановленной суммой. 
Итого, 7 чисел. Пользователь выбирает валюту и все 7 чисел конвертируются по курсу. 
После отправки данных из формы на сервер, пользователь видит сообщение с благодарностью.
В рамках задания надо повторить эту логику.

[Подробное описание](https://www.notion.so/Fullstack-test-b500e565cb89462b88003dd60927ab82#ede39e5897c04442b2384d8402054fc2)

## Используемые технологии
- Серверное приложение разработано на [Nest.js](https://nestjs.com/)
- База данных [mongoDB](https://www.mongodb.com/)
- Клиентское приложение разработано на [Vue.js](https://vuejs.org/) с компонентами [Vuetify](https://vuetifyjs.com)
- Для получения актуального курса валют использован сервис [Open Exchange Rates](https://openexchangerates.org/api)

## Системные требования
- Node.js v12 и выше

## Установка

```bash
$ git clone https://github.com/magersoft/donations-test.git
```

### Backend
```bash
$ cd donations-server
$ npm install
```

### Frontend
```bash
$ cd donations-client
$ npm install
```


## Запуск
### Backend
```bash
# Создать ".env" файл и скопировать переменные из ".env.example" (тестовые данные)
$ npm start
```

### Frontend
```bash
# Создать ".env" файл и скопировать переменные из ".env.example" (опционально)
$ npm start
```
