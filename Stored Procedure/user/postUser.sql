CREATE PROCEDURE postUsers(
@username varchar (25)
,@password varchar (100))
AS 
BEGIN
INSERT into users.users_list 
(username, password)
VALUES
(@username, @password)
END
GO