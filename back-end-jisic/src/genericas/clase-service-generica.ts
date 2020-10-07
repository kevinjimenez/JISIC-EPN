import {InjectRepository} from "@nestjs/typeorm";

export class ClaseServiceGenerica<T> {
    constructor(
        // @ts-ignore
        @InjectRepository(T)
        private readonly _repositorio: T
    ) {
    }
}
