import bannerImg from '../../assets/banner.png';


const Banner = () => {
    return (
        <div className="flex flex-col-reverse items-center py-10 rounded-3xl lg:px-28 px-14 lg:py-20 lg:flex-row lg:justify-between lg:items-center bg-banner-bg">
            <div className=''>
                <h1 className='text-3xl font-bold text-center lg:text-5xl text-primary-text-color lg:text-start'>Books to freshen up <br></br> your bookshelf</h1>
                <div className='flex justify-center lg:justify-start'>
                <button className='my-10 btn primary-btn '>View The List</button>
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <img src={bannerImg} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;