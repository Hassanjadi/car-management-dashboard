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
![ERD](https://gitlab.com/hassanjadi/coba-git/uploads/7e1f1e88a9b1320776d9b8b18a98e9a1/car-management-dashboard.png)

## Endpoint
### Backend REST API
| No | URI                                 | Method    | Description                              |
| -- | ----------------------------------- | --------- | ---------------------------------------- |
| 1  | /api/v1/cars                        | POST      | Adding Cars                              |
| 2  | /api/v1/cars                        | GET       | Getting Cars                             |
| 3  | /api/v1/cars/:id                    | GET       | Getting Specified Cars                   |
| 4  | /api/v1/cars/:id                    | PATCH     | Update Cars                              |
| 5  | /api/v1/cars/:id                    | DELETE    | Delete car                               |

## Postman Test
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/30664113-1cfa44be-eb6e-43ce-8ee5-8a5e53acec9d?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D30664113-1cfa44be-eb6e-43ce-8ee5-8a5e53acec9d%26entityType%3Dcollection%26workspaceId%3D4263bd11-041f-40d1-819e-c671549b1ca7)
