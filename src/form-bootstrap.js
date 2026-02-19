import React from "react";

export default function FormBootstrap() {
    return (
        <div className="mt-3 mx-auto p-3" style={{ width: '400px', backgroundColor: '#cee' }}>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="login">Email</label>
                    <input type="text" name="login" className="form-control" id="login"/>

                </div>
                <div className="form-group mb-3">
                    <label htmlFor="pswd">Password</label>
                    <input type="password" name="pswd" className="form-control" id="pswd"/>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="select1">Select</label>
                    <select name="select1" id="select1" className="form-select">
                        <option value="1">item 1</option>
                        <option value="2">item 2</option>
                        <option value="3">item 3</option>
                    </select>
                </div>
                <button className="btn btn-primary">OK</button>
            </form>
        </div>
    )
}