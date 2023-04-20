import { Component } from "react";

import './styles.css';

import { Posts } from "../../components/Posts" ;
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button" ;
import { TitleSearch } from "../../components/TitleSearch" ;

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: '',
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();

    this.setState({ 
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos, 
    });
  };

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({posts, page: nextPage});
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({searchValue: value});
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;

    // controla o enable do botão com este boolean
    const noMorePosts = page + postsPerPage >= allPosts.length; 
    
    // se filtro com valor, filtra todos os posts cujo titulo inclui o texto de pesquisa
    const filteredPosts = !!searchValue ?
      allPosts.filter( post => {
        return post.title.toLowerCase().includes(
          searchValue.toLowerCase()
        );
      })
      : posts;

    // onClick neste caso é atributo enviado (não é um evento), entra nas props passadas ao botão
    // o botão desaparece quando existe texto a pesquisar
    return (
      <section className="container">
        <div classNAme="search-container">
          {!!searchValue && (
            <h1>Search Value: {searchValue}</h1>
          )}
          
          <TitleSearch searchValue={searchValue} handleChange={this.handleChange} />
        </div>
        
        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}
        
        {filteredPosts.length === 0 && (
          <p>Não existem posts</p>
        )}
         
        <div className="button-container">
          {!searchValue && (
            <Button
            text="Load More Posts"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />  
          )}
        </div>
      </section>
    );
  }
}
