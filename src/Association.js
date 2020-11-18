const Association = () => {
  return (
    <div className="container text-light" id="assoc">
      <br/>
      <img src={process.env.PUBLIC_URL+"/cpvcf.png"}/>
      <h2>Centre de prévention des violences conjugales et familiales <a href="http://www.cpvcf.org/" target="_blank"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
        <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
      </svg></a></h2>
      <p>
        Malgré les conditions particulières de cette Saint-Verhaegen 2020, la traditionnelle
        quête sociale se maintient grâce aux dons en lignes. C’est avec grand
        plaisir que nos cercles membres ont choisi de s’associer au
        <span className="text-warning"> Centre de Prévention des Violences
        Conjugales et Familiales</span> pour cette édition.
      </p>
      <div>
        Le CPVCF propose un <span className="text-warning">accompagnement spécialisé</span> à toute personne concernée par les <span className="text-warning">violences conjugales et/ou intrafamiliales</span> [femmes majoritairement] venant de tous les milieux :
        <ul>
          <li> Sociaux</li>
          <li> Culturels</li>
          <li> Professionnels</li>
          <li> Religieux</li>
          <li> Ethniques</li>
          <li> et Philosophiques</li>
        </ul>
      </div>
      <div>
        Cet accompagnement lui permet de <span className="text-warning">(re)trouver l’estime de soi et de (re)prendre du pouvoir sur sa vie</span>, il s’exerce à travers plusieurs choses :
        <ol>
          <li> Une écoute téléphonique</li>
          <li> Un accueil</li>
          <li> Une aide administrative</li>
          <li> Un espace de parole en individuel [pour femme, homme, auteur ou victime] ou en couple</li>
          <li> Des ateliers d’Education Permanente</li>
          <li> Un hébergement pour femmes [avec ou sans enfant.s sans limite d’âge] à une adresse confidentielle</li>
        </ol>
      </div>
      <p>
        Le Centre s’adresse également aux institutions, associations, services qui sont amenés à intervenir auprès des personnes concernées par la problématique des violences conjugales et intrafamiliales.
      </p>
      <div>
        Il est fréquemment consulté pour son expertise en cette matière de :
        <ul>
          <li> Relais auprès des victimes</li>
          <li> Information</li>
          <li> Formation des intervenants</li>
          <li> Associations</li>
          <li> Services</li>
          <li> Institutions</li>
        </ul>
        Depuis sa création en 1977, il a été et reste un interlocuteur actif auprès des pouvoirs publics en matière de violence conjugale.
      </div>
      <br/>
      <div style={{textAlign: "center", fontFamily: "pool_names"}}>
        <a href="http://www.cpvcf.org/questions-frequentes/" target="_blank">
          <button className="btn btn-lg btn-warning">
            En savoir plus sur le CPVCF
          </button>
        </a>
      </div>
      <br/>
    </div>
  );
}

export default Association;
