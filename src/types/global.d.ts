declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PORT: string;
    MAIL_HOST: string;
    MAIL_PORT: string;
    MAIL_USER: string;
    MAIL_PASS: string;
    MAIL_ADMIN: string;
  }
}
