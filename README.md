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

#### Delete Note By ID

```http
  DELETTE /delete_single_note
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Required**. Id specific Note |

#### Get All Notes

```http
  GET /get_all_notes
```


#### Get Single Note

```http
  GET /get_single_note
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Required**. Id specific Note |

<br>
<br>

<img src="https://gifimage.net/wp-content/uploads/2018/11/thumbs-up-gif-funny-4.gif">

## Authors

- [@yashz05](https://www.github.com/yashz05)

