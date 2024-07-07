Sure, here's the updated table without the "Endpoint" column for the users, groups, posts, and audio player APIs:

### Users API

| Name     | Method | Body                                                                                 | Response               | Steps                                                      | Expected Result            |
|----------|--------|--------------------------------------------------------------------------------------|------------------------|------------------------------------------------------------|----------------------------|
| register | POST   | { "first_name", "last_name", "email", "username", "phone_number", "faculty", "date_of_birth", "image", "password", "confirm_password" } | Status: 201, Jwt token | 1. Send a POST request with the provided body. 2. Validate the input data. 3. Create a new user and send a welcome email. | User is registered and receives a JWT token. |
| login    | POST   | { "username", "password" }                                                            | Status: 200, Jwt token | 1. Send a POST request with the provided body. 2. Authenticate the user. 3. Generate and return JWT tokens. | User is authenticated and receives JWT tokens. |
| show     | GET    | -                                                                                    | Status: 200            | 1. Send a GET request. 2. Retrieve and return user details. | User details are retrieved successfully. |
| update   | PATCH  | { "first_name", "last_name", "email", "username", "phone_number", "faculty", "date_of_birth", "image" } | Status: 200            | 1. Send a PATCH request with the provided body. 2. Validate and update the user details. | User details are updated successfully. |
| logout   | POST   | { "refresh" }                                                                         | Status: 205            | 1. Send a POST request with the provided body. 2. Blacklist the refresh token. | User is logged out successfully. |
| refresh  | POST   | { "refresh" }                                                                         | Status: 200            | 1. Send a POST request with the provided body. 2. Generate and return new access token. | New access token is generated successfully. |

### Groups API

| Name           | Method | Body                                               | Response               | Steps                                                                                       | Expected Result                    |
|----------------|--------|----------------------------------------------------|------------------------|---------------------------------------------------------------------------------------------|------------------------------------|
| create group   | POST   | { "name", "description", "is_private", "password" } | Status: 201            | 1. Send a POST request with the provided body. 2. Validate and create the group. | Group is created successfully.    |
| get group      | GET    | -                                                  | Status: 200            | 1. Send a GET request. 2. Retrieve and return the group details.             | Group details are retrieved.      |
| update group   | PATCH  | { "name", "description", "is_private", "password" } | Status: 200            | 1. Send a PATCH request with the provided body. 2. Validate and update group. | Group details are updated.        |
| delete group   | DELETE | -                                                  | Status: 204            | 1. Send a DELETE request. 2. Delete the group.                               | Group is deleted successfully.    |
| list groups    | GET    | -                                                  | Status: 200            | 1. Send a GET request. 2. Retrieve and return the list of groups.            | List of groups is retrieved.      |
| join group     | POST   | { "password" }                                     | Status: 200            | 1. Send a POST request with the provided body. 2. Validate and join group. | User joins the group successfully. |
| leave group    | POST   | -                                                  | Status: 200            | 1. Send a POST request. 2. Remove the user from the group.             | User leaves the group successfully. |
| get members    | GET    | -                                                  | Status: 200            | 1. Send a GET request. 2. Retrieve and return the list of members.   | List of group members is retrieved. |

### Posts API

| Name            | Method | Body                                                 | Response               | Steps                                                                                                 | Expected Result                        |
|-----------------|--------|------------------------------------------------------|------------------------|-------------------------------------------------------------------------------------------------------|----------------------------------------|
| create post     | POST   | { "title", "content", "group_id", "attachments" }     | Status: 201            | 1. Send a POST request with the provided body. 2. Validate and create the post.             | Post is created successfully.          |
| get post        | GET    | -                                                    | Status: 200            | 1. Send a GET request. 2. Retrieve and return the post details.                         | Post details are retrieved.            |
| update post     | PATCH  | { "title", "content", "attachments" }                 | Status: 200            | 1. Send a PATCH request with the provided body. 2. Validate and update the post.        | Post details are updated.              |
| delete post     | DELETE | -                                                    | Status: 204            | 1. Send a DELETE request. 2. Delete the post.                                           | Post is deleted successfully.          |
| list posts      | GET    | -                                                    | Status: 200            | 1. Send a GET request. 2. Retrieve and return the list of posts.                            | List of posts is retrieved.            |
| like post       | POST   | -                                                    | Status: 200            | 1. Send a POST request. 2. Like the post.                                          | Post is liked successfully.            |
| unlike post     | POST   | -                                                    | Status: 200            | 1. Send a POST request. 2. Unlike the post.                                      | Post is unliked successfully.          |
| create comment  | POST   | { "content", "attachments" }                          | Status: 201            | 1. Send a POST request with the provided body. 2. Validate and create the comment. | Comment is created successfully.       |
| get comment     | GET    | -                                                    | Status: 200            | 1. Send a GET request. 2. Retrieve and return the comment details.                   | Comment details are retrieved.         |
| update comment  | PATCH  | { "content", "attachments" }                          | Status: 200            | 1. Send a PATCH request with the provided body. 2. Validate and update the comment.  | Comment details are updated.           |
| delete comment  | DELETE | -                                                    | Status: 204            | 1. Send a DELETE request. 2. Delete the comment.                                     | Comment is deleted successfully.       |
| list comments   | GET    | -                                                    | Status: 200            | 1. Send a GET request. 2. Retrieve and return the list of comments.       | List of comments is retrieved.         |
| like comment    | POST   | -                                                    | Status: 200            | 1. Send a POST request. 2. Like the comment.                                    | Comment is liked successfully.         |
| unlike comment  | POST   | -                                                    | Status: 200            | 1. Send a POST request. 2. Unlike the comment.                                | Comment is unliked successfully.       |
| create reply    | POST   | { "content", "attachments" }                          | Status: 201            | 1. Send a POST request with the provided body. 2. Validate and create the reply. | Reply is created successfully.         |
| get reply       | GET    | -                                                    | Status: 200            | 1. Send a GET request. 2. Retrieve and return the reply details.                      | Reply details are retrieved.           |
| update reply    | PATCH  | { "content", "attachments" }                          | Status: 200            | 1. Send a PATCH request with the provided body. 2. Validate and update the reply.     | Reply details are updated.             |
| delete reply    | DELETE | -                                                    | Status: 204            | 1. Send a DELETE request. 2. Delete the reply.                                        | Reply is deleted successfully.         |
| list replies    | GET    | -                                                  | Status: 200            | 1. Send a GET request. 2. Retrieve and return the list of replies.   | List of replies is retrieved.          |
| like reply      | POST   | -                                                    | Status: 200            | 1. Send a POST request. 2. Like the reply.                                       | Reply is liked successfully.           |
| unlike reply    | POST   | -                                                    | Status: 200            | 1. Send a POST request. 2. Unlike the reply.                                   | Reply is unliked successfully.         |

### Audio Player API

| Name                | Method | Body                            | Response               | Steps                                                                                           | Expected Result                        |
|---------------------|--------|---------------------------------|------------------------|-------------------------------------------------------------------------------------------------|----------------------------------------|
| upload audio        | POST   | { "file_name", "file_path" }    | Status: 201            | 1. Send a POST request with the provided body containing audio file and metadata. 2. Validate and upload the audio file.                       | Audio file is uploaded successfully.   |
| get audio           | GET    | -                               | Status: 200            | 1. Send a GET request. 2. Retrieve and return the audio details.                 | Audio details are retrieved.            |
| delete audio        | DELETE | -                               | Status: 204            | 1

. Send a DELETE request. 2. Delete the audio file.                                     | Audio file is deleted successfully.     |
| list audios         | GET    | -                               | Status: 200            | 1. Send a GET request. 2. Retrieve and return the list of audio files.                  | List of audio files is retrieved.       |
| play audio          | POST   | -                               | Status: 200            | 1. Send a POST request. 2. Play the audio file.                                                | Audio file is played successfully.      |
