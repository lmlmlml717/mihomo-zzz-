
import Link from 'next/link';


export const More = ({ style }) => {
    return (
        <Link href="/character" className="more absolute bottom-[.35rem] right-[1.5rem] z-[4] " style={style}>
            
            查看更多
        </Link>
    )
}
