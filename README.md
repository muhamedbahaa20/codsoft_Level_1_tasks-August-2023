Got it! Here is the updated endpoints table for the `schedule` app with the specified attributes:

### Schedule App Endpoints Table

| Name                       | Method | Endpoint               | Parameters | Body                                                                                                                       | Response                                 |
|----------------------------|--------|------------------------|------------|----------------------------------------------------------------------------------------------------------------------------|------------------------------------------|
| List Schedules             | GET    | `/schedule/`           | None       | None                                                                                                                       | 200 OK, List of schedules                |
| Create Schedule            | POST   | `/schedule/`           | None       | `{"title": "string", "day": "string", "start_time": "HH:MM:SS", "end_time": "HH:MM:SS", "description": "string", "reminder_time": 0, "color": "string"}` | 201 Created, Schedule details           |
| Retrieve Schedule Details  | GET    | `/schedule/<int:pk>/`  | `pk`       | None                                                                                                                       | 200 OK, Schedule details                 |
| Update Schedule            | PUT    | `/schedule/<int:pk>/`  | `pk`       | `{"title": "string", "day": "string", "start_time": "HH:MM:SS", "end_time": "HH:MM:SS", "description": "string", "reminder_time": 0, "color": "string"}` | 200 OK, Updated schedule details        |
| Partially Update Schedule  | PATCH  | `/schedule/<int:pk>/`  | `pk`       | Partial JSON body (only the fields to be updated)                                                                           | 200 OK, Partially updated schedule       |
| Delete Schedule            | DELETE | `/schedule/<int:pk>/`  | `pk`       | None                                                                                                                       | 204 No Content, {"message": "Schedule deleted successfully"} |

### Description of Endpoints

- **List Schedules**: Retrieves a list of schedules for the authenticated user.
- **Create Schedule**: Creates a new schedule for the authenticated user.
- **Retrieve Schedule Details**: Retrieves details of a specific schedule identified by its primary key.
- **Update Schedule**: Updates the details of a specific schedule identified by its primary key.
- **Partially Update Schedule**: Partially updates the details of a specific schedule identified by its primary key.
- **Delete Schedule**: Deletes a specific schedule identified by its primary key and returns a success message.

Please provide the views for the other apps, and I will create similar tables for them.
