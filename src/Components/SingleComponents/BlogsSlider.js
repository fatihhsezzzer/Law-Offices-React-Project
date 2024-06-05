import React from 'react';
import OwlCarousel from 'react-owl-carousel';


const BlogSection = () => {
    const blogs = [
        {
            imgSrc: 'assets/img/home-one/blog/1.jpg',
            category: 'Rights Case',
            title: 'Justice May For You If You Are Innocent',
            date: '20 Feb 2020',
            author: 'John Doe',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.',
            link: 'blog-details.html'
        },
        {
            imgSrc: 'assets/img/home-one/blog/2.jpg',
            category: 'Business Case',
            title: 'By Whom Your Business Is Being Loss?',
            date: '20 Feb 2020',
            author: 'John Doe',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.',
            link: 'blog-details.html'
        },
        {
            imgSrc: 'assets/img/home-one/blog/3.jpg',
            category: 'Criminal Case',
            title: 'Who Can The Victim A Sue After A Car Accident?',
            date: '20 Feb 2020',
            author: 'John Doe',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.',
            link: 'blog-details.html'
        },
        // Diğer blog öğelerini burada ekleyin...
    ];

    return (
        <section className="blog-area pt-100">
            <div className="container">
                <div className="section-title">
                    <span>BLOG</span>
                    <h2>Our Latest Blogs</h2>
                </div>
                <OwlCarousel className="blog-slider owl-theme" loop margin={10} nav>
                    {blogs.map((blog, index) => (
                        <div className="blog-item" key={index}>
                            <a href={blog.link}>
                                <img src={blog.imgSrc} alt="Blog" />
                            </a>
                            <div className="blog-inner">
                                <span>{blog.category}</span>
                                <h3>
                                    <a href={blog.link}>{blog.title}</a>
                                </h3>
                                <ul>
                                    <li>
                                        <i className="icofont-calendar"></i>
                                        {blog.date}
                                    </li>
                                    <li>
                                        <i className="icofont-user-alt-7"></i>
                                        <a href="#">{blog.author}</a>
                                    </li>
                                </ul>
                                <p>{blog.description}</p>
                                <a className="blog-link" href={blog.link}>
                                    Read More
                                    <i className="icofont-simple-right"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </section>
    );
};

export default BlogSection;
