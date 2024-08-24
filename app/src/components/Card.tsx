import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons/faTrashCan'

const Card = (props: {firstname:string, lastname:string, phoneNumber: number}) => {
  return (
    <div style={{width:'400px', margin:'20px', padding:'10px', borderRadius:'20px'}} className='bg-zinc-100'>
        <div className='flex justify-between items-center'>

            <div className='flex'>
                <div className='me-3'>      
                    <img src={`https://avatar.iran.liara.run/username?username=${props.firstname}+${props.lastname}]`} alt="placeholder" style={{width:'70px', borderRadius:'40px'}}/>
                </div>
                <div className='mt-2'>
                    <h1 className='font-bold'>{`${props.firstname} ${props.lastname}`}</h1>
                <div>
                    
                </div>
                    <p>{props.phoneNumber}</p>
                </div>
            </div>
            <div>
                <button className='p-3'>
                <FontAwesomeIcon icon={faTrashCan} style={{color:"#dc2626"}}/>
                </button>
            </div>
        </div>
      </div>
  )
}

export default Card
