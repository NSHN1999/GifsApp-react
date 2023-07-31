import  PropsTypes  from 'prop-types';

export const GifItem = ({title, url}) => {
    return(
        <div className='flex flex-col border-2 border-white rounded-lg overflow-hidden'>
            <img 
                className="w-full h-40"
                src={url}
                alt={title} 
            />
            <p className='overflow-hidden bg-[#131313] h-full text-sm text-center'>{title}</p>
        </div>
    );
};

GifItem.propTypes = {
    title: PropsTypes.string,
    url: PropsTypes.string
}