Based on the provided code, here is the endpoints table for the `ToDoList` app in your Django REST project:

### ToDoList App Endpoints Table

| Name                        | Method | Endpoint                          | Parameters          | Body                                                                                                                    | Response                                  |
|-----------------------------|--------|-----------------------------------|---------------------|-------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|
| List ToDoLists              | GET    | `/todolist/`                      | None                | None                                                                                                                    | 200 OK, List of ToDoLists                 |
| Create ToDoList             | POST   | `/todolist/`                      | None                | `{"title": "string"}`                                                                                                   | 201 Created, ToDoList details             |
| Retrieve ToDoList Details   | GET    | `/todolist/<int:pk>/`             | `pk`                | None                                                                                                                    | 200 OK, ToDoList details                  |
| Update ToDoList             | PUT    | `/todolist/<int:pk>/`             | `pk`                | `{"title": "string"}`                                                                                                   | 200 OK, Updated ToDoList details          |
| Partially Update ToDoList   | PATCH  | `/todolist/<int:pk>/`             | `pk`                | Partial JSON body (only the fields to be updated)                                                                        | 200 OK, Partially updated ToDoList        |
| Delete ToDoList             | DELETE | `/todolist/<int:pk>/`             | `pk`                | None                                                                                                                    | 204 No Content, {"message": "Schedule deleted successfully"} |
| List ToDoTasks              | GET    | `/todolist/<int:todolist_pk>/tasks/` | `todolist_pk`       | None                                                                                                                    | 200 OK, List of ToDoTasks                 |
| Create ToDoTask             | POST   | `/todolist/<int:todolist_pk>/tasks/` | `todolist_pk`       | `{"title": "string", "priority": "string", "status": "boolean", "due_date": "YYYY-MM-DDTHH:MM:SSZ"}`                    | 201 Created, ToDoTask details             |
| Retrieve ToDoTask Details   | GET    | `/todolist/<int:todolist_pk>/tasks/<int:pk>/` | `todolist_pk`, `pk` | None                                                                                                                    | 200 OK, ToDoTask details                  |
| Update ToDoTask             | PUT    | `/todolist/<int:todolist_pk>/tasks/<int:pk>/` | `todolist_pk`, `pk` | `{"title": "string", "priority": "string", "status": "boolean", "due_date": "YYYY-MM-DDTHH:MM:SSZ"}`                    | 200 OK, Updated ToDoTask details          |
| Partially Update ToDoTask   | PATCH  | `/todolist/<int:todolist_pk>/tasks/<int:pk>/` | `todolist_pk`, `pk` | Partial JSON body (only the fields to be updated)                                                                        | 200 OK, Partially updated ToDoTask        |
| Delete ToDoTask             | DELETE | `/todolist/<int:todolist_pk>/tasks/<int:pk>/` | `todolist_pk`, `pk` | None                                                                                                                    | 204 No Content, {"message": "Schedule deleted successfully"} |
| List All ToDoLists and Tasks| GET    | `/todolist/listall/`              | None                | None                                                                                                                    | 200 OK, List of ToDoLists with their tasks|

### Description of Endpoints

- **List ToDoLists**: Retrieves a list of ToDoLists for the authenticated user.
- **Create ToDoList**: Creates a new ToDoList for the authenticated user.
- **Retrieve ToDoList Details**: Retrieves details of a specific ToDoList identified by its primary key.
- **Update ToDoList**: Updates the details of a specific ToDoList identified by its primary key.
- **Partially Update ToDoList**: Partially updates the details of a specific ToDoList identified by its primary key.
- **Delete ToDoList**: Deletes a specific ToDoList identified by its primary key and returns a success message.
- **List ToDoTasks**: Retrieves a list of ToDoTasks for a specific ToDoList identified by `todolist_pk`.
- **Create ToDoTask**: Creates a new ToDoTask for a specific ToDoList identified by `todolist_pk`.
- **Retrieve ToDoTask Details**: Retrieves details of a specific ToDoTask identified by `todolist_pk` and `pk`.
- **Update ToDoTask**: Updates the details of a specific ToDoTask identified by `todolist_pk` and `pk`.
- **Partially Update ToDoTask**: Partially updates the details of a specific ToDoTask identified by `todolist_pk` and `pk`.
- **Delete ToDoTask**: Deletes a specific ToDoTask identified by `todolist_pk` and `pk` and returns a success message.
- **List All ToDoLists and Tasks**: Retrieves a list of all ToDoLists with their associated tasks for the authenticated user.

Please provide the views for the next app, and I will create similar tables for them.
