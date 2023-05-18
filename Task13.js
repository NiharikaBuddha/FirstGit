function submitdetails(event){
    event.preventDefault()
    const fname = event.target.fname.value
    const lname = event.target.lname.value
    const mobile = event.target.mobile.value

    // localStorage.setItem('first name',fname)
    // localStorage.setItem('last name',lname)
    // localStorage.setItem('mobile number',mobile)

    const obj = {
        fname,
        lname,
        mobile
    } 

    localStorage.setItem(obj.lname,JSON.stringify(obj))
    showuseronscreen (obj)

}


function showuseronscreen (obj){
    const parentelem = document.getElementById("listofitems")
    const childelem = document.createElement("li")
    childelem.textContent = obj.fname + ' - ' + obj.lname+' - ' + obj.mobile

    const deletebutton = document.createElement("input")
    deletebutton.type = "button"
    deletebutton.value = "Delete Input"

    deletebutton.onclick = () => {
        localStorage.removeItem(obj.lname)
        parentelem.removeChild(childelem)
    }


    const editbutton = document.createElement("input")
    editbutton.type ="button"
    editbutton.value = "Edit Input"

    editbutton.onclick = () => {
        localStorage.removeItem(obj.lname)
        parentelem.removeChild(childelem)
        document.getElementById("fnameinput").value = obj.fname
        document.getElementById("lnameinput").value = obj.lname
        document.getElementById("mobileinput").value = obj.mobile

    }



    childelem.appendChild(deletebutton)
    childelem.appendChild(editbutton)

    parentelem.appendChild(childelem)
}