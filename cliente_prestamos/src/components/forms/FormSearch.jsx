export const FormSearch = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <form action="" method="get" className="col-12 col-md-4 p-1">
                <h1 className="text-center text-secondary">Busca aquí</h1>
                <br />
                <div className="input-group mb-2">
                    <div className="form-floating flex-grow-1">
                        <input type="text" className="form-control" id="floatingInput" name="buscaserial" />
                        <label htmlFor="floatingInput">Serial del equipo</label>
                    </div>
                    <button type="submit" className="btn btn-primary ms-2" name="btnbuscar" value="ok">Buscar</button>
                </div>

                <h4 className="text-center text-secondary">O también por:</h4>
                <div className="input-group mb-3">
                    <div className="form-floating flex-grow-1">
                        <input type="text" className="form-control" id="floatingPassword" name="buscacedula" />
                        <label htmlFor="floatingPassword">Número de identificación</label>
                    </div>
                    <button type="submit" className="btn btn-primary ms-2" name="btnbuscarnum" value="ok">Buscar</button>
                </div>
            </form>
        </div>
    );
}
