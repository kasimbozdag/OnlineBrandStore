# Online Brand Store

## Description

This is a web application for an online brand store, built using Node.js, Express, TypeORM, and PostgreSQL on the backend, and plain HTML, CSS, and JavaScript on the frontend. The application lists products, allows users to add them to a cart, and proceed to a checkout form.

## Features

- List available products
- Add products to cart
- Proceed to checkout
- Order placement with email notification

## Tech Stack

- Node.js
- Express
- TypeORM
- PostgreSQL
- Jest (for testing)
- HTML, CSS, JavaScript
- Docker
- Nginx (for frontend)

## Prerequisites

- Docker
- Docker Compose

## Setup

1. Clone the repository.

   ```bash
   git clone https://github.com/your-username/OnlineBrandStore.git
   ```

2. Navigate to the project directory.

   ```bash
   cd OnlineBrandStore
   ```

3. Create `.env` files for the backend and frontend based on the provided `.env.sample` files and fill in the required variables.

4. Run Docker Compose to set up the application.

   ```bash
   docker-compose up --build
   ```

## Running Tests

Backend:

```bash
docker exec -it backend_container_id yarn test
```

## API Documentation for Online Brand Store

### Base URL

All API requests are made to:

```http
http://localhost:3002/
```

### Common Headers

All API requests must include the following headers:

- `Content-Type: application/json`

### Error Handling

In case of an error, the API returns a JSON object with an `error` message:

```json
{
  "success": false,
  "message": "Description of the error"
}
```

---

### Endpoints

#### 1. List Products

- **Method**: `GET`
- **Path**: `/products`
- **Description**: Fetches all products.

##### Response

```json
{
  "success": true,
  "products": [
    {
      "id": 1,
      "brand_id": 1,
      "name": "Product 1",
      "price": 100.00
    },
    // ...
  ]
}
```

---

#### 2. Checkout

- **Method**: `POST`
- **Path**: `/checkout`
- **Description**: Submits an order.

##### Request Body

```json
{
  "clientName": "John Doe",
  "clientAddress": "123 Street, City, Country",
  "shippingOption": "free standard",
  "cart": [1, 2]
}
```

##### Response

```json
{
  "success": true,
  "orderId": 1
}
```

### 3. Get Order by ID

- **Method**: `GET`
- **Path**: `/order/:id`
- **Description**: Fetches order details by its ID.
- **Parameters**:
  - `id` (Path Parameter, Required): The ID of the order to be fetched.

#### Sample Request

```http
GET http://localhost:3002/order/1
```

#### Response

##### Success

- **Status Code**: `200 OK`

```json
{
  "success": true,
  "order": {
    "id": 1,
    "total_product_value": 100.00,
    "total_shipping_value": 10.00,
    "client_name": "John Doe",
    "client_address": "123 Street, City, Country"
  }
}
```

##### Error

- **Status Code**: `404 Not Found`

```json
{
  "success": false,
  "message": "Order not found"
}
```

## Accessing the Frontend

### Local Development

1. **Navigate to the frontend directory**:

    ```bash
    cd /frontend
    ```

2. **Install project dependencies**:

    If you haven't already, make sure you've installed the project dependencies.

    ```bash
    yarn install
    ```

    Or if you are using npm:

    ```bash
    npm install
    ```

3. **Start the development server**:

    We are using `lite-server` for local development. To start the server, run the following command:

    ```bash
    yarn start
    ```

    Or if you are using npm:

    ```bash
    npm start
    ```

    This should automatically open your default web browser displaying the app. If it doesn't, you can manually navigate to the URL displayed in your terminal (usually `http://localhost:3000` or another port if 3000 is taken).

### Docker Deployment

If you are using Docker, make sure the frontend service is defined in your `docker-compose.yml`.

1. **Navigate to the project's root directory and start the services**:

   ```bash
   docker-compose up
   ```

2. **Open your web browser and navigate to the frontend URL**:

   The frontend should now be accessible at `http://localhost:PORT` where `PORT` is the port defined in your `docker-compose.yml` for the frontend service.

   For example, if the port is set to `8080`, you would go to `http://localhost:8080`.

For specific production deployments, please consult your deployment or operations manual.
