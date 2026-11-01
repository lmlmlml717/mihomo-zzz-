
import React from 'react';


export const Footer = ({ onTop }) => {
    return (
        <footer className="Rootfooter relative bg-[#111]">
            {/* ===================== */}
            <div className="relative w-[19.2rem] my-0 mx-auto">
                {/* ===================== */}
                <button className="Top  absolute left-0 z-[2] bg-[url(/images/top.png)] w-[1.6rem] h-[1.8rem] top-0 cursor-pointer opacity-1 bg-no-repeat bg-top bg-center bg-contain"

                    onClick={onTop}
                >
                </button>
                {/* ===================== */}
                <ul className='flex flex-row justify-end items-center w-full h-[64px]'>
                    <li className='relative w-[48px] h-[48px] mr-[20px] list-none p-0'>
                        <a className='decoration-none' href="https://space.bilibili.com/39281371?spm_id_from=333.1007.0.0" target="_blank">
                            <img className='absolute top-0 left-0 w-full' src={`/mihomo-zzz-/images/9afa1db07293fe897ae633464771281c_3334246706554554168.png`} />

                            <img className='icon absolute top-0 left-0 w-full opacity-0' src={`/mihomo-zzz-/images/ddb365feee82d9cdb6d10ccaeb6be014_7593885204719954942.png`} />

                        </a>
                    </li>

                </ul>
                {/* ===================== */}
            </div>
            {/* ===================== */}
            <div id="footer" className=''>
                <div>
                    <div className="mihoyo-cn-footer pt-[30px] pb-[20px] overflow-auto text-[14px] bg-[#000] text-[#fff]">


                        <div className=' flex w-[1280px] my-0 mx-auto justify-center'>
                            <div className='footer-logo'>
                                <div className='flex items-center'>
                                    <img className=' h-[42px]' src={`/mihomo-zzz-/images/fb9fb8e171957fc3a06322e5f19c772f_6978451248621653135.png`} />

                                    <span className='w-[1px] h-[28px] bg-[#666] mx-[25px]'></span>

                                    <h1>
                                        <img className='game-logo w-[110px] h-auto' src={`/mihomo-zzz-/images/af9fd2ec764d0af9c63b9762e6b32ef0_77819233022176362.png`} />

                                    </h1>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}