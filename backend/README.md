## Chú ý trước khi migrate DB cần config lại cấu hình DB trong file src/config/config.js

## Move to src of source directory

cd src

## Migrate database

```
npm run migrate
```

## Seeder database

```
npm run seed
```

## Start project

### Development

```
npm run dev
```

### Build

```
npm run build
```

### Production

```
npm run production
```

### Migrate table (Don't run this script)

```
VD: npx sequelize-cli model:generate --name Kanji --attributes character:string,level:string,meaning:text,mnemonic:text,reading:string
```
