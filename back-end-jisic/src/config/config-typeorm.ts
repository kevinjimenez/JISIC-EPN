import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import {ENTITIES} from "../constantes/entities";

export const CONFIG_TYPEORM: TypeOrmModuleOptions = {
    type: 'mysql',
    host: '',
    port: 8080,
    username: '',
    password: '',
    database: '',
    entities: ENTITIES,
    synchronize: false,
    dropSchema: false,
}
