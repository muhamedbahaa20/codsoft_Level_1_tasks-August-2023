### forgetPassword App Endpoints Table

| Name                        | Method | Endpoint                              | Parameters       | Body                                                                 | Response                                      |
|-----------------------------|--------|---------------------------------------|------------------|----------------------------------------------------------------------|-----------------------------------------------|
| Password Reset              | POST   | `/password-reset/`                    | None             | `{"email": "string"}`                                                | 200 OK, {"message": "Password reset email sent."}, <br>404 Not Found, {"error": "User with this email does not exist."}, <br>500 Internal Server Error, {"error": "Error sending email."} |
| Password Reset Confirm      | GET    | `/reset-password/<str:token>/`        | `token`          | None                                                                 | 200 OK, Renders password reset form, <br>200 OK, Password reset link is invalid or has expired. |
| Confirm Token and Reset PW  | POST   | `/get_token/`                         | None             | `{"token": "string", "new_password": "string"}`                      | 200 OK, Renders password reset success message, <br>200 OK, Renders invalid data message  |

