import React from 'react'
import {motion, } from 'framer-motion'

const loadingContainer = {
    start: {
        x: '-100vh'
    },

    end: {
        x: '0',
        transition: {
            duration: 0.7,
            type: 'spring',
            stiffness: 120,
            staggerChildren: 0.1
        }
    }
}

const loadingContainerVariant = {
    start: {
        transition: {
            staggerChildren: 0.2
        }
    },
    end: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const loadingVariants = {
    start: {
        y: '0%'
    },
    end: {
        y: '100%',
        transition: {
            duration: 1.5,
    repeat: Infinity,
    ease: "easeOut"
        }
    }
}



const Loading = () => {
    
  return (
    <motion.div className='pt-[80px] h-full flex flex-col items-center bg-white dark:bg-black '
    variants={loadingContainer}
    initial='start'
    animate='end'
    >
        <h1 className='text-3xl font-bold p-10 text-orange-600'>Welcome Henry </h1>
        <p className='text-xl font-semibold'>Enjoy our amazing AI tools </p>

        <motion.div className='flex justify-around gap-x-3 p-4'
         variants={loadingContainerVariant}
         initial='start'
         animate='end'
         >
            <motion.span className='bg-orange-600 h-5 w-5 rounded-full block' 
            variants={loadingVariants}
            // transition={loadingCircleTransition}
            ></motion.span>
            <motion.span className='bg-orange-600 h-5 w-5 rounded-full block' 
            variants={loadingVariants}
            // transition={loadingCircleTransition}
            ></motion.span>
            <motion.span className='bg-orange-600 h-5 w-5 rounded-full block' 
            variants={loadingVariants}
            // transition={loadingCircleTransition}
            ></motion.span>            
            <motion.span className='bg-orange-600 h-5 w-5 rounded-full block' 
            variants={loadingVariants}
            // transition={loadingCircleTransition}
            ></motion.span>            
        </motion.div>

    </motion.div>
  )
}

export default Loading