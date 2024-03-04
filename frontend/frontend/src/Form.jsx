import React, { useState } from 'react';



const Form = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [GSTNumber, setGSTNumber] = useState('');
  const [pincode, setPincode] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [BranchManagerName, setBranchManagerName] = useState('');
  const [Branchaddress, setBranchaddress] = useState('');
  const [BranchContact, setBranchContact] = useState('');

  async function addProduct(e) {
    e.preventDefault(); // Prevent the default form submission

    console.table({ name, address, GSTNumber, pincode, contactNumber });
    // const userId = JSON.parse(localStorage.getItem('user'))._id;
    const result = await fetch('http://localhost:5000/add-product', {
      method: 'POST',
      body: JSON.stringify({ name, address, GSTNumber, pincode, contactNumber, BranchManagerName, Branchaddress, BranchContact }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await result.json();
    console.log(data);
  };
  
  function clearForm() {
    setName('');
    setAddress('');
    setGSTNumber('');
    setPincode('');
    setContactNumber('');
    setBranchManagerName('');
    setBranchaddress('');
    setBranchContact('');
  }


  return (
    <div style={{ height: '900px', width: '500px' }} className="container border border-primary  " >
      <h2>Form</h2>
      <form>
        <div className='mb-2'>
          <h6 style={{ marginLeft: '-245px' }}>Name</h6>  
          <input style={{ height: '40px', width: '300px' }} type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' className='bg-light rounded-2 absolute text-black border-0 shadow-lg p-3 mb-2 bg-white rounded' />
        </div>
        <div className='mb-2'>
          <h6 style={{ marginLeft: '-230px' }}>Address</h6> 
          <input style={{ height: '40px', width: '300px' }} type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter Address' className='bg-light rounded-2 absolute text-black border-0 shadow-lg p-3 mb-2 bg-white rounded' />
        </div>
        <div className='mb-2'>
          <h6 style={{ marginLeft: '-195px' }}>GST Number</h6>
          <input style={{ height: '40px', width: '300px' }} type="text" id="gstNumber" name="gstNumber" value={GSTNumber} onChange={(e) => setGSTNumber(e.target.value)} placeholder='Enter your GST Number' className='bg-light  rounded-2 absolute text-black border-0 shadow-lg p-3 mb-2 bg-white rounded' />
        </div>
        <div className='mb-2'>
          <h6 style={{ marginLeft: '-230px' }}>Pincode</h6>
          <input style={{ height: '40px', width: '300px' }} type="text" id="pincode" name="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder='Enter your Pincode' className='bg-light rounded-2 absolute text-black border-0 shadow-lg p-3 mb-2 bg-white rounded' />
        </div>
        <div className='mb-2'>
          <h6 style={{ marginLeft: '-170px' }}>Contact Number</h6>
          <input style={{ height: '40px', width: '300px' }} type="text" id="contactNumber" name="contactNumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder='Enter your Contact Number' className='bg-light rounded-2 absolute text-black border-0 shadow-lg p-3 mb-2 bg-white rounded' />
        </div>
        <h5 style={{ marginLeft: '-145px' }}>Service Location </h5>
        <div className='mb-2'>
          <h6 style={{ marginLeft: '-125px' }}>Branch manager name </h6>
          <input style={{ height: '40px', width: '300px' }} type="text" id="contactNumber" name="Branch manager name" value={BranchManagerName} onChange={(e) => setBranchManagerName(e.target.value)} placeholder='Enter Branch Manager Name' className='bg-light rounded-2 absolute text-black border-0 shadow-lg p-3 mb-2 bg-white rounded' />
        </div>
        <div className='mb-2'>
          <h6 style={{ marginLeft: '-230px' }}>Address</h6>
          <input style={{ height: '40px', width: '300px' }} type="text" id="contactNumber" name="Address" value={Branchaddress} onChange={(e) => setBranchaddress(e.target.value)} placeholder='Enter Address' className='bg-light rounded-2 absolute text-black border-0 shadow-lg p-3 mb-2 bg-white rounded' />
        </div>
        <div className='mb-2'>
          <h6 style={{ marginLeft: '-180px' }}>Branch Contact</h6>
          <input style={{ height: '40px', width: '300px' }} type="text" id="contactNumber" name="Branch Contact" value={BranchContact} onChange={(e) => setBranchContact(e.target.value)} placeholder='Enter Branch Contact' className='bg-light rounded-2 absolute text-black border-0 shadow-lg p-3 mb-2 bg-white rounded' />
        </div>

        <div style={{ marginLeft: '-75px' }} className='container  d-flex justify-content-end'>
          {/* <button style={{ marginRight: '10px' }} className='btn btn-danger' type="submit" onClick={addProduct}>Add Location</button> */}
          <button style={{height:'60px' , marginRight: '10px' }} className='btn btn-danger' type="submit" onClick={addProduct}><p>Add Service<br/> Location</p></button>
          <button className="btn btn-danger" type="reset" onClick={clearForm}>Remove  </button>
        </div>
        <br />
        <button style={{ marginRight: '10px' }} className='btn btn-danger text-warning bg-dark' type="submit" onClick={addProduct}>Submit</button>
      </form>
    </div>
  );
};

export default Form;













