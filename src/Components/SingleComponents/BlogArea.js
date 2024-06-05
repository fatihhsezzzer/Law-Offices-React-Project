import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
    {
        id: 1,
        image: 'assets/img/home-one/blog/1.jpg',
        category: 'Rights Case',
        title: 'Justice May For You If You Are Innocent',
        date: '20 Feb 2020',
        author: 'John Doe',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.',
        link: 'blog-details.html'
    },
    {
        id: 2,
        image: 'assets/img/home-one/blog/2.jpg',
        category: 'Business Case',
        title: 'By Whom Your Business Is Being Loss?',
        date: '20 Feb 2020',
        author: 'John Doe',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.',
        link: 'blog-details.html'
    },
    {
        id: 3,
        image: 'assets/img/home-one/blog/3.jpg',
        category: 'Criminal Case',
        title: 'Who Can The Victim A Sue After A Car Accident?',
        date: '20 Feb 2020',
        author: 'John Doe',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore.',
        link: 'blog-details.html'
    }
    // Daha fazla blog postu ekleyebilirsiniz...
];

function BlogArea() {
    return (
        <section className="blog-area pt-100">
            <div className="container">
                <div className="section-title">
                    <span>BLOG</span>
                    <h2>Our Latest Blogs</h2>
                </div>
                <div className="blog-slider owl-theme owl-carousel">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="blog-item">
                            <Link to={post.link}>
                                <img src={post.image} alt="Blog" />
                            </Link>
                            <div className="blog-inner">
                                <span>{post.category}</span>
                                <h3>
                                    <Link to={post.link}>{post.title}</Link>
                                </h3>
                                <ul>
                                    <li>
                                        <i className="icofont-calendar"></i>
                                        {post.date}
                                    </li>
                                    <li>
                                        <i className="icofont-user-alt-7"></i>
                                        <Link to="#">{post.author}</Link>
                                    </li>
                                </ul>
                                <p>{post.summary}</p>
                                <Link to={post.link} className="blog-link">
                                    Read More
                                    <i className="icofont-simple-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogArea;
