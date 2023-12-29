# Car Management Dashboard

## Membuat HTTP Server yang dapat digunakan untuk melakukan manajemen data mobil dengan kriteria sebagai berikut:
1. Membuat sebuah HTTP Server dengan menggunakan Express JS
2. Menerapkan kaidah RESTful API dalam membuat sebuah HTTP Server
3. Dapat membuat sebuah HTTP Server yang dapat digunakan untuk melakukan operasi CRUD ke dalam Database melalui HTTP Request
4. Menggunakan TypeScript sebagai bahasa pemrograman

## Done
- [X] Membuat sebuah HTTP Server dengan menggunakan Express JS
- [X] Menerapkan kaidah RESTful API dalam membuat sebuah HTTP Server
- [X] Dapat membuat sebuah HTTP Server yang dapat digunakan untuk melakukan operasi CRUD ke dalam Database melalui HTTP Request
- [X] Menggunakan TypeScript sebagai bahasa pemrograman

## Entity Relationship Diagram
![ERD]([https://gitlab.com/hassanjadi/coba-git/uploads/7e1f1e88a9b1320776d9b8b18a98e9a1/car-management-dashboard.png](https://gitlab.com/hassanjadi/coba-git/-/issues/4#note_1709798831))

## Endpoint
### Backend REST API
| No | URI                                 | Method    | Description                              |
| -- | ----------------------------------- | --------- | ---------------------------------------- |
| 1  | /api/v1/cars                        | POST      | Adding Cars                              |
| 2  | /api/v1/cars                        | GET       | Getting Cars                             |
| 3  | /api/v1/cars/:id                    | GET       | Getting Specified Cars                   |
| 4  | /api/v1/cars/:id                    | PATCH     | Update Cars                              |
| 5  | /api/v1/cars/:id                    | DELETE    | Delete car                               |
