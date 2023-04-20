import './styles.css';

export const PostCard = ({title, cover, body, id}) => {
    // Com esta forma fez o destructuring logo no argumento da função
    // const { post } = props;    // tem o mesmo nome -> equivale a props.post. 
    
    return (
        <div className="post">
            <img src={cover} alt={title} />
            <div className="post-content">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    )
}