import React from 'react';

function Seo() {
  return (
    <div className="w-full min-h-screen bg-[#1e1e22] flex flex-col items-center py-10">
      <span className="title text-[#61DAFB] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-10">
        ••• Search Engine Optimization Services •••
      </span>
      <div className="content-container w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 mt-10 lg:mt-20">
        <div className="text-container w-full lg:w-1/2 font-['Founders_Grotesk_X-Condensed'] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Search Engine Optimization (SEO) is a crucial digital marketing strategy aimed at enhancing the visibility and ranking of websites and web pages in search engine results. By optimizing various elements of a website, SEO helps increase organic traffic and improve the overall user experience. The process involves a combination of on-page and off-page techniques. On-page SEO focuses on optimizing content, meta tags, headers, and images, ensuring that they are relevant and aligned with targeted keywords. Off-page SEO, on the other hand, includes strategies like link building, social media engagement, and improving domain authority through high-quality backlinks from reputable sites. Technical SEO also plays a significant role, addressing issues like site speed, mobile-friendliness, and secure connections to enhance website performance and search engine rankings. Regular monitoring and analysis of SEO performance are essential to adapt strategies based on search engine algorithm updates and user behavior changes. Effective SEO not only boosts search engine rankings but also enhances the credibility and relevance of a website, driving more qualified traffic and supporting business growth.
        </div>
        <div className="icon-container w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
          <img
            src="/icons/seo.png"
            alt="SEO"
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
          />
        </div>
      </div>
    </div>
  );
}

export default Seo;