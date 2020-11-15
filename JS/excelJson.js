
//captures the table and saves it locally
function upDateEx(){
    /* set up XMLHttpRequest */
    var url = "../excel/TaxasMaquininhas.xlsx";
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";

    oReq.onload = function (e) {
        var arraybuffer = oReq.response;

        /* convert data to binary string */
        var data = new Uint8Array(arraybuffer);
        var arr = new Array();
        for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");

        /* Call XLSX */
        var workbook = XLSX.read(bstr, { type: "binary" });

        var first_sheet_name = workbook.SheetNames[0];
        /* Get worksheet */
        var worksheet = workbook.Sheets[first_sheet_name];

        //Calls the function to encrypt the data
        let newData = encrypt(JSON.stringify(XLSX.utils.sheet_to_json(worksheet, { raw: true })))
        
        localStorage.setItem("lastUp", newData)
        let hourAct = new Date().getHours()
        localStorage.setItem("lastDateUp", hourAct)
    }
    oReq.send();
}

