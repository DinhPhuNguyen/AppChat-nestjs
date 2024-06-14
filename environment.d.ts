declare namespace NodeJS {
  export interface ProcessEnv {
    MYSQL_DB_HOST?: 'localhost';
    MYSQL_DB_NAME?: 'master';
    MYSQL_DB_PORT?: '1433';
    MYSQL_DB_PASSWORD?: '123456780';
    MYSQL_DB_USERNAME?: 'sa';
    COOKIE_SECRET: string;
  }
}
