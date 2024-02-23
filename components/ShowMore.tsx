"use client";

import { ShowMoreProps } from '@/Types';
import React from 'react'
import CustomButton from './CustomButton';
import { useRouter } from 'next/navigation';
import { UpdateSearchParams } from '@/utils';

const ShowMore = ({pageNumber,isNext} : ShowMoreProps) => {

  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber+1)*10;
    const newPathName = UpdateSearchParams("limit",`${newLimit}`);

    router.push(newPathName,{scroll: false});
  }

  return (
    <div className='w-full flex-center gap-5 mt-10'>
        {!isNext &&
            <CustomButton
                title='Show More'
                btnType='submit'
                containerStyles='bg-primary-blue rounded-full text-white'
                handleClick={handleNavigation}
            />
        }
    </div>
  )
}

export default ShowMore