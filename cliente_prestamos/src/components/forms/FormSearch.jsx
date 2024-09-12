export const FormSearch = () => {
    return (
        <form action="" method="get" classname="col-12 p-2">
            <h1 classname="text-center text-secundary">Busca aqui</h1>
            <br/>
            <div classname="form-floating mb-4">
                <input type="text" classname="form-control" id="floatingInput" name="buscaserial"/>
                <label for="floatingInput">Serial del equipo</label>
            </div>
            <h4 classname="text-center text-secundary">O tambien por:</h4>
            <div classname="form-floating">
                <input type="text" classname="form-control" id="floatingPassword" name="buscacedula"/>
                <label for="floatingPassword">Numero de identificación</label>
            </div>
            <br/>
            <button type="submit" classname="btn btn-primary" name="btnbuscar" value="ok">Buscar</button>
        </form>

    )
}