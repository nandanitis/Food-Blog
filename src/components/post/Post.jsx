import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.theatlantic.com/thumbor/cTP7DsiUyI81zFg8c-FDnIoCBhA=/540x0:2340x1800/540x540/media/img/mt/2016/01/superman/original.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>

        <span className="postTitle">lorem ipsusms gdgs dsdg dg</span>
        <hr />
        <span className="postDate">1hr ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora iure
        maxime magnam architecto, eos vero numquam, fugit quidem quisquam
        nostrum unde voluptatem sit, inventore commodi rem blanditiis ea
        distinctio esse.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora iure
        maxime magnam architecto, eos vero numquam, fugit quidem quisquam
        nostrum unde voluptatem sit, inventore commodi rem blanditiis ea
        distinctio esse.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora iure
        maxime magnam architecto, eos vero numquam, fugit quidem quisquam
        nostrum unde voluptatem sit, inventore commodi rem blanditiis ea
        distinctio esse.
      </p>
    </div>
  );
}
