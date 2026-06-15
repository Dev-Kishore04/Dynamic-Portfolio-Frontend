import React from 'react'

const Button = ({ id, title, leftIcon, rightIcon, containerClass,href,onClick,varient }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`group shadow-2xl  flex justify-center items-center gap-2
       z-20 cursor-pointer
      rounded-full bg-rose-100 px-7 py-3
      whitespace-nowrap ${containerClass}`}
    ><a className='flex justify-center items-center gap-2 z-20 whitespace-nowrap' href={href} download={varient==="download"? "Kishore_resume.pdf" : null}>
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}

      <span className="inter  text-xs uppercase">
        {title}
      </span>

      {rightIcon && <span className="flex scale-70 items-center">{rightIcon}</span>}
    </a>
      
    </button>
  )
}

export default Button
