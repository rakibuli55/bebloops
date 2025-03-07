
import { Link } from 'react-router-dom';
import MyMovementCard from '../common/MyMovementCard';

const myMovementData = [
    {
        id:1,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:2,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:3,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:4,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:5,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    }
]

const MyMovement = () => {
  return (
    <div className='p-4 rounded-[8px] bg-white'>
      {/* title  */}
      <div className='flex items-center justify-between'>
        <p className='text-[18px] text-themeBlack font-semibold custom-2xl:text-[17px]'>My Movement</p>
        <Link to={'/'} className='inline-block text-primaryColor custom-2xl:text-sm'>See all</Link>
      </div>
      <div>
        {
            myMovementData.map((item) => (
                <div key={item?.id} className='mt-4'>
                    <MyMovementCard item={item} />
                </div>
            ))
        }
        
      </div>
    </div>
  );
};

export default MyMovement;