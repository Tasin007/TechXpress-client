

const FAQ = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          data-aos="fade-down"
          src="https://i.ibb.co/Mn0qMpp/Feb-Business-9.jpg" 
          className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl"
          alt="FAQ"
        />
        <div className="w-full lg:w-1/2 mr-8">
          <h1 className="text-5xl font-bold pb-8">
            Frequently Asked Questions
          </h1>
          <div className="collapse collapse-arrow bg-rose-100">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              How do I find the right product for my needs?
            </div>
            <div className="collapse-content">
              <p>
                Finding the right product is easy! Simply use our advanced
                search filters or reach out to our customer support team for
                personalized recommendations.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-amber-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What payment methods do you accept?
            </div>
            <div className="collapse-content">
              <p>
                We accept various payment methods, including major credit cards,
                PayPal, and online banking. Choose the method that's most
                convenient for you during checkout.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-cyan-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How can I track my order?
            </div>
            <div className="collapse-content">
              <p>
                Tracking your order is simple. Use the tracking number provided
                in your order confirmation email and enter it on our website's
                tracking page to get real-time updates on your delivery status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
