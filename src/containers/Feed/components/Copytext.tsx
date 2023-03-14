import { TTags } from '@/src/types'
import { useRouter } from 'next/router'
import React from 'react'


function MyComponent() {
  const handleClick = () => {
    const text = 'oleg.lekhnitsky@gmail.com';
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Email adress copied');
  };

  return (
    
    <div className='hoverme' onClick={handleClick}>hello</div>
  );
}

export default MyComponent;