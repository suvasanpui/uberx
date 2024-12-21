# API Documentation

## User Endpoints

### POST /users/signup
Register a new user in the system.

#### Request Body
```json
{
  "fullname": {
    "firstname": "string (required, min 3 characters)",
    "lastname": "string (optional, min 3 characters)"
  },
  "email": "string (required, valid email format)",
  "password": "string (required, min 6 characters)"
}
```

#### Response

##### Success Response
- **Status Code:** 200 OK
```json
{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string",
  },
  "token": "JWT token string"
}
```

##### Error Responses
- **Status Code:** 400 Bad Request
  - When validation fails (invalid email, short firstname, or short password)
```json
{
  "error": [
    {
      "msg": "error message",
      "param": "field name",
      "location": "body"
    }
  ]
}
```

#### Validation Rules
- Email must be a valid email format
- First name must be at least 3 characters long
- Password must be at least 6 characters long
- All fields marked as required must be present in the request

#### Notes
- Password is automatically hashed before storing
- A JWT token is generated and returned upon successful registration
- Email must be unique in the system

### POST /users/login
Authenticate a user and retrieve a JWT token.

#### Request Body
```json
{
  "email": "string (required, valid email format)",
  "password": "string (required, min 6 characters)"
}
```

#### Response

##### Success Response
- **Status Code:** 200 OK
```json
{
  "message": "login successfully",
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string"
  },
  "token": "JWT token string"
}
```

##### Error Responses
- **Status Code:** 400 Bad Request
  - When validation fails (invalid email or short password)
```json
{
  "error": [
    {
      "msg": "error message",
      "param": "field name",
      "location": "body"
    }
  ]
}
```
- **Status Code:** 401 Unauthorized
  - When credentials are invalid
```json
{
  "error": "Invalid Username and Password"
}
```
- **Status Code:** 403 Forbidden
  - When user does not exist
```json
{
  "error": "user not Invalid Username and Password"
}
```

#### Validation Rules
- Email must be a valid email format
- Password must be at least 6 characters long
- All fields are required

#### Notes
- Returns JWT token upon successful authentication
- Token contains user ID and email in payload

### GET /users/profile
Get the profile information of the authenticated user.

#### Request Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN"
}
```

#### Response

##### Success Response
- **Status Code:** 200 OK
```json
{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string"
  }
}
```

##### Error Responses
- **Status Code:** 500 Internal Server Error
  - When user is not found
```json
{
  "error": "user not found"
}
```
- **Status Code:** 401 Unauthorized
  - When JWT token is missing or invalid
```json
{
  "error": "Unauthorized"
}
```

#### Notes
- Requires a valid JWT token in the Authorization header
- Token must be in the format: `Bearer <token>`
