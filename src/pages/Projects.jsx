import Geometry from '../components/Geometry'
import { useState } from 'react'
import ShopShopping from '../assets/ShopShopping.png'
import StudentReview from '../assets/StudentReview.png'
import themAIguy from '../assets/themAIguy.png'
import Bubble from '../assets/bubble.png'
import Javascript from '../assets/JavaScript.png'
import '../css/Projects.css'


export default function Projects() {

  const [items, setItems] = useState([{
    name: "themAIguy",
    website: "website",
    url: "https://themaiguys.bubbleapps.io/version-test/landing?",
    img: themAIguy,
    description: "This website is ai website like chatgpt you can ask what you need etc. it have a banch of features on this website",
    tech: [Bubble, Javascript],
  },{
    name: "StudentReview",
    website: "website",
    url: "https://studentreviewapp.io/version-test/login?",
    img: StudentReview,
    description: "Student Review platform for student that can they use it for making easily copy paste the text and drop and drag features",
    tech: [Bubble],
  }, {
    name: "ShopShopping",
    website: "website",
    url: "https://shopshopping.bubbleapps.io/version-test/user_shop?",
    img: ShopShopping,
    description: "Shopshopping is a website for e-commerce you can add more products and sell and make a payment using stripe",
    tech: [Bubble],
  }])


  return (
    <div className="w-full h-auto relative pb-[115px] overflow-hidden mt-[-80px]">
      <Geometry className='-z-10' />
      <div className="flex w-full h-[10vh]">
      </div>
      <div className='flex w-full h-[10vh] justify-center items-center mt-[100px]'>
          <h1 className='font-semibold text-[55px] font-poppins'>Projects</h1>
      </div>
      <div className="flex flex-col w-full h-auto p-[10px] justify-center items-center z-10">
        <div className='flex h-auto w-[91%] gap-[40px] p-[20px] justify-start items-center flex-wrap max-lg:justify-center'>
            { items.map((item, index) => (<div key={index}>
              <div className=' flex flex-col h-[450px] w-[400px] justify-start pt-[20px] pb-[20px] pr-[10px] pl-[10px] gap-[10px] max-xl:w-[300px] shadow-gray-400 shadow-md bg-gray-50 rounded-md'>
                <img src={item.img} className='flex h-[230px] w-full' />
                <div className='flex justify-between'>
                  <h1 className='text-[20px] font-bold font-poppins'>{item.name}</h1>
                  <a href={item.url} target="_blank" className="inline-block underline text-blue-500 hover:text-blue-800 px-4 py- rounded transition-colors duration-200"
                  >More Info</a>        
                </div>
                <div className='flex gap-[10px]'>
                  {item.tech.map((techIcon, techIndex) => (<img key={techIndex} src={techIcon} alt={`Technology ${techIndex}`} className="h-[30px] w-[30px]"/>))}
                </div>
                <p>Description: {item.description}</p>
              </div>
            </div>)) }
        </div>
      </div>
    </div>
  )
}
 
