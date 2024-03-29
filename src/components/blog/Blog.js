import React, { useState, useEffect } from "react";
import "./Blog.scss";
import BlogCard from "../ui/BlogCard";
import woman1 from "../../assets/coachProfile/woman1.png";
import bike from "../../assets/blog/bike.jpeg";
import axios from 'axios';
import { useParams } from "react-router-dom";

const Blog = () => {
    const [blog, setBlog] = useState("");
    const [loading, setLoading] = useState('block');
    const params = useParams();

    useEffect(() => {
      try {
        // https://api-coachync.herokuapp.com/api/blogs
        axios
          .get(`http://localhost:3001/api/blog/${params.id}`, {
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          })
          .then((res) => {
            if (res.success) {
              setBlog(res.content);
              setLoading('none');
              console.log(res);
            }
          });
      } catch (error) {
        console.log(error);
      }
    }, [params.id]);
    return (
        <div className="Blog">
            <div className="blog__container">
                <div className="blog__row">
                    <div className="left__side">
                        <div style={{ display: loading }}>
                            <h2>Loading...</h2>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: blog }}></div>
                        {/* <div className="blog__header">
                            <h1 className="page__title">Why Cycling Improves My Thinking</h1>
                            <img src={bike} alt="Blog" className="blog__image" />
                        </div>
                        <p>
                            If I were worried? A brisk ride would part the clouds. If I felt pissy, it’d expel the yellow bile. If I were blocked or stuck on a piece of work — or uncertain about a decision? A ride brought blessed clarity. I’d return home knowing exactly what to do.
                        </p>
                        <p className="block__quote">
                            It really does! When I’m cycling, I find that I get a lot of really useful thinking done. My mind seems to float free of everyday worries that normally peck at me like ducks. When I’m in the saddle and racing along, I find myself more easily able to take a big-picture view.
                        </p>
                        <div className="devider">
                            <hr />
                        </div>
                        <p>
                            I think it has to do with the curious balance between (a the demands that cycling places on my mind and body and b) the freedoms that it imparts. There’s something alchemical going on that catalyzes a truly useful mental state, and one that’s qualitatively different from when I’m sitting at home, reading, walking, or talking to other people.
                        </p>
                        <p>
                            <ul className="blog__list">
                                <li>That means there’s lots of mental room for active thinking</li>
                                <li>I can pick something that’s specifically bugging me</li>
                                <li>Even short errands tend to give me 15 minutes of cycling; meeting someone in Manhattan for lunch often means an hour and a half of cycling during a business day</li>
                            </ul>
                        </p>
                        <div className="devider">
                            <hr />
                        </div>
                        <p>
                            In the rest of my life, I rarely spend that much time only thinking. If I’m sitting around the house, I might spend some minutes staring into space, pondering something. But more likely than not I’d flip open my laptop to do some reading, or I’d look at a book or a magazine, or I’d dork around on social media. Obviously, if I’m reading something deep or informative, I’m doing a lot of useful thinking there, too. But it’s cognitive work that’s triggered by media.
                        </p>
                        <p className="block__quote">
                            But with cycling, you cannot seriously consume visual media at all. You can peek at your phone during a stop light, or riskily glance at a message while zipping along an empty street. (Dangerous; one shouldn’t do it; yet I sometimes do.)
                        </p>
                        <p>
                            To be clear, this is just a pulled-outta-my-hat analysis of what cycling seems to do to my brain. Your experience may be different. But whatever it is, let me know in the comments — I’d be intrigued to hear!
                        </p>
                        <p>
                            If I were worried? A brisk ride would part the clouds. If I felt pissy, it’d expel the yellow bile. If I were blocked or stuck on a piece of work — or uncertain about a decision? A ride brought blessed clarity. I’d return home knowing exactly what to do.
                        </p>
                        <p className="block__quote">
                            It really does! When I’m cycling, I find that I get a lot of really useful thinking done. My mind seems to float free of everyday worries that normally peck at me like ducks. When I’m in the saddle and racing along, I find myself more easily able to take a big-picture view.
                        </p>
                        <div className="devider">
                            <hr />
                        </div>
                        <p>
                            I think it has to do with the curious balance between (a the demands that cycling places on my mind and body and b) the freedoms that it imparts. There’s something alchemical going on that catalyzes a truly useful mental state, and one that’s qualitatively different from when I’m sitting at home, reading, walking, or talking to other people.
                        </p>
                        <p>
                            <ul className="blog__list">
                                <li>That means there’s lots of mental room for active thinking</li>
                                <li>I can pick something that’s specifically bugging me</li>
                                <li>Even short errands tend to give me 15 minutes of cycling; meeting someone in Manhattan for lunch often means an hour and a half of cycling during a business day</li>
                            </ul>
                        </p>
                        <div className="devider">
                            <hr />
                        </div>
                        <p>
                            In the rest of my life, I rarely spend that much time only thinking. If I’m sitting around the house, I might spend some minutes staring into space, pondering something. But more likely than not I’d flip open my laptop to do some reading, or I’d look at a book or a magazine, or I’d dork around on social media. Obviously, if I’m reading something deep or informative, I’m doing a lot of useful thinking there, too. But it’s cognitive work that’s triggered by media.
                            But with cycling, you cannot seriously consume visual media at all. You can peek at your phone during a stop light, or riskily glance at a message while zipping along an empty street. (Dangerous; one shouldn’t do it; yet I sometimes do.)
                        </p>
                        <p>
                            To be clear, this is just a pulled-outta-my-hat analysis of what cycling seems to do to my brain. Your experience may be different. But whatever it is, let me know in the comments — I’d be intrigued to hear!
                        </p>
                        <p>
                            <a href="https://www.google.com" rel="noreferrer" target={"_blank"}>Learn more</a>
                        </p> */}
                        <div className="write__comment">
                            <textarea rows={"5"} className="write__comment__control" placeholder="Write a comment..."></textarea>
                            <input type="button" className="btn__primary" value="Submit" />
                            <div className="comments__block">
                                <div className="comment__element">
                                    <div className="comment__header">
                                        <img src={woman1} alt="Comment Avatar" className="comment__avatar" />
                                        <div className="comment__coach__info">
                                            <h4 className="coach__name">Lorem Ipsum</h4>
                                            <span className="comment__time">6 days ago</span>
                                        </div>
                                    </div>
                                    <div className="comment__body">
                                        In the rest of my life, I rarely spend that much time only thinking. In the rest of my life, I rarely spend that much time only thinking. In the rest of my life, I rarely spend that much time only thinking.
                                    </div>
                                </div>
                                <div className="comment__element">
                                    <div className="comment__header">
                                        <img src={woman1} alt="Comment Avatar" className="comment__avatar" />
                                        <div className="comment__coach__info">
                                            <h4 className="coach__name">Lorem Ipsum</h4>
                                            <span className="comment__time">6 days ago</span>
                                        </div>
                                    </div>
                                    <div className="comment__body">
                                        In the rest of my life, I rarely spend that much time only thinking. In the rest of my life, I rarely spend that much time only thinking. In the rest of my life, I rarely spend that much time only thinking.
                                    </div>
                                </div>
                                <div className="comment__element">
                                    <div className="comment__header">
                                        <img src={woman1} alt="Comment Avatar" className="comment__avatar" />
                                        <div className="comment__coach__info">
                                            <h4 className="coach__name">Lorem Ipsum</h4>
                                            <span className="comment__time">6 days ago</span>
                                        </div>
                                    </div>
                                    <div className="comment__body">
                                        In the rest of my life, I rarely spend that much time only thinking. In the rest of my life, I rarely spend that much time only thinking. In the rest of my life, I rarely spend that much time only thinking.
                                    </div>
                                </div>
                                <div className="comment__element">
                                    <div className="comment__header">
                                        <img src={woman1} alt="Comment Avatar" className="comment__avatar" />
                                        <div className="comment__coach__info">
                                            <h4 className="coach__name">Lorem Ipsum</h4>
                                            <span className="comment__time">6 days ago</span>
                                        </div>
                                    </div>
                                    <div className="comment__body">
                                        In the rest of my life, I rarely spend that much time only thinking. In the rest of my life, I rarely spend that much time only thinking. In the rest of my life, I rarely spend that much time only thinking.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right__side">
                        <div className="coach__info">
                            <img src={woman1} alt="Coach Avatar" className="coach__avatar" />
                            <h2 className="coach__name">Lorem Ipsum</h2>
                            <span className="coach__followers">18.8k followers</span>
                            <p className="coach__description">
                                I write three times a week about tech, science, culture — and how those collide. Writer for NYT mag/Wired; author of “Coders” and “Smarter Than You Think”
                            </p>
                        </div>
                    </div>
                </div>
                <div className="blog__row other__blogs">
                    <h2 className="page__title">Other Blogs From This Coach</h2>
                </div>
                <div className="blog__row">
                    <BlogCard
                        id={1}
                        key={1}
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                        blogURL={"/blog/" + 1}
                    />
                    <BlogCard
                        id={2}
                        key={2}
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                        blogURL={"/blog/" + 2}
                    />
                    <BlogCard
                        id={3}
                        key={3}
                        title={"Why Cycling Improves My Thinking"}
                        description={"I get clarity, and a big picture view, when i'm on two wheels. I'd return home knowing exactly what to do."}
                        date={"Jun 12, 2022"}
                        readTime={"8 min read"}
                        image={bike}
                        blogURL={"/blog/" + 3}
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;