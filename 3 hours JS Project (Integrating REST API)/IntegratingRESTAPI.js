let val = document.addEventListener('submit', productDetails);

async function productDetails(event) {
     event.preventDefault();
    let ItemName = document.getElementById('Item').value;
    let Description = document.getElementById('Description').value;
    let Price = document.getElementById('Price').value;
    let Quantity = document.getElementById('Quantity').value;

    let obj = {
        ItemName: ItemName,
        Description: Description,
        Price: Price,
        Quantity: Quantity
    }

    try {
        const response = await axios.post("https://crudcrud.com/api/aec3a736a8054bcd93d174c066ccb785/admin", obj)

        showProductOnScreen(response.data)

    }

    catch (error) {
        console.log(error);
    }

}

window.addEventListener('DOMContentLoaded', 
async () => {
    const respnse = await axios.get("https://crudcrud.com/api/aec3a736a8054bcd93d174c066ccb785/admin")
    try 
    {
        for (let i = 0; i < respnse.data.length; i++) {
            showProductOnScreen(respnse.data[i])
        }
    }

    catch (err) {
        console.log(err)
    }

})

function showProductOnScreen(obj) {
    let parentelem = document.getElementById('outputList');
    let childelem = document.createElement('li');

    childelem.textContent = obj.ItemName + '---' + obj.Description + '---' + obj.Price+ '---' + obj.Quantity*obj.Price;

    let btn1 = document.createElement('button');
    btn1.textContent = 'Buy1';
    btn1.style.marginLeft = '20px';

    let btn2 = document.createElement('button');
    btn2.textContent = 'Buy2';
    btn2.style.marginLeft = '40px';

    let btn3 = document.createElement('button');
    btn3.textContent = 'Buy3';
    btn3.style.marginLeft = '50px';
    
    btn1.onclick = async () => {
        await axios.put(`https://crudcrud.com/api/aec3a736a8054bcd93d174c066ccb785/admin/${obj._id}`);
        try{
        obj.Quantity = (obj.Quantity*obj.Price)-obj.Price;
      } catch (err) {
        console.log(err);
      }
    };

      btn2.onclick = async () => {
        await axios.put(`https://crudcrud.com/api/aec3a736a8054bcd93d174c066ccb785/admin/${obj._id}`);
        try{
        obj.Quantity = (obj.Quantity*obj.Price)-2*obj.Price;
      } catch (err) {
        console.log(err);
      }
    };

    btn3.onclick = async () => {
        await axios.put(`https://crudcrud.com/api/aec3a736a8054bcd93d174c066ccb785/admin/${obj._id}`);
        try{
        obj.Quantity = (obj.Quantity*obj.Price)-3*obj.Price;
      } catch (err) {
        console.log(err);
      }
    };

    parentelem.appendChild(childelem);
    childelem.appendChild(btn1);
    childelem.appendChild(btn2);
    childelem.appendChild(btn3);
}