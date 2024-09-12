import { DatosUser } from "../../components/DatosUser"
import { FormSearch } from "../../components/forms/FormSearch"
import { HeaderActa } from "../../components/HeaderActa"
import { EquipoNew } from "../../components/EquipoNew"
import { EquipoOld } from "../../components/EquipoOld"

export const CreateActa = () => {
    return (
        <div>
            <FormSearch/>
            <HeaderActa/>
            <DatosUser/>
            <EquipoNew/>
            <EquipoOld/>
        </div>
    )
}

