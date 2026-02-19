import React from "react";

export default function FormText() {
    const textPswd = React.useRef();
    const textPswd2 = React.useRef();

    const onBlurPassword = () => {
        let pswd = textPswd.current.value;
        if (pswd !== "" && !pswd.match(/^[a-zA-Z0-9]+$/)){
            textPswd.current.value = "";
            alert("ต้องเป็น 0-9, a-z, A-Z เท่านั้น");
        }
    }
    const onBlurPassword2 = () => {
        if (textPswd2.current.value !== textPswd.current.value){
            textPswd2.current.value = "";
            alert("รหัสผ่านไม่ตรงกัน");
        }
    }
    return (
        <div className="mt-4 mx-auto p-3 rounded" style={{ width: '400px', backgroundColor: '#cee' }}>
            <form>
                <div className="form-group mb-2">
                    <label htmlFor="login">ชื่อผู้ใช้(Login)</label>
                    <input type="text" name="login" className="form-control form-control-sm" id="login"/>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="pswd">รหัสผ่าน(Password)</label>
                    <input type="password" name="pswd" maxLength="10" className="form-control form-control-sm" id="pswd" ref={textPswd} onBlur={onBlurPassword}/>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="pswd2">ใส่รหัสผ่านอีกซ้ำ</label>
                    <input type="password" name="pswd2" maxLength="10" className="form-control form-control-sm" id="pswd2" ref={textPswd2} onBlur={onBlurPassword2}/>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="memo">บันทึกช่วยจำ</label>
                    <textarea name="memo" id="memo" className="form-control form-control-sm" rows="2" maxLength={200}></textarea>
                </div>
                <div className="text-center">
                    <button className="btn btn-sm px-4 btn-primary">
                        OK
                    </button>
                </div>
            </form>
                </div>
    )
}