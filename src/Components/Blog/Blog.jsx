import React from 'react';
import './Blog.scss';

function Blog() {
  return (
    <div className='Blog_container container mt-3 py-3'>
         < div className='top d-flex justify-content-between'>
            <h1>Our Blog</h1>
            <button className='read_blog btn custome_radius'>Read Blog</button>
         </div>
         <p>Our Important News , Here and Leates Feed</p>
         <div className='body_blog pb-2'>
               <div className="items box_shadow custome_radius p-3 d-flex flex-column gap-2 align-items-center">
                <img className='blog_img custome_radius' src="https://nextbigtechnology.com/wp-content/uploads/2024/02/Mental-Health-and-Counseling-Service-App-Development-740x400.png" alt="" />
                  <p className='f20 title_blog'>Implementing Telegram Bot for Fast Respopnse</p>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel sit eaque maxime dolorum dolores beatae expedita voluptas facilis accusamus!</small>
                  <div className='more f16'>Read More</div>
               </div>

               <div className="items box_shadow custome_radius p-3 d-flex flex-column gap-2 align-items-center">
                <img className='blog_img custome_radius' src="https://nextbigtechnology.com/wp-content/uploads/2024/02/Mental-Health-and-Counseling-Service-App-Development-740x400.png" alt="" />
                  <p className='f20 title_blog'>Implementing Telegram Bot for Fast Respopnse</p>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel sit eaque maxime dolorum dolores beatae expedita voluptas facilis accusamus!</small>
                  <div className='more f16'>Read More</div>
               </div>

               <div className="items box_shadow custome_radius p-3 d-flex flex-column gap-2 align-items-center">
                <img className='blog_img custome_radius' src="https://nextbigtechnology.com/wp-content/uploads/2024/02/Mental-Health-and-Counseling-Service-App-Development-740x400.png" alt="" />
                  <p className='f20 title_blog'>Implementing Telegram Bot for Fast Respopnse</p>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel sit eaque maxime dolorum dolores beatae expedita voluptas facilis accusamus!</small>
                  <div className='more f16'>Read More</div>
               </div>

               <div className="items box_shadow custome_radius p-3 d-flex flex-column gap-2 align-items-center">
                <img className='blog_img custome_radius' src="https://nextbigtechnology.com/wp-content/uploads/2024/02/Mental-Health-and-Counseling-Service-App-Development-740x400.png" alt="" />
                  <p className='f20 title_blog'>Implementing Telegram Bot for Fast Respopnse</p>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel sit eaque maxime dolorum dolores beatae expedita voluptas facilis accusamus!</small>
                  <div className='more f16'>Read More</div>
               </div>

               <div className="items box_shadow custome_radius p-3 d-flex flex-column gap-2 align-items-center">
                <img className='blog_img custome_radius' src="https://nextbigtechnology.com/wp-content/uploads/2024/02/Mental-Health-and-Counseling-Service-App-Development-740x400.png" alt="" />
                  <p className='f20 title_blog'>Implementing Telegram Bot for Fast Respopnse</p>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel sit eaque maxime dolorum dolores beatae expedita voluptas facilis accusamus!</small>
                  <div className='more f16'>Read More</div>
               </div>
               
         </div>
    </div>
  )
}

export default Blog