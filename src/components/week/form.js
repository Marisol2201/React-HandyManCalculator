import React from "react";

class Form extends React.Component {

    render() {
        return (
            <>
            {/* Special version of Bootstrap that only affects content wrapped in .bootstrap-iso */}
            <link rel="stylesheet" href="https://formden.com/static/cdn/bootstrap-iso.css" /> 
            {/* Inline CSS based on choices in "Settings" tab */}
            <style dangerouslySetInnerHTML={{__html: ".bootstrap-iso .formden_header h2, .bootstrap-iso .formden_header p, .bootstrap-iso form{font-family: Arial, Helvetica, sans-serif; color: black}.bootstrap-iso form button, .bootstrap-iso form button:hover{color: white !important;} .asteriskField{color: red;}" }} />
            {/* HTML Form (wrapped in a .bootstrap-iso div) */}
            <div className="bootstrap-iso">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                    <form method="post">
                        <div className="form-group ">
                        <label className="control-label requiredField" htmlFor="id">
                            Nombre
                            <span className="asteriskField">
                            *
                            </span>
                        </label>
                        <input className="form-control" id="id" name="id" type="text" />
                        <span className="help-block" id="hint_id">
                            Por favor digite su nombre completo
                        </span>
                        </div>
                        <div className="form-group ">
                        <label className="control-label requiredField">
                            Servicio
                            <span className="asteriskField">
                            *
                            </span>
                        </label>
                        <div className=" ">
                            <div className="checkbox">
                            <label className="checkbox">
                                <input name="checkbox" type="checkbox" defaultValue="Servicio1" />
                                Servicio1
                            </label>
                            </div>
                            <div className="checkbox">
                            <label className="checkbox">
                                <input name="checkbox" type="checkbox" defaultValue="Servicio2" />
                                Servicio2
                            </label>
                            </div>
                        </div>
                        </div>
                        <div className="form-group">
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </>
        );
    }
}

export default Form;
