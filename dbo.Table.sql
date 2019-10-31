CREATE TABLE [dbo].[user] (
    [user_id]    INT          IDENTITY (1, 1) NOT NULL,
    [first_name]   VARCHAR (50) NOT NULL,
    [last_name]    VARCHAR (50) NOT NULL,
    [role] VARCHAR (20) NOT NULL,
    [location]        VARCHAR (20) NOT NULL, 
    CONSTRAINT [PK_user] PRIMARY KEY ([user_id]),
  
);