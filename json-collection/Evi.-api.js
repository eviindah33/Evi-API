{
	"info": {
		"_postman_id": "699c659c-421d-4b37-a588-ec0f5c022268",
		"name": "Evi",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "24291223",
		"_collection_link": "https://www.postman.com/satellite-administrator-12675287/workspace/my-workspace/collection/24291223-699c659c-421d-4b37-a588-ec0f5c022268?action=share&source=collection_link&creator=24291223"
	},
	"item": [
		{
			"name": "Get Status",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"// let responseJson = pm.response.json();\r",
							"pm.test(\"Status Code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"pm.test(\"Response time is less than 1000ms\", function () {\r",
							"    pm.expect(pm.response.responseTime).to.be.below(1000)\r",
							"});\r",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://simple-books-api.glitch.me/status",
					"protocol": "https",
					"host": [
						"simple-books-api",
						"glitch",
						"me"
					],
					"path": [
						"status"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get List of Books",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status Code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"pm.test(\"Response time is less than 1000ms\", function () {\r",
							"    pm.expect(pm.response.responseTime).to.be.below(1000)\r",
							"});\r",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://simple-books-api.glitch.me/books?type=fiction&limit=1",
					"protocol": "https",
					"host": [
						"simple-books-api",
						"glitch",
						"me"
					],
					"path": [
						"books"
					],
					"query": [
						{
							"key": "type",
							"value": "fiction"
						},
						{
							"key": "limit",
							"value": "1"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Book",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status Code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"pm.test(\"Response time is less than 1000ms\", function () {\r",
							"    pm.expect(pm.response.responseTime).to.be.below(1000)\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://simple-books-api.glitch.me/books/:bookId",
					"protocol": "https",
					"host": [
						"simple-books-api",
						"glitch",
						"me"
					],
					"path": [
						"books",
						":bookId"
					],
					"variable": [
						{
							"key": "bookId",
							"value": "3"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Post Order",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status Code is 201\", function () {\r",
							"    pm.response.to.have.status(201);\r",
							"});\r",
							"pm.test(\"Response time is less than 1000ms\", function () {\r",
							"    pm.expect(pm.response.responseTime).to.be.below(1000)\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "35c3e3b94716a644f4da0e551e8d344339488ad7964c341b895e9e07d67349b5",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"bookId\": 1,\r\n  \"customerName\": \"John\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://simple-books-api.glitch.me/orders",
					"protocol": "https",
					"host": [
						"simple-books-api",
						"glitch",
						"me"
					],
					"path": [
						"orders"
					]
				}
			},
			"response": []
		},
		{
			"name": "Patch Update Order",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status Code is 204\", function () {\r",
							"    pm.response.to.have.status(204);\r",
							"});\r",
							"pm.test(\"Response time is less than 2000ms\", function () {\r",
							"    pm.expect(pm.response.responseTime).to.be.below(2000)\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "35c3e3b94716a644f4da0e551e8d344339488ad7964c341b895e9e07d67349b5",
							"type": "string"
						}
					]
				},
				"method": "PATCH",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"customerName\": \"Data Baru\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://simple-books-api.glitch.me/orders/:orderId",
					"protocol": "https",
					"host": [
						"simple-books-api",
						"glitch",
						"me"
					],
					"path": [
						"orders",
						":orderId"
					],
					"variable": [
						{
							"key": "orderId",
							"value": "5BY02lOrVbHAWR5i39LKx"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Update Order (Outputnya)",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							"\r",
							"\r",
							"// // Cek apakah respons body ada dan dalam format JSON\r",
							"// if (pm.response && pm.response.code === 200 && pm.response.json) {\r",
							"//     // Ambil orderId dari respons sebelumnya\r",
							"//     const orderId = pm.response.json().orderId;\r",
							"\r",
							"//     // Simpan orderId sebagai environment variable\r",
							"//     pm.environment.set('orderIdToUpdate', orderId);\r",
							"// } else {\r",
							"//     console.error('Error: Unable to extract orderId from the response.');\r",
							"// }\r",
							"\r",
							"\r",
							"// // Ambil orderId dari respons sebelumnya\r",
							"// const orderId = pm.response.json().orderId;\r",
							"\r",
							"// // Simpan orderId sebagai environment variable\r",
							"// pm.environment.set('orderIdToUpdate', orderId);\r",
							"\r",
							"\r",
							"\r",
							"\r",
							"\r",
							"\r",
							"\r",
							"\r",
							"\r",
							"\r",
							"\r",
							"\r",
							"\r",
							"\r",
							"\r",
							"\r",
							"// Periksa apakah respons ada dan berisi data JSON\r",
							"if (pm.response && pm.response.code === 200 && pm.response.headers.get('Content-Type') && pm.response.headers.get('Content-Type').includes('application/json')) {\r",
							"    try {\r",
							"        // Cobalah untuk mem-parsing respons sebagai JSON\r",
							"        const responseBody = pm.response.json();\r",
							"\r",
							"        // Pastikan orderId ada dalam data JSON\r",
							"        if (responseBody && responseBody.orderId) {\r",
							"            // Ambil orderId dari respons sebelumnya\r",
							"            const orderId = responseBody.orderId;\r",
							"\r",
							"            // Simpan orderId sebagai environment variable\r",
							"            pm.environment.set('orderIdToUpdate', orderId);\r",
							"        } else {\r",
							"            console.error('Error: orderId tidak ditemukan dalam respons.');\r",
							"        }\r",
							"    } catch (e) {\r",
							"        console.error('Error parsing response as JSON:', e);\r",
							"    }\r",
							"} else {\r",
							"    console.error('Error: Tidak dapat mengekstrak orderId dari respons.');\r",
							"}\r",
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"// let responseJson = pm.response.json();\r",
							"pm.test(\"Status Code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"pm.test(\"Response time is less than 2000ms\", function () {\r",
							"    pm.expect(pm.response.responseTime).to.be.below(2000)\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "35c3e3b94716a644f4da0e551e8d344339488ad7964c341b895e9e07d67349b5",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://simple-books-api.glitch.me/orders/:orderId",
					"protocol": "https",
					"host": [
						"simple-books-api",
						"glitch",
						"me"
					],
					"path": [
						"orders",
						":orderId"
					],
					"variable": [
						{
							"key": "orderId",
							"value": "5BY02lOrVbHAWR5i39LKx"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Orders",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status Code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"pm.test(\"Response time is less than 2000ms\", function () {\r",
							"    pm.expect(pm.response.responseTime).to.be.below(2000)\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "35c3e3b94716a644f4da0e551e8d344339488ad7964c341b895e9e07d67349b5",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://simple-books-api.glitch.me/orders/:orderId",
					"protocol": "https",
					"host": [
						"simple-books-api",
						"glitch",
						"me"
					],
					"path": [
						"orders",
						":orderId"
					],
					"variable": [
						{
							"key": "orderId",
							"value": "5BY02lOrVbHAWR5i39LKx"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete an order",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status Code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"pm.test(\"Response time is less than 1000ms\", function () {\r",
							"    pm.expect(pm.response.responseTime).to.be.below(1000)\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "35c3e3b94716a644f4da0e551e8d344339488ad7964c341b895e9e07d67349b5",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://simple-books-api.glitch.me/orders/:orderId",
					"protocol": "https",
					"host": [
						"simple-books-api",
						"glitch",
						"me"
					],
					"path": [
						"orders",
						":orderId"
					],
					"variable": [
						{
							"key": "orderId",
							"value": "5BY02lOrVbHAWR5i39LKx"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Post API Authentication",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status Code is 201\", function () {\r",
							"    pm.response.to.have.status(201);\r",
							"});\r",
							"pm.test(\"Response time is less than 1000ms\", function () {\r",
							"    pm.expect(pm.response.responseTime).to.be.below(1000)\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n   \"clientName\": \"hehehehe\",\r\n   \"clientEmail\": \"hehehehe10@example.com\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://simple-books-api.glitch.me/api-clients/",
					"protocol": "https",
					"host": [
						"simple-books-api",
						"glitch",
						"me"
					],
					"path": [
						"api-clients",
						""
					]
				}
			},
			"response": []
		}
	]
}