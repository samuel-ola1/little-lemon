import React from 'react';
import mario from "./assets/Mario and Adrian A.jpg";
import adrian from "./assets/Mario and Adrian b.jpg";
import "./history.css"



const History = () => {
  return (
    <section className="history">
        <div className="container grid">
            <div className="history-text">
                <h2 className="title">Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, delectus repellat hic excepturi illo vitae nemo quas? Beatae consequatur delectus ut magni ad doloremque nisi, fuga culpa est officiis doloribus blanditiis voluptatibus nostrum ipsa accusamus amet corporis facere! Tenetur iure aperiam porro! Obcaecati neque voluptatem quisquam itaque necessitatibus vel quasi, tempora adipisci architecto at. Voluptas ullam cupiditate accusamus explicabo nihil esse dolorem odio ipsa, quisquam est voluptatum in quas nam, ratione, minima omnis fuga. Commodi illo aliquid nisi corporis harum.
                </p>
            </div>
            <div className='history-images'>
                <img src={mario} alt="" />
                <img src={adrian} alt="" />
            </div>
        </div>
    </section>
  )
}

export default History;