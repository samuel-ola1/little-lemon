import React from 'react';
import mario from "./assets/Mario and Adrian A.jpg";
import adrian from "./assets/Mario and Adrian b.jpg";



const History = () => {
  return (
    <section>
        <div className="container">
            <div>
                <h2 className="title">Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At voluptatem pariatur enim cupiditate, odit quisquam dolorum delectus fuga impedit obcaecati voluptates soluta modi beatae facere tenetur perferendis consectetur numquam nulla ea, reiciendis aut unde doloribus eum neque! Dicta, autem nostrum!
                </p>
            </div>
            <div>
                <img src={mario} alt="" />
                <img src={adrian} alt="" />
            </div>
        </div>
    </section>
  )
}

export default History;