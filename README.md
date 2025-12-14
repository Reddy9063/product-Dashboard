# product-Dashboard
# Product Dashboard

A simple end-to-end **Product Dashboard application** built using **Spring Boot** and **plain HTML, CSS, and JavaScript**, focusing on understanding backend fundamentals and REST API design.

---

## 🚀 Features

- Add new products
- View all products in a dashboard table
- View detailed product information (modal)
- Edit existing products
- Delete products
- Server-side search by product name or manufacturer
- Clean REST API design using query parameters

---

## 🛠️ Tech Stack

### Backend
- Java
- Spring Boot
- Spring Data JPA
- REST APIs
- Hibernate
- MySQL (or any relational database)

### Frontend
- HTML
- CSS
- JavaScript (Vanilla JS)

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|------|---------|------------|
| GET | `/home` | Fetch all products |
| POST | `/addProduct` | Add a new product |
| PATCH | `/product/{id}` | Update product details |
| DELETE | `/product/{id}` | Delete a product |
| GET | `/product/search?name=keyword` | Search products |

---

## 🧠 Key Learnings

- How frontend communicates with backend using REST APIs
- Difference between **Path Variables** and **Query Parameters**
- Designing search functionality using query parameters
- Custom finder methods in Spring Data JPA
- End-to-end request–response flow
- Basic Git and GitHub workflow

---

## ▶️ How to Run the Project

1. Clone the repository
   ```bash
   git clone https://github.com/Reddy9063/product-Dashboard.git
