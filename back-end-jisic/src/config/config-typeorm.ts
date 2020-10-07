import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const CONFIG_TYPEORM: TypeOrmModuleOptions = {
    type: 'mysql',
    host: '',
    port: 8080,
    username: '',
    password: '',
    database: '',
    entities: [],
    synchronize: false,
    dropSchema: false,
}
