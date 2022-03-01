import React, {useState} from 'react';
import Image from 'next/image'
import Link from 'next/link'
import {HiMenuAlt1} from 'react-icons/hi'

function header() {

  const [ishidden, setIsHidden] = useState('hidden')
  
  //function to show and hide links(onClick) on menubar
  const hideShowLinks = () => {
    if(ishidden == 'hidden') {
      return setIsHidden('flex')
    }
    else {
      setIsHidden('hidden')
    }
  }

  return (
    <>
      {/* Header for tablet and other big screens */}
      <header className='bg-wheat hidden pt-2 pb-2 pl-4 md:flex drop-shadow-xl justify-between fixed mb-48 drop-shadow-2xl z-10 w-screen'>
          <Link href="/">
            <a>
              <Image 
                  src='/logo.png'
                  className='rounded-xl mt-4 hover:cursor-pointer'
                  height={30}
                  width={140}
              />
            </a>
          </Link>
          <ul className='font-play font-black justify-center gap-10 pt-1 flex pr-10'>
            <Link href='/tech'>
              <li className='hover:cursor-pointer hover:underline'>
                <a>
                  Tech
                </a>
              </li>
            </Link>
            <Link href='/web'>
              <li className='hover:cursor-pointer hover:underline'>
                <a>
                  Web
                </a>
              </li>
            </Link>
            <Link href='/dev'>
              <li className='hover:cursor-pointer hover:underline'>
                <a>
                  Dev
                </a>
              </li>
            </Link>
            <Link href='/developer'>
              <li className='hover:cursor-pointer hover:underline'>
                <a>
                  Developer
                </a>
              </li>
            </Link>
            <Link href='/programming'>
              <li className='hover:cursor-pointer hover:underline'>
                <a>
                  Programming
                </a>
              </li>
            </Link>
          </ul>
      </header>
      {/* Header for mobile screens */}
      <header>
        <div className='md:hidden bg-wheat flex justify-between pt-3 pb-1 fixed z-10 w-109 pl-3 '>
        <Link href="/">
          <a>
            <Image 
              src='/logo.png'
              className='rounded-xl mt-4 hover:cursor-pointer'
              height={30}
              width={140}
            />
          </a>
        </Link>        
        <HiMenuAlt1 onClick={hideShowLinks} className='mr-12 h-8 w-8 hover:cursor-pointer' />
        </div>
        <div className='flex justify-end'>
        <ul className={`font-play md:hidden mt-12 fixed ${ishidden} bg-white px-8 h-auto pb-6 w-auto flex flex-col items-center text-xl font-black z-10 border-2 `}>
          <Link href='/tech'>
            <li className='hover:cursor-pointer hover:underline'>
              <a>
                Tech
              </a>
            </li>
          </Link>
          <Link href='/web'>
            <li className='hover:cursor-pointer hover:underline'>
              <a>
                Web
              </a>
            </li>
          </Link>
          <Link href='/dev'>
            <li className='hover:cursor-pointer hover:underline'>
              <a>
                Dev
              </a>
            </li>
          </Link>
          <Link href='/developer'>
            <li className='hover:cursor-pointer hover:underline'>
              <a>
                Developer
              </a>
            </li>
          </Link>
          <Link href='/programming'>
            <li className='hover:cursor-pointer hover:underline'>
              <a>
                Programming
              </a>
            </li>
          </Link>
        </ul>
        </div>
      </header>
    </>
  )
}

export default header;
