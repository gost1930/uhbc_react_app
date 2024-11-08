import fac from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'
import x from '../../assets/twitter.png'
import youtub from '../../assets/youtube.png'

export default function Social() {
    return(
        <div className="flex flex-row flex-wrap">
            <a href=""><img src={fac} alt="" className='w-10 h-10 mx-3' /></a>
            <a href=""><img src={insta} alt="" className='w-10 h-10 mx-3' /></a>
            <a href=""><img src={x} alt="" className='w-10 h-10 mx-3' /></a>
            <a href=""><img src={youtub} alt="" className='w-10 h-10 mx-3' /></a>
        </div>
    )
};