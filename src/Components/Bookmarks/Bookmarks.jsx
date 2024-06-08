import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3  ml-5 mt-7 pt-4 rounded-xl">
           <div className='bg-gray-300 p-4 rounded-xl'>
           <div>
                <h3 className='text-3xl text-[#6047EC] exo-2-bold text-center my-3'>Spent time on read : {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center exo-2-bold">Bookmarked Blog : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
           </div>
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.object,
    readingTime:PropTypes.number
}
export default Bookmarks;