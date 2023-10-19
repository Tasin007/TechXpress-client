

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/LdvmN5p/Banner.png)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Empower Your Tech Journey</h1>
                    <p className="mb-5">Explore a wide range of cutting-edge technology and electronics products to stay ahead in the digital world. Find the best deals and innovations right here.</p>
                    <button className="btn btn-primary">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
