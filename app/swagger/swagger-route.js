const securityObject = [{authenticate: [],},];
module.exports = {
    "swagger": "2.0",
    "info": {
        "description": "This is the list of all contact managemnet apis",
        "version": "1.0.0",
        "title": "Contact Management API",
        "contact": {
            "email": "test@gmail.com"
        },
        "license": {
            "name": "Apache 2.0",
            "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
        }
    },
    "schemes": ["http","https"],
    "host": "localhost:1010",
    "basePath": "/api/v1",
    "securityDefinitions": {
        authenticate: {
            type: "apiKey",
            in: "header",
            name: "authorization",
            description: "Please provide the valid access token, if you dont have please login and get the token as response!"
        },
    },
    "paths" : {
        "/contacts" : {
            "get" : {
                "tags": ["Contact management"],
                "summary" : "Get all the contacts",
                "description": "Get all the contacts - contact management",
                "produces": ["application/json"],
                "parameters": [],
                "security" : securityObject,
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "type": "object",
                            "items": {
                                "$ref": "#/definitions/contactsResponse"
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid status value",
                        "schema": {
                            "$ref": "#/definitions/InvalidResponse"
                        }
                    }
                }
            }
        },
        "/contact-find-by-id/{id}" : {
            "get" : {
                "tags": ["Contact management"],
                "summary" : "Search contact by id",
                "description": "Search contact by id - contact management",
                "produces": ["application/json"],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "search id here",
                        "required": true,
                        "type": "string"
                    }
                ],
                "security" : securityObject,
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "type": "object",
                            "items": {
                                "$ref": "#/definitions/contactsResponse"
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid status value",
                        "schema": {
                            "$ref": "#/definitions/InvalidResponse"
                        }
                    }
                }
            }
        },
        "/contact-find-by-name/{name}" : {
            "get" : {
                "tags": ["Contact management"],
                "summary" : "Search contact by name",
                "description": "Search contact by name - contact management",
                "produces": ["application/json"],
                "parameters": [
                    {
                        "name": "name",
                        "in": "path",
                        "description": "search name here",
                        "required": true,
                        "type": "string"
                    }
                ],
                "security" : securityObject,
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "type": "object",
                            "items": {
                                "$ref": "#/definitions/contactsResponse"
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid status value",
                        "schema": {
                            "$ref": "#/definitions/InvalidResponse"
                        }
                    }
                }
            }
        },
        "/contact-add" : {
            "post" : {
                "tags": ["Contact management"],
                "summary" : "Save the contact",
                "description": "Save the contact",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "description": "Contact object",
                        "required": true,
                        "schema": {  
                                "type": "object",
                                "$ref": "#/definitions/addContact"
                        }
                    }
                ],
                "security" : securityObject,
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/contactsResponse"
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid status value",
                        "schema": {
                            "$ref": "#/definitions/InvalidResponse"
                        }
                    }
                }
            }
        },
        "/contact-update/{id}" : {
            "patch" : {
                "tags": ["Contact management"],
                "summary" : "Update the contact",
                "description": "Update the contact",
                "produces": ["application/json"],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "contact id is required to update",
                        "required": true,
                        "type": "string"
                    },
                    {
                        "in": "body",
                        "name": "body",
                        "description": "contact object",
                        "required": true,
                        "schema": { 
                                "type": "object",
                                "$ref": "#/definitions/addContact" 
                        }
                    }
                ],
                "security" : securityObject,
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/contactsResponse"
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid status value",
                        "schema": {
                            "$ref": "#/definitions/InvalidResponse"
                        }
                    }
                }
            }
        },
        "/contact-delete/{id}" : {
            "delete" : {
                "tags": ["Contact management"],
                "summary" : "Delete the contact",
                "description": "Delete the contact",
                "produces": ["application/json"],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "delete contact by id",
                        "required": true,
                        "type": "string"
                    }
                ],
                "security" : securityObject,
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/contactsResponse"
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid status value",
                        "schema": {
                            "$ref": "#/definitions/InvalidResponse"
                        }
                    }
                }
            }
        },
        "/contact/search" : {
            "get" : {
                "tags": ["Contact management"],
                "summary" : "Search the contact",
                "description": "Search the contact",
                "produces": ["application/json"],
                "parameters": [
                    {
                        "name": "name",
                        "in": "query",
                        "description": "search contact by name", 
                        "type": "string"
                    },
                    {
                        "name": "skip",
                        "in": "query",
                        "description": "Skip first n records", 
                        "type": "number"
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "Select first n records", 
                        "type": "number"
                    },
                    {
                        "name": "sort_by",
                        "in": "query",
                        "description": "Sort coloumn name", 
                        "type": "string",
                        "schema": { type: 'string', example: 'name', default: 'name' }, 
                        "enum": ['name'],
                    },
                    {
                        "name": "sort_order",
                        "in": "query",
                        "description": "ASC-Ascending || DESC-Descending", 
                        "type": "string",
                        "schema": { type: 'string', example: 'DESC', default: 'ASC' }, 
                        "enum": ['ASC', 'DESC'],
                    }
                ],
                // "security" : securityObject,
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/contactsResponse"
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid status value",
                        "schema": {
                            "$ref": "#/definitions/InvalidResponse"
                        }
                    }
                }
            }
        },
        "/login" : {
            "post" : {
                "tags": ["User Auth"],
                "summary" : "create token to access the APIs",
                "description": "get token",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "description": "Login object",
                        "required": true,
                        "schema": {  
                                "type": "object",
                                "$ref": "#/definitions/getToken"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/getTokenRes"
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid status value",
                        "schema": {
                            "$ref": "#/definitions/InvalidResponse"
                        }
                    }
                }
            }
        }
    }, 
    "definitions": {
        "todosResponse": {
            "type": "object",
            "properties": {
                "id": {
                     "type": "integer"
                },
                "task": {
                    "type": "string"
                },
                "assignee": {
                    "type": "string"
                },
                "status": {
                    "type": "string"
                }
            }
        },
        "contactsResponse": {
            "type": "object",
            "properties": {
                "id": {
                     "type": "integer"
                },
                "name": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "phone": {
                    "type": "integer"
                },
                "createdAt": {
                    "type": "string"
                },
                "updatedAt": {
                    "type": "string"
                }
            }
        }, 
        "addContact": {
            "type": "object",
            "properties": { 
                "name": {
                    "type": "string",
                    "example":"Md Azad"
                },
                "email": {
                    "type": "string",
                    "example": "test@gmail.com"
                },
                "phone": {
                    "type": "integer",
                    "example": "9876543210"
                }
            }
        },
        "getToken": {
            "type": "object",
            "properties": {  
                "email": {
                    "type": "string",
                    "example": "test@gmail.com"
                },
                "password": {
                    "type": "string",
                    "example": "Test@12345"
                }
            }
        },
        "getTokenRes": {
            "type": "object",
            "properties": {
                "status": {
                    "type": "integer"
                },
                "token": {
                    "type": "string"
                } 
            }
        },
        "InvalidResponse": {
            "type": "object",
            "properties": {
                "statusCode": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            }

        }
    }
}
