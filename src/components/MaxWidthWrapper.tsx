import React from 'react'

const MaxWidthWrapper = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='m-auto flex max-w-[1400px] justify-between p-5 md:py-5 md:px-10 xl:p-5'>
     {children}
    </div>
  )
}

export default MaxWidthWrapper