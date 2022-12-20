# Notes Crud Operations using Mongodb / Mongoose

In this repo I am trying & Learning Mongo DB using Express Js




## API Reference

#### Create new Note

```http
  GET /newnote
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | title of the note|
| `note` | `string` | Content of the Note|

#### Update Note By ID

```http
  GET /updatenote
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Required**. Id specific Note |
| `title` | `string` | title of the note|
| `note` | `string` | Content of the Note|



## Authors

- [@yashz05](https://www.github.com/yashz05)

