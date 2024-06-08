import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddToBookmark }) => {
    const { title, cover, author, author_img, reading_time, posted_date,hashtags } = blog
    return (
        <div className='mt-20'>
            <img className='w-full rounded-xl' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-3 items-center my-5'>
                    <img className='h-[50px] rounded-full ' src={author_img} alt="" />
                    <div>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
                </div>
               
                <div className='my-5  flex items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={() =>handleAddToBookmark(blog)} 
                    className="text-2xl"><CiBookmark /></button>

                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p className='mt-3'>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}><a className='mr-2' href="">{hashtag}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired
}
export default Blog;