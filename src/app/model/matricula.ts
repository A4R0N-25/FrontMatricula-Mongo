import { MatriculaDetalle } from "./matriculaDetalle";

export class Matricula{
    codigo!: string;
    fecha!: Date;
    periodo!:String;
    creditosTotales!: number;
    detalles!:MatriculaDetalle[];
}