# SCG 2022 여름방학 해커톤 2팀

## Developers

- 25기 박민지 (PM, Backend)
- 26기 김상현 (Frontend)
- 26기 이강훈 (Frontend)
- 26기 한준희 (Backend)

<br>

## Contents

- [Installation](#installation)
- [Documentation](#Documentation)

---
<br>

## Installation

### 1. Clone

```shell
$ git clone https://github.com/minji-dev/SCG-2022-hackathon.git
```

### 2-1. Installation & Start (Frontend)

```bash
$ cd /front
$ npm install
$ npm run dev
```

### 2-2. Installation & Start (Backend)

```bash
$ cd /back
$ npm install
$ npm run start:dev
```

### 2-3. DB Config Settings

`back` 폴더에 `.env` 생성 후 아래 내용 입력

```shell
// back/.env
DB_USER=유저 네임
DB_PASSWORD=비밀번호
DB_HOST=호스트 네임
DB_SCHEMA=스키마
```
서버 시작 후, 
[`http://localhost:3000`](http://localhost:3000) 에 접속

<br>

## Documentation

### 개발 언어

- TypeScript
- Node.js

### Backend

- [`nest`](https://nestjs.com/)
- [`typeorm`](https://typeorm.io/#/)
- [`MySQL`](https://www.mysql.com/)

### Frontend

- [`Next.js`](https://nextjs.org/)


### 참고자료
1. 기초세팅 : https://typo.tistory.com/entry/Nest-Next-n2server-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0

---
