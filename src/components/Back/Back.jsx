
import Link from 'next/link';



export const Back = () => {
    return (

            <Link href="/news" className=''>
                <div className="back-btn font-hongmeng">
                    <div className="backArrow"></div>
                    <div className="backText">返回</div>
                    <div className="backSubtext">back</div>
                </div>
            </Link>

    );
};

