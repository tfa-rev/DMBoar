CREATE TABLE [dbo].[device] (
    [device_id]    INT    NOT NULL,
    [name]   VARCHAR (50) NOT NULL,
    [manufacturer] VARCHAR (20) NULL,
    [model]        VARCHAR (20) NULL,
    [OS]           VARCHAR (20) NULL,
    [OS_version]   VARCHAR (20) NULL,
    [CPU]          VARCHAR (20) NULL,
    [RAM]          INT          NULL,
    PRIMARY KEY CLUSTERED ([device_id] ASC)
);

