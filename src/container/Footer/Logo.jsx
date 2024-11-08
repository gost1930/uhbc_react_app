import img from '../../assets/logo.jpg'

export default function Logo() {
    return(
        <div className="flex flex-col">
            <a href=""><img src={img} alt="" className='w-32' /></a>
        </div>
    )
};