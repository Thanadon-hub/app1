import React from "react";

export default function FormSelectFile() {
    const inputFile = React.useRef();
    const selectMaxnumFiles = React.useRef();
    const selectMaxSize = React.useRef();

    let maxnumFiles = [1,2,3,4,5]
    let maxSizes = [50,100,200,500,1000]

    const onClickButton = () => {
        let maxNumFiles = selectMaxnumFiles.current.value;
        let maxSize = selectMaxSize.current.value;
        if(inputFile.current.files.length > maxNumFiles){
            alert(`จำนวนไฟล์ต้องไม่เกิน ${maxNumFiles} ไฟล์`);
            return
        }
        for(let f of inputFile.current.files){
            if(f.size > maxSize * 1000){
                alert(`ขนาดของแต่ละไฟล์ต้องไม่เกิน ${maxSize} KB`);
                return
            }
        }
        if(inputFile.current.files.length === 0){
            alert("กรุณาเลือกไฟล์อย่างน้อย 1 ไฟล์");
            return
        }
        alert("Files OK");
    }

    return (
        <div className="mt-4 mx-auto p-3 rounded" style={{ width: '400px', backgroundColor: '#cee' }}>

            <from>
                <div className="form-group mb-3">
                    <label htmlFor="maxNumFiles" className="form-label">จำนวนไฟล์สูงสุด</label>
                    <select id="maxNumFiles" className="form-select form-select-sm" ref={selectMaxnumFiles}>
                        {
                            maxnumFiles.map(i => {
                                return <option value={i}>{i}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="maxSize" className="form-label">ขนาดไฟล์สูงสุด (KB)</label>
                    <select id="maxSize" className="form-select form-select-sm" ref={selectMaxSize}>
                        {
                            maxSizes.map(i => {
                                return <option value={i}>{i}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="file" className="form-label">เลือกไฟล์</label>
                    <input type="file" id="file" accept="image/*" className="form-control form-control-sm" ref={inputFile} multiple />
                </div>
                <div className="text-center mt-4">
                    <button type="button" className="btn btn-sm px-4 btn-primary" onClick={onClickButton}>
                        OK
                    </button>
                </div>
            </from>
        </div>
    )
}
                        