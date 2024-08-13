import React from 'react';
import { useContext, useState } from 'react';
import InputField from './InputField'
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import PaymentMethodCard from './PaymentMethodCard';
import card from '../../assets/card.svg'
import bank from '../../assets/bank.svg'
import arrowRight from '../../assets/arrowRight.svg'


const inputFields = [
  { label: 'First Name', name: 'firstName', placeholder: 'Enter your first name', type: 'text' },
  { label: 'Email', name: 'email', placeholder: 'Enter your email', type: 'text' },
  { label: 'Address', name: 'address', placeholder: 'Enter your address', type: 'number' },
  { label: 'Last Name', name: 'lastName', placeholder: 'Enter your last name', type: 'text' },
  { label: 'Phone', name: 'phone', placeholder: 'Enter your phone number', type: 'number' },
  { label: 'City', name: 'city', placeholder: 'City', type: 'text' },
  { label: 'Code postal', name: 'codePostal', placeholder: 'Enter your code postal', type: 'number' },
  {label:'' ,name:'cardNumber',placeholder:'Card number', type:'number'},
  {label:'', name:'expirationDate', placeholder:'Expiration date (MM/YY)', type:'date'},
  {label:'', name:'securityCode', placeholder:'Security code', type:'number'},
];

const Checkout = () => {
  const { cart } = useContext(CartContext)

  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  const [inputValue, setInputValue] = useState(''); 
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); 
  };

  return (
    <div className='font-archivo mt-40'>
      <h1 className='align-left text-xl font-bold my-5'>Checkout</h1>
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-32 md:gap-16 gap-10'>
        <div className='col-span-1'>
          <h2 className='font-semibold text-lg'>
            Your order
          </h2>
          <div className='font-medium text-gray-300'>
            By placing your order, you agree to Ballamas <span className='underline text-black'>Privacy</span> and <span className='underline text-black'> Policy</span>.
          </div>
          <div>
            {
              cart.map((item) => (
                <div className='flex justify-between items-center py-5' key={item.id}>
                  <div className='flex justify-start gap-2'>
                    <img src={item.featuredImage.url} className='rounded-lg' alt={item.title} width={70} height={70} />
                    <div className='flex flex-col gap-1'>
                      <span>{item.title}</span>
                      {item.variants.edges[0].node.title.includes('/') ? (
                        <div className='flex gap-1 text-gray-300'>
                          <p>Color: {item.variants.edges[0].node.title.split('/')[1].trim()}</p>
                          <span>-</span>
                          <p>Size: {item.variants.edges[0].node.title.split('/')[0].trim()}</p>
                        </div>
                      ) : (
                        <p className='text-gray-300'>Size: {item.variants.edges[0].node.title}</p>
                      )}
                    </div>
                  </div>
                  <div className='font-bold'>${item.variants.edges[0].node.price.amount * item.amount}</div>
                </div>
              ))
            }

          </div>
          <div>
            <h4>Discount code</h4>
            <form className='grid grid-cols-3 gap-2' onSubmit={handleSubmit}>
              <input 
              type="number"
               placeholder='Add discount count'
               value={inputValue}
               onChange={handleChange}
               className='bg-transparent text-black rounded-full w-full p-4 border border-black col-span-2' />
              <button type="submit" className='bg-black text-white w-full p-4 font-semibold rounded-full col-span-1'>Apply</button>
            </form>
            <div className='text-black font-bold my-4'>
              <span>New custumer ?</span>
              <span className='underline'>Sign up</span>
              <span className='text-gray-300 font-normal'>To get better offer</span>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between items-center text-gray-300'>
                <span>Subtotal</span>
                <span>{cart.reduce((total, item) => total + (item.variants.edges[0].node.price.amount * item.amount), 0).toFixed(2)}</span>
              </div>
              <div className='flex justify-between items-center text-gray-300'>
                <span>Dicount</span>
                <span>{inputValue}</span>
              </div>
              <hr className='border' />
              <div className='flex justify-between items-center text-black mt-2'>
                <span>Order total</span>
                <span>{cart.reduce((total, item) => total + (item.variants.edges[0].node.price.amount * item.amount), 0).toFixed(2) + inputValue}</span>
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
              {inputFields.slice(3, 7).map((field, index) => (
                <InputField
                  key={index + 7}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mb-20">
          <div className='grid grid-cols-2 gap-4'>
          <PaymentMethodCard
            isSelected={selectedCard === 'card1'}
            onSelect={() => handleCardSelect('card1')}
          >
             <img src={card} alt="icon " width={30} height={30}/>
            <p>Debit / Credit Card</p>
          </PaymentMethodCard>

          <PaymentMethodCard
            isSelected={selectedCard === 'card2'}
            onSelect={() => handleCardSelect('card2')}
          >
             <img src={bank} alt="icon bank"width={30} height={30} />
           <p>Virtual Account</p>
          </PaymentMethodCard>
          </div>
          <div className='mt-5'>
              {inputFields.slice(7, 8).map((field, index) => (
                <InputField
                  key={index + 8}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
            <div className='grid grid-cols-2 gap-4 mt-2'>
              {inputFields.slice(8).map((field, index) => (
                <InputField
                  key={index + 8}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              ))}
            </div>

            <Link to='/payment'>
            <button className='bg-black text-white w-full p-4 font-semibold rounded-full flex items-center justify-center mt-5 gap-1'>
              <span>Pay</span>
              <p className='flex items-center justify-center'>
              <span className='text-xs'>$</span>
              <span>{cart.reduce((total, item) => total + (item.variants.edges[0].node.price.amount * item.amount), 0).toFixed(2) + inputValue}</span>
              </p>
               <img src={arrowRight} alt="" />
            </button>
            </Link>
        </div>
       
      </div>
    </div>
  );
};

export default Checkout;
