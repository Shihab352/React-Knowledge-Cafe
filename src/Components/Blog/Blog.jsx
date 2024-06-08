import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddToBookmark,handleMarkAsRead }) => {
    const { title, cover, author, author_img, reading_time, posted_date,hashtags } = blog
    return (
        <div className='my-10 border-b-2 pb-4'>
            <img className='w-full rounded-xl' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-3 items-center my-5'>
                    <img className='h-[50px] rounded-full ' src={author_img} alt="" />
                    <div>
                    <h3 className='text-2xl text-[#111111] exo-2-bold'>{author}</h3>
                    <p className="exo-2-semibold">{posted_date}</p>
                </div>
                </div>
               
                <div className='my-5  flex items-center gap-2'>
                    <span className="exo-2-medium">{reading_time} min read</span>
                    <button 
                    onClick={() =>handleAddToBookmark(blog)} 
                    className="text-2xl"><CiBookmark /></button>

                </div>
            </div>
            <h2 className="text-4xl exo-2-bold text-black">{title}</h2>
            <p className='mt-3'>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}><a className='mr-2 exo-2-medium text-[#11111199]' href="">{hashtag}</a></span>)
                }
            </p>
            <button 
            onClick={()=>handleMarkAsRead(reading_time)} 
            className="text-blue-700 mt-2 underline .exo-2-bold">Mark as Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func
}
export default Blog;