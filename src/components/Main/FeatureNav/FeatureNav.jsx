
import React from 'react';


import FeatureItems from '../../../utils/Main/FeatureItems'
import { resolveImgUrl } from '../../../utils/imgUrl'

export const    FeatureNav = ({current}) => {

    return (
         <div className='swiper-container w-[20.62rem] h-full '>
            <div className='swiper-wrapper'>
                <div className="swiper-slide w-full h-full decoration-none">
                    {FeatureItems.map((item, index) => (
                       <div key={item.id}  
                       className={current === item.id ? 'absolute bottom-0 left-0 w-full h-full ft-active' : 'hidden'}  >





                            <img src={resolveImgUrl(item.ItemUrl)} className=' h-full object-cover' />

                        </div>

                    ))}
                </div>

            </div>
        </div>
    )
 }

 export const FeatureTitle = ({title}) => {
    return (
        <div className='absolute left-0 bottom-0 z-[2] w-full h-[2.32rem] text-right pr-[1.2rem]'>


            <div className=' w-full h-[1.74rem] text-[.9rem] text-[rgba(216,250,0)] leading-0 font-normal items-center flex-row flex justify-end' style={{ fontFamily: 'inpin-hongmengti' }}>
                {title}


            </div>
            <div className='z-[-1] absolute bottom-0 left-0 w-[20.62rem] h-[2.32rem] bg-[url(/images/bar.9dcf6df.png)] bg-no-repeat bg-[length:100%_100%] '>

            </div>

            <div className='w-full h-[0.58rem] text-[.42rem] font-normal text-[#fff] items-center flex-row flex justify-end'>

            </div>
        </div>
      )
}
