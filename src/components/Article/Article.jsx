import React from 'react'



import './styles.css'

/*
cria um objeto com todas as propiedades passadas

  this.props {
    title: "E"

*/

const Article = (props) => {
  return (
    <article id="article">
        <img src={props.thumbnail} alt="" />

        <div className="article-infos">
            <h2>{props.title}</h2>
            <h3>{props.provider}</h3>

            <p>{props.description}</p>
        </div>
    </article>
  )
}

export default Article;
