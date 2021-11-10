const Association = () => {
  return (
    <div className="container text-light" id="assoc">
      <br/>
      <img src={process.env.PUBLIC_URL+"/cire.svg"} height="100vh"/>
      <h2>Coordination et initiative pour réfugiés et étrangers <a href="https://www.cire.be/" target="_blank"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
        <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
      </svg></a></h2>
      <p>
        Cela fait maintenant longtemps que les bruxellois.e.s se sont habituté.e.s
        de voir les jeunes étudiant.e.s fraichement baptisé.e.s se promener dans
        la ville, le lundi avant la Saint-V, à la recherche de quelques pièces
        pour une association choisie par les délégué.e.s social des cercles membre
        de l’<i>Association des Cercles Etudiants</i> (ACE). Mais d’où vient cette tradition ?
      </p>
      <p>
        1939, alors que l’Europe sombre peu à peu dans une guerre mondiale,
        l’<i>Association Générale des Etudiants</i> (ancêtre de l’ACE) décide de ne pas
        organiser son traditionnel cortège de Saint-V et de le remplacer par une
        collecte de fonds au profit des familles des soldats mobilisés dans
        l’Armée belge. Une opération qui est répétée en 1940 et 1941, avant la
        fermeture de notre <i>Alma Mater</i> par l’occupant. C’est de cet événement
        fondateur que la Quête sociale que nous connaissons de nos jours est née.
        Une quête qui a dû s’adapter l’an dernier aux circonstances de la
        pandémie mondiale pour se tenir en ligne. Ce fut une année spéciale à
        plusieurs égards mais ce fut surtout <span className="text-warning">un
        record de dons avec 18 193€</span> de récoltés pour le <i>Centre de prévention
        des violences conjugales et familiales</i> <a href="http://www.cpvcf.org/" target="_blank"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
          <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
        </svg></a>.
      </p>
      <p>
        Cette année, l’ACE a décidé de se tourner vers l’<i>Asbl Ciré</i> pour la Quête
        sociale 2021. Celle-ci a été créée en 1954 et <span className="text-warning">défend les droits des
        personnes exilées</span> (y compris les réfugié.e.s climatiques), avec ou sans
        titre de séjour. Pour son action, <i>Ciré</i> veille à ce que les politiques
        menées soient conformes aux principes de la déclaration des droits de
        l’Homme et à affirmer la nécessité de renforcer les droits des étrangers,
        notamment le droit d’asile, et également à <span className="text-warning">considérer les migrant.e.s
        comme des citoyen.e.s actif.ve.s, qui enrichissent nos sociétés
        multiculturelles</span>. Les actions de <i>Ciré</i> sont multiples et elle propose des
        services directs aux personnes étrangères ou d’origine étrangère comme :
      </p>
      <ol>
        <li>Un accueil général et des permanences sociojuridiques</li>
        <li>Des ateliers citoyens</li>
        <li>Une Ecole de Français langue étrangère (FLE)</li>
        <li>Un service d’aide à la recherche de logement</li>
        <li>Une structure d’accueil pour demandeurs de protection internationale
        et personnes vulnérables</li>
        <li>Un service Travail, équivalences et formations</li>
      </ol>
      <p>
        La structure du <i>Ciré</i> est particulière. Il s’agit d’<span className="text-warning">une coordination
        pluraliste qui réunit actuellement des associations très diversifiées</span>:
        services sociaux d’aide aux demandeurs d’asile, organisations syndicales,
        services d’éducation permanente et organisations internationales. Par
        ses positions et points de vue diversifiés, chacune des associations
        nourrit la réflexion sur base des informations récoltées sur le terrain,
        pour permettre une action de façon concertée.
      </p>
      <br/>
      <div style={{textAlign: "center", fontFamily: "pool_names"}}>
        <a href="https://www.cire.be/nos-activites/accueil-general/" target="_blank">
          <button className="btn btn-lg btn-warning">
            En savoir plus sur le Ciré
          </button>
        </a>
      </div>
      <br/>
    </div>
  );
}

export default Association;
