import { space } from 'postcss/lib/list';
import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, author, author_img, reading_time, posted_date,hashtags } = blog
    return (
        <div>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-3 items-center'>
                    <img className='h-[50px] rounded-full ' src={author_img} alt="" />
                    <div>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
                </div>
               
                <div>
                    <span>{reading_time} min</span>

                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}><a className='mr-2' href="">{hashtag}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;