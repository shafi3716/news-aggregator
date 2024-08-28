import React from 'react'

interface Props{
    isShow: boolean
}

const Filter: React.FC<Props> = ({isShow}) => {
  return (
   <>
    {
        isShow &&
        <div>
            filter ===
        </div>
    }
   </>
  )
}

export default Filter
