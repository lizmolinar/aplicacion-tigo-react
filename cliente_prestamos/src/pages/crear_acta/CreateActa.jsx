import { DatosUser } from "../../components/DatosUser"
import { HeaderActa } from "../../components/HeaderActa"
import { EquipoNew } from "../../components/EquipoNew"
import { EquipoOld } from "../../components/EquipoOld"
import { Aplicaciones } from "../../components/Aplicaciones"
import { Herramientas } from "../../components/Herramientas"
import { Clausula } from "../../components/Clausula"
import { Firmas } from "../../components/Firmas"
import { HerramientasDos } from "../../components/Herramientasdos"

export const CreateActa = () => {
    return (
        <div>
            
            <HeaderActa/>
            <DatosUser/>
            <EquipoNew/>
            <EquipoOld/>
            <Aplicaciones/>
            <Herramientas/>
            <Clausula/>
            <Firmas/>
            <HerramientasDos/>
        </div>
    )
}

