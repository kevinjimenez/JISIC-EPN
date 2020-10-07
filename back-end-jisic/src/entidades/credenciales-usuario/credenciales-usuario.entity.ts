import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('credenciales_usuario')
export class CredencialesUsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
