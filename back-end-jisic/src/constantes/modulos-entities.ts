import { ActividadModule } from '../entidades/actividad/actividad.module';
import { EstablecimientoModule } from '../entidades/establecimiento/establecimiento.module';
import { EventoModule } from '../entidades/evento/evento.module';
import { EventoHorarioModule } from '../entidades/evento-horario/evento-horario.module';
import { HorarioModule } from '../entidades/horario/horario.module';
import { RolModule } from '../entidades/rol/rol.module';
import { UsuarioModule } from '../entidades/usuario/usuario.module';
import { UsuarioRolModule } from '../entidades/usuario-rol/usuario-rol.module';
import { TicketModule } from '../entidades/ticket/ticket.module';

export const MODULOS_ENTITIES = [
  ActividadModule,
  EstablecimientoModule,
  EventoModule,
  EventoHorarioModule,
  HorarioModule,
  RolModule,
  UsuarioModule,
  UsuarioRolModule,
  TicketModule,
];
