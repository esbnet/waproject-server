# WA project

DATABASE_URL="mysql://<user>:<password>@<host:port>/<table>"

npx prisma generate
npx prisma migrate deploy
