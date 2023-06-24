import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogItems} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogItems
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <li className="list-card">
        <img src={imageUrl} alt={`blog${id}`} className="card-img" />
        <div className="list-card-details">
          <p className="para">{topic}</p>
          <h1 className="heading-title">{title}</h1>
          <div className="avatar-card">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar-img" />
            <p className="para">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
