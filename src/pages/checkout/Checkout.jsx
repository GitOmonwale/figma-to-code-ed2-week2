import React from 'react';
import InputField from './InputField'

const inputFields = [
  { label: 'First Name', name: 'firstName', placeholder: 'Enter your first name', type: 'text' },
  { label: 'Email', name: 'email', placeholder: 'Enter your email', type: 'text' },
  { label: 'Address', name: 'address', placeholder: 'Enter your address', type: 'number' },
  { label: 'Last Name', name: 'lastName', placeholder: 'Enter your last name', type: 'text' },
  { label: 'Phone', name: 'phone', placeholder: 'Enter your phone number', type: 'number' },
  { label: 'City', name: 'city', placeholder: 'City', type: 'text' },
  { label: 'Code postal', name: 'codePostal', placeholder: 'Enter your code postal', type: 'number' },
];

const Checkout = () => {
  return (
    <div className='font-archivo'>
      <h1 className='align-left text-xl font-bold my-5'>Checkout</h1>
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-32 md:gap-16 gap-10'>
        <div className='col-span-1'>
          <h2 className='font-semibold text-lg'>
            Your order
          </h2>
          <div className='font-medium text-gray-300'>
            By placing your order, you agree to Ballamas <span className='underline text-black'>Privacy</span> and <span className='underline text-black'> Policy</span>.
          </div>
          <div className='flex justify-between items-center py-5'>
            <div className=' flex justify-start gap-2'>
              <div className='bg-red rounded-xl h-20 w-10'>

              </div>
              <div className='flex flex-col gap-1'>
                <span>T-short</span>
                <div className='flex text-gray-300 gap-1'>
                  <span>Color: green</span>
                  -
                  <span>
                    Size: Small
                  </span>
                </div>
              </div>
            </div>
            <div className='font-bold'>$174.00</div>
          </div>
          <div>
            <h4>Discount code</h4>
            <div className='grid grid-cols-3 gap-2'>
              <input type="text" placeholder='Add discount count' className='bg-transparent text-black rounded-full w-full p-4 border border-black col-span-2' />
              <button className='bg-black text-white w-full p-4 font-semibold rounded-full col-span-1'>Apply</button>
            </div>
            <div className='text-black font-bold my-4'>
              <span>New custumer ?</span>
              <span className='underline'>Sign up</span>
              <span className='text-gray-300 font-normal'>To get better offer</span>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between items-center text-gray-300'>
                <span>Subtotal</span>
                <span>$524</span>
              </div>
              <div className='flex justify-between items-center text-gray-300'>
                <span>Dicount</span>
                <span>$0</span>
              </div>
              <hr className='border' />
              <div className='flex justify-between items-center text-black mt-2'>
                <span>Order total</span>
                <span>$524</span>
              </div>
            </div>
            <div>
              <h3 className='text-left font-bold text-black my-4'>Shipping method</h3>
              <div className="flex flex-col gap-4">
                <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
                  <div className='flex gap-2'>
                    <input type="radio" id="option1" name="option" value="1" className="mr-2 text-black border-black text-3xl" />
                    <div className='flex-col gap-2'>
                      <h3 className="text-lg font-semibold">Free Shipping</h3>
                      <p className="text-gray-300 text-sm">7-30 business days</p>
                    </div>
                  </div>
                  <div>$0</div>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
                  <div className='flex gap-2'>
                    <input type="radio" id="option2" name="option" value="2" className="mr-2 text-black border-black text-3xl" />
                    <div className='flex-col gap-2'>
                      <h3 className="text-lg font-semibold">Regular shipping</h3>
                      <p className="text-gray-300 text-sm">3-4 business days</p>
                    </div>
                  </div>
                  <div>$7.50</div>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
                  <div className='flex gap-2'>
                    <input type="radio" id="option3" name="option" value="3" className="mr-2 text-black border-black text-3xl" />
                    <div className='flex-col gap-2'>
                      <h3 className="text-lg font-semibold">Express Shipping</h3>
                      <p className="text-gray-300 text-sm">1-3 business days</p>
                    </div>
                  </div>
                  <div>$22.50</div>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className='col-span-1'>
          <h2 className='text-black font-bold'>Payment details</h2>
          <p className='font-medium text-gray-300'>Complete your purchase by providing your payment details.</p>
          <h3 className='text-lg font-bold mt-4 mb-2'>Shipping address</h3>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
            <div className='col-span-1 flex flex-col gap-4'>
              {inputFields.slice(0, 3).map((field, index) => (
                <InputField
                  key={index}
                  type={field.type}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              ))}
              <div>
                <label htmlFor="religion">Religion</label>
                <select
                  name='religion'
                  className='bg-transparent text-black rounded-full w-full p-4 border border-black mt-2'>
                  <option value="" disabled selected>Select your religion</option>
                  <option value="christianity">Christianity</option>
                  <option value="islam">Islam</option>
                  <option value="hinduism">Hinduism</option>
                  <option value="buddhism">Buddhism</option>
                  <option value="judaism">Judaism</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className='col-span-1 flex-col flex gap-4'>
              {inputFields.slice(3).map((field, index) => (
                <InputField
                  key={index + 3}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
