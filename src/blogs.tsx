import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './blogs.css';
// fetch blogs from files later
let blogs = [
  {
    id: "1",
    title:"title1",
    date:"2023-03-04",
    content:"hahahhahahhahhahahajjajdfasfjlewfjo"
  },
  {
    id: "2",
    title:"title2",
    date:"2023-03-04",
    content:"asudiofhewuadhhdsifiadsfsdhfdoashdfilo"
  },
  {
    id: "3",
    title:"title3",
    date:"2023-04-05",
    content:"hajsd;fhdlasfuhlsadhflsahdfhlasdf"
  },
  {
    id: "4",
    title:"title4",
    date:"2023-03-06",
    content:"dsilhfleawyhfhdlsaflhsdf"
  },
]

function Blogs() {
  const [month, setMonth] = useState(blogs[0].date.split("-")[0] + "-" + blogs[0].date.split("-")[1])
  useEffect(() => {
    document.title = "Tom Shen | Blogs";
  }, []);
  return (
    <div className="blogs">
        <div className='catogory-by-month'>
          {
            // group by month
            blogs.map(i => i.date.split("-")[0] + "-" + i.date.split("-")[1])
            .filter((value,index,array) => array.indexOf(value) === index)
            .map((im) =>
              <div onClick={() => {
                // set the following month
                setMonth(im)
              }}>
                {im}
              </div>
            )
          }
        </div>
        <hr/>
        <div className='blogs-content'>
          {
            // temporary show content only
            blogs.filter(blog => (blog.date.split("-")[0] + "-" + blog.date.split("-")[1]) == month)
            .map(blog => <div>{blog.content}</div>)
          }
        </div>
    </div>
  );
}

export default Blogs;
