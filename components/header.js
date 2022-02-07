import React from 'react';
import Image from 'next/image'

function header() {
  return (
    <header>
        <Image 
            src='/logo.png'
            className=''
            height={21}
            width={111}
        />
    </header>
  )
}

export default header;
