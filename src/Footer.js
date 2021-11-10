const Footer = () => {
  return (
    <div className="footer bg-dark text-center text-secondary" style={{padding:"15px 0px"}}>
      <div className="container">
        <div className="row" style={{paddingBottom: "5px"}}>
          <div className="col text-left">
            <a href="https://www.facebook.com/events/2709314986001013" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            &nbsp;&nbsp;&nbsp;<a href="https://www.instagram.com/stvevent/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col text-left">
            For any issues, contact 'Team orga' on <a href="https://discord.gg/fHkAe5bp" target="_blank" className="text-danger">Discord</a>
          </div>
        </div>
        <div className="row">
          <div className="col text-left">
            Inspired by <a href="https://zevent.fr/" target="_blank" className="text-danger">Z-Event</a>
            {" "}· Initiated by <a href="https://cercle-informatique.be/" target="_blank" className="text-danger">CI</a>
            {" "}· Supported by <a href="http://ace-ulb.org/page/index" target="_blank" className="text-danger">ACE</a>
            {" "}· Benefiting <a href="https://www.cire.be" target="_blank" className="text-danger">Ciré</a>
          </div>
        </div>
        <div className="row">
          <div className="col text-left">
            <a href="https://www.facebook.com/camsaoule/" target="_blank" className="text-danger">Drink responsibly</a>
            {" "}· <a href="https://actus.ulb.be/fr/agenda/agenda-culturel/celebrons-la-saint-verhaegen-2021" target="_blank" className="text-danger">
              Et une bonne St-V à tous.tes!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
