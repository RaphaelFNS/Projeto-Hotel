export const DROP_TABLE_QUERY = `
    DROP TABLE IF EXISTS CLIENTS CASCADE;
    DROP TABLE IF EXISTS EMPLOYEE_ROLES CASCADE;
    DROP TABLE IF EXISTS EMPLOYEES CASCADE;
    DROP TABLE IF EXISTS ROOM_TYPES CASCADE;
    DROP TABLE IF EXISTS ROOM_STATUS CASCADE;
    DROP TABLE IF EXISTS ROOMS CASCADE;
    DROP TABLE IF EXISTS BOOKINGS CASCADE;
    DROP TABLE IF EXISTS TELEPHONES CASCADE;
    DROP TABLE IF EXISTS PARKING_LOTS CASCADE;
    DROP TABLE IF EXISTS PARKING_SPACES CASCADE;
    DROP TABLE IF EXISTS ADMINS CASCADE;
`;

export const CREATE_TABLES_QUERY = `
    CREATE TABLE CLIENTS (
        ID UUID PRIMARY KEY NOT NULL,
        CPF TEXT NOT NULL,
        NAME TEXT NOT NULL,
        EMAIL TEXT NOT NULL,
        ADDRESS TEXT,
        BIRTHDATE DATE,
        WIFI_PASSWORD TEXT,
        CREATED_AT TIMESTAMP DEFAULT NOW(),
        UPDATED_AT TIMESTAMP DEFAULT NOW(),
        IS_ACTIVE BOOLEAN DEFAULT TRUE,
        UNIQUE (CPF),
        UNIQUE (EMAIL)
    );

    CREATE TABLE EMPLOYEE_ROLES (
        ID UUID PRIMARY KEY NOT NULL,
        NAME TEXT NOT NULL,
        SALARY NUMERIC NOT NULL,
        CREATED_AT TIMESTAMP DEFAULT NOW(),
        UPDATED_AT TIMESTAMP DEFAULT NOW(),
        IS_ACTIVE BOOLEAN DEFAULT TRUE,
        UNIQUE (NAME)
    );

    CREATE TABLE EMPLOYEES (
        ID UUID PRIMARY KEY NOT NULL,
        CPF TEXT NOT NULL,
        NAME TEXT NOT NULL,
        EMAIL TEXT NOT NULL,
        ADDRESS TEXT,
        BIRTHDATE DATE,
        ROLE_ID UUID,
        CREATED_AT TIMESTAMP DEFAULT NOW(),
        UPDATED_AT TIMESTAMP DEFAULT NOW(),
        IS_ACTIVE BOOLEAN DEFAULT TRUE,
        UNIQUE (CPF),
        UNIQUE (EMAIL)
    );

    CREATE TABLE ROOM_TYPES (
        ID UUID PRIMARY KEY NOT NULL,
        NAME TEXT NOT NULL,
        DAILY_PRICE NUMERIC,
        CREATED_AT TIMESTAMP DEFAULT NOW(),
        UPDATED_AT TIMESTAMP DEFAULT NOW(),
        IS_ACTIVE BOOLEAN DEFAULT TRUE,
        UNIQUE (NAME)
    );

    CREATE TABLE ROOM_STATUS (
        ID UUID PRIMARY KEY NOT NULL,
        NAME TEXT NOT NULL,
        CREATED_AT TIMESTAMP DEFAULT NOW(),
        UPDATED_AT TIMESTAMP DEFAULT NOW(),
        IS_ACTIVE BOOLEAN DEFAULT TRUE,
        UNIQUE (NAME)
    );

    CREATE TABLE ROOMS (
        ID UUID PRIMARY KEY NOT NULL,
        NUMBER TEXT NOT NULL,
        ROOM_TYPE_ID UUID,
        ROOM_STATUS_ID UUID,
        EMPLOYEE_ID UUID,
        CREATED_AT TIMESTAMP DEFAULT NOW(),
        UPDATED_AT TIMESTAMP DEFAULT NOW(),
        IS_ACTIVE BOOLEAN DEFAULT TRUE,
        UNIQUE (NUMBER)
    );

    CREATE TABLE BOOKINGS (
        ID UUID PRIMARY KEY NOT NULL,
        START_DATE DATE NOT NULL,
        END_DATE DATE NOT NULL,
        CLIENT_ID UUID NOT NULL,
        ROOM_ID UUID NOT NULL,
        CREATED_AT TIMESTAMP DEFAULT NOW(),
        UPDATED_AT TIMESTAMP DEFAULT NOW(),
        IS_ACTIVE BOOLEAN DEFAULT TRUE
    );

    CREATE TABLE TELEPHONES (
        ID UUID PRIMARY KEY NOT NULL,
        NUMBER TEXT NOT NULL,
        COUNTRY_CODE TEXT NOT NULL DEFAULT '+55',
        AREA_CODE TEXT NOT NULL,
        IS_LANDLINE BOOLEAN NOT NULL,
        CLIENT_ID UUID,
        EMPLOYEE_ID UUID,
        CREATED_AT TIMESTAMP DEFAULT NOW(),
        UPDATED_AT TIMESTAMP DEFAULT NOW(),
        IS_ACTIVE BOOLEAN DEFAULT TRUE
    );

    CREATE TABLE PARKING_LOTS(
        ID UUID PRIMARY KEY NOT NULL,
        LOCATION TEXT NOT NULL,
        HAS_SPACE BOOLEAN NOT NULL,
        CREATED_AT TIMESTAMP DEFAULT NOW(),
        UPDATED_AT TIMESTAMP DEFAULT NOW(),
        IS_ACTIVE BOOLEAN NOT NULL,
        UNIQUE (LOCATION)
    );

    CREATE TABLE PARKING_SPACES (
        ID UUID PRIMARY KEY NOT NULL,
        NUMBER TEXT NOT NULL,
        PARKING_LOT_ID UUID NOT NULL,
        CLIENT_ID UUID,
        CREATED_AT TIMESTAMP DEFAULT NOW(),
        UPDATED_AT TIMESTAMP DEFAULT NOW(),
        IS_ACTIVE BOOLEAN DEFAULT TRUE
    );

    CREATE TABLE ADMINS (
        ID UUID PRIMARY KEY NOT NULL,
        NAME TEXT NOT NULL,
        EMAIL TEXT NOT NULL,
        PASSWORD TEXT NOT NULL,
        CREATED_AT TIMESTAMP DEFAULT NOW(),
        UPDATED_AT TIMESTAMP DEFAULT NOW(),
        IS_ACTIVE BOOLEAN DEFAULT TRUE,
        UNIQUE (EMAIL)
    );
 
    ALTER TABLE ROOMS ADD CONSTRAINT ROOM_TYPE_ID FOREIGN KEY (ROOM_TYPE_ID) REFERENCES ROOM_TYPES (ID) ON DELETE CASCADE; 
    ALTER TABLE ROOMS ADD CONSTRAINT ROOM_STATUS_ID FOREIGN KEY (ROOM_STATUS_ID) REFERENCES ROOM_STATUS (ID) ON DELETE CASCADE;
    ALTER TABLE ROOMS ADD CONSTRAINT EMPLOYEE_ID FOREIGN KEY (EMPLOYEE_ID) REFERENCES EMPLOYEES (ID) ON DELETE CASCADE;

    ALTER TABLE BOOKINGS ADD CONSTRAINT CLIENT_ID FOREIGN KEY (CLIENT_ID) REFERENCES CLIENTS (ID) ON DELETE CASCADE ON UPDATE CASCADE;
    ALTER TABLE BOOKINGS ADD CONSTRAINT ROOM_ID FOREIGN KEY (ROOM_ID) REFERENCES ROOMS (ID) ON DELETE CASCADE ON UPDATE CASCADE;
    ALTER TABLE TELEPHONES ADD CONSTRAINT CLIENT_ID FOREIGN KEY (CLIENT_ID) REFERENCES CLIENTS (ID) ON DELETE CASCADE;
    ALTER TABLE TELEPHONES ADD CONSTRAINT EMPLOYEE_ID FOREIGN KEY (EMPLOYEE_ID) REFERENCES EMPLOYEES (ID) ON DELETE CASCADE;

    ALTER TABLE EMPLOYEES ADD CONSTRAINT ROLE_ID FOREIGN KEY (ROLE_ID) REFERENCES EMPLOYEE_ROLES (ID) ON DELETE CASCADE;

    ALTER TABLE PARKING_SPACES ADD CONSTRAINT PARKING_LOT_ID FOREIGN KEY (PARKING_LOT_ID) REFERENCES PARKING_LOTS (ID) ON DELETE CASCADE;
`;
