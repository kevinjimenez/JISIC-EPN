import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {RolRepository} from "./rol.repository";

@Injectable()
export class RolService {
    constructor(
        @InjectRepository(RolRepository)
        private readonly _rolRepository: RolRepository
    ) {
    }
}
