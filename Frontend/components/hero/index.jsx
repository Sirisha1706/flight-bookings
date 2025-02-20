import FilterSelect from "./FilterSelect";
import MainFilterSearchBox from "./MainFilterSearchBox";

const Index = () => {
  return (
    <section className="masthead -type-10">
      <div className="container-1500">
        <div className="row">
          <div className="col-lg-auto">
            <div className="masthead__content">
              
              <div data-aos="fade-up" data-aos-delay="300">
                <div className="row y-gap-50 items-center pt-30">
                  <FilterSelect />
                </div>
                {/* End .row */}

                <MainFilterSearchBox />
                {/* End filter content */}
              </div>
            </div>
            {/* End .masthead__content */}
          </div>
          {/* End .col-lg-auto */}
        </div>
        {/* End .row */}

        <div
          className="masthead__image"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div className="row y-gap-20 flex-nowrap">
            {/* End col-auto */}

            <div className="col-auto">
              <img
                src="/img/app/hero1.png"
                alt="image"
              />
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End .masthead__image */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default Index;
