import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import {Component} from 'react'

class BlogItemDetails extends Component {
  state = {
    blogDetails: {},
    isLoading: true,
  }

  componentDidMount = () => {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const eachItem = await response.json()
    const updateData = {
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
      content: eachItem.content,
    }
    this.setState({blogDetails: updateData, isLoading: false})
  }

  renderBlogDetails = () => {
    const {blogDetails, isLoading} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogDetails
    return (
      <div>
        {isLoading ? (
          <<div data-testid="loader">
  <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
</div>
        ) : (
          <div className="blog-info">
            <h2 className="blog-details-title">{title}</h2>

            <div className="author-details">
              <img className="author-pic" src={avatarUrl} alt={author} />
              <p className="details-author-name">{author}</p>
            </div>

            <img className="blog-image" src={imageUrl} alt={title} />
            <p className="blog-content">{content}</p>
          </div>
        )}
      </div>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogDetails()}</div>
  }
}

export default BlogItemDetails
