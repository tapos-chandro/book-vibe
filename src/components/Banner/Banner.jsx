import bannerImg from '../../assets/banner.png';


const Banner = () => {
    return (
        <div className="flex flex-col-reverse items-center px-8 py-10 rounded-3xl lg:px-28 md:px-14 lg:py-20 lg:flex-row lg:justify-between lg:items-center bg-banner-bg">
            <div className=''>
                <h1 className='text-2xl font-bold text-center md:text-3xl lg:text-5xl text-primary-text-color lg:text-start'>Books to freshen up <br></br> your bookshelf</h1>
                <div className='flex justify-center lg:justify-start'>
                <button className='my-10 btn primary-btn '>View The List</button>
                </div>
            </div>
            <div className='flex justify-center w-full lg:w-1/2 md:w-3/4'>
                <img src={bannerImg} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;