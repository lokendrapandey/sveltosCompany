import React from 'react'

const Form2 = () => {
  return (
    <div className="container border border-dark">
    <h2>Form</h2>
    <form>
      <div className='mb-3'>
        <h6>Name</h6>
        <input type="text" id="name" name="name" placeholder='Enter your name' classNam='bg-dark rounded-2 absolute' />
      </div>
      <div className='mb-3'>
        <h6>Name</h6>
        <input type="text" id="name" name="name" placeholder='Enter your name' classNam='bg-dark rounded-2 absolute' />
      </div>
      
      <div>
        <button style={{ marginRight: '10px' }} className='btn btn-danger'>Add service</button>
        <button className="btn btn-danger" type="reset">Reset</button>
      </div>
    </form>
  </div>
  )
}

export default Form2
