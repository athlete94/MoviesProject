const Footer = () => {
    return(  
    <footer class="page-footer purple lighten-3">
    <div class="container ">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Footer Content</h5>
        </div>
      </div>
    </div>
    <div class="footer-copyright purple darken-1">
      <div class="container">
      © {new Date().getFullYear() } Copyright Text
      <a class="grey-text text-lighten-4 right" href="#!">Repo</a>
      </div>
    </div>
  </footer>
        
    )
}

export default Footer