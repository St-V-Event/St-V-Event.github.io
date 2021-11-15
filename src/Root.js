import { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import config from './config';
import $ from 'jquery';
import bootstrap from 'bootstrap';

const Stream = ({icon, title, id, channel, isPool, donations}) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <a target="_blank" href={"https://www.twitch.tv/"+channel} data-toggle="tooltip" data-placement="top" data-html="true" title="Watch on twitch">
        <img className="card-img-top" src={icon} />
      </a>
      <div className="card-body">
        <div className="row">
          <div className="col-8 text-nowrap" style={{display: "flex", alignItems: "end", justifyContent: "left"}}>
            <a target="_blank" href={"https://www.twitch.tv/"+channel}>
              <span className="card-title text-light">{title}</span>
            </a>
          </div>
          { isPool ?
            <div className="col-4 text-center text-warning pr-0 pl-0" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                {donations.toFixed(2)}€
            </div>
          :
            <div className="col-4" style={{height: "3.87em"}}/>
          }
        </div>
      </div>
    </div>
  )
}

const Root = () => {

  return (
    <div>
      <div className="text-center banner">
        <div className="header">
          <h1 className="display-4 text-light">
            St Verhaegen 2021
          </h1>
          <small className="text-light">
            Libre de détruire mais pas d'accueillir.
            Uitstoot toegestaan, grenzen toegedaan.
          </small>
        </div>
        <div className="text-light charity">
            All donations will benefit the non profit organisation Ciré
            {" "}<a href="https://www.cire.be/" target="_blank"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
              <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
            </svg></a>
        </div>
      </div>
      <div className="container text-center">
        <br/>
        <img src={process.env.PUBLIC_URL+"/logos/orga.png"} />
        <br/><br/>
      </div>
      <div className="container" style={{padding:"0px 1em"}}>
        <br/>
        <div className="text-light">
          <p>
            Cher·e étudiant·e, professeur·e, bourgeois·e, …
          </p>
          <p>
            Toi aussi, tout comme M. Niels lors d’un certain conseil communal
            de 1974, tu souhaites te faire une opinion sur « <i>la zwanze traditionnelle
            et annuelle organisée par les étudiants de l'Université Libre de
            Bruxelles chaque 20 Novembre ?</i> ». En effet, souvent uniquement
            décrite par ses excès et pointée du doigt pour les évènements bacchiques
            s’y déroulant, les valeurs principales de cette journée si importante
            pour notre alma mater sont dissimulées.
          </p>
          <p>
            Plongeons donc, ensemble, dans ce long voyage qui commence en 1834
            et nous fera découvrir les étapes principales et valeurs de la fête
            de notre université, de notre alma mater. Commençons le 20 novembre
            1834, date officielle de l’ouverture de l’Université Libre de Belgique
            par Pierre-Théodore Verhaegen et Auguste Baron. Ce jour-là, Auguste
            Baron posera la première pierre des valeurs de l’université, avec
            sa célèbre locution ; « <i>Nous jurons d'inspirer à nos élèves, quel
            que soit l'objet de notre enseignement, l'amour pratique des hommes
            qui sont frères, sans distinction de caste, d'opinion, de nation;
            nous jurons de leur apprendre à consacrer leurs pensées, leurs
            travaux, leurs talents au bonheur et à l'amélioration de leurs
            concitoyens et de l'humanité...</i>». Les bases d’un enseignement
            libre de religion étaient posées, en opposition aux autres
            universités belges alors toutes catholiques.
          </p>
          <p>
            Il faudra attendre 1843, pour qu’un banquet soit organisé le 20
            novembre, qui était alors férié pour l’université. Ce banquet sera
            l’occasion de se retrouver entre ancien·nes étudiant·es et célébrer
            la création de l’université et de ses valeurs. Ensuite, le 20 novembre
            1888, le terme « Saint-Verhaegen » apparaitra pour la première fois.
            Cette année marquera l’opposition agnostique des étudiant·es ULBistes
            contre la tutelle catholique politique du pays. Appelant à une plus
            grande liberté de pensée, le libre examen est réaffirmé comme valeur
            principale et fondatrice. Au fur et à mesure des années suivantes,
            le corps académique se joindra aux célébrations, marquant son
            attachement à la liberté de pensée, de religions et d’enseignement.
          </p>
          <p>
            S’en suivront alors une longue série de Saint-Verhaegen, dénonçant
            chaque année sans aucune peur les abus d’une société toujours changeante,
            utilisant la science immortelle comme lumière face aux divers
            obscurantismes de toutes origines. N’hésitant pas à s’opposer
            aux gouvernements, aux religions ou tout extrémisme. Citons quelques
            thèmes importants et marquants : "Ça va Zaïre" (1991), "Ils étaient
            là. Merci, 50 ans après" (Groupe G, 1994), "L'intégriste aux puces
            dei". En 2021, une autre préoccupation des plus urgentes survient
            dans notre société ; le réchauffement climatique et la crise
            migratoire. Les étudiants ont donc décider de choisir le thème :
            « Libre de détruire mais pas d’accueillir. Uitstoot toegestaan,
            grenzen toegedaan ».
          </p>
          <p>
            Nous pouvons toutefois nous demander ce qu’organisent précisément
            ces étudiant·es. Tout d’abord, chaque année les étudiant·es baptisé·es
            récoltent de l’argent pour une association liée au thème de la Saint-V.
            L’année dernière, plus de 15000€ ont été récoltés lors d’une
            Saint-Virtuelle, à destination du Centre de Prévention des Violences
            Conjugales et Familiales (CPVCF). De nombreuses conférences et
            actions sont également organisées ! Et surtout, le jour de la
            Saint-Verhaegen, le 20 novembre (sauf cette année, le 19) de nombreux
            hommages sont rendus ; au Tir National, aux tombes et statues de
            Théodore Verhaegen, Frans Kufferath et Henri La Fontaine, Francisco
            Ferrer, mais également au square G. Ce dernier marquant l’implication
            dans la résistance belge de 1940 à 1945 d’étudiant·es, professeur·es
            et assistant·es contre l’occupant allemand.
          </p>
          <p>
            Alors oui, nous nous retrouverons avec plaisir le 19 novembre, dès
            midi au Grand Sablon, où nous partagerons un verre de l’amitié (ou
            plus). Nous nous garderons d’oublier, que nous soyons baptisé·e,
            fossile, futur·e étudiant·e, ancien·ne, que si nous sommes là,
            c’est aussi et surtout pour repousser l’obscurantisme grâce à la
            science immortelle.
          </p>
          <p>
            Alors certes, certain·es ni verront comme M. Schmitz en 1974 lors
            du conseil communal que la « <i>décadence bacchique avec des scènes au
            plus haut point outrageantes pour les bonnes mœurs, d'autres chargés
            d’étudiant et de gamines, la plupart âgés de 15 à 20 ans au plus,
            rapidement ivres car on leur fait boire tant et plus. Qu'advient-il
            de ces jeunes filles du peuple dans ce monde en dévergondage ? </i>».
            Mais n’est-ce pas là le fondement du libre examen ? Le rejet d’une
            bien-pensance élitiste et obscurantiste figée dans le temps, au profit
            d’une liberté et d’une égalité de tous et toutes, chose loin d’être
            acquise par la ville en 1974 !
          </p>

          <br/>
          <div style={{textAlign: "center", fontFamily: "pool_names"}}>
            <a href="https://www.ulb.be/fr/l-ulb-en-bref/la-saint-verhaegen-2021" target="_blank">
              <button className="btn btn-lg btn-warning">
                En savoir plus sur la St-V
              </button>
            </a>
          </div>
          <br/>
        </div>
        <div className="text-light">
          <p>
            <b>
              Au programme:
            </b>
          </p>
          <p>
            <p>Lundi 15 novembre - Pre-TD social CARé</p>

            <p>Mardi 16 novembre à 18h00 - Soirée solidaire CKO et ISEP
            {' '}<a href="https://fb.me/e/2JzMuuv5g" target="_blank">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
              </svg>
            </a></p>
            <p>Mardi 16 novembre à 18h30 - Pré-TD Social AGRO
            {' '}<a href="https://facebook.com/events/s/pre-tde-social-avec-lagro/417065763423846/" target="_blank">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
              </svg>
            </a></p>

            <p>Mardi 16 novembre à 19h30 - Pre-TD social ACE-CPL
            {' '}<a href="https://www.facebook.com/events/594119935374435" target="_blank">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
              </svg>
            </a></p>

            <p>Mardi 16 novembre - Atelier Fresque du climat avec le Cercle Polytechnique
            {' '}<a href="https://fb.me/e/1lfxily6w" target="_blank">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
              </svg>
            </a></p>

            <p>Mardi 16 novembre - Pré-TD Bagarre La Liégeoise
            {' '}<a href="https://www.facebook.com/events/679129103075247" target="_blank">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
              </svg>
            </a></p>

            <p>Mardi 16 novembre - Pré-TD Social CGéo (event à venir)</p>

            <p>Mercredi 17 novembre à 15h00 - Conférence “libre de détruire mais pas d’accueillir” CPS-CPL-ACE
            {' '}<a href="https://www.facebook.com/events/407403431049689" target="_blank">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
              </svg>
            </a></p>

            <p>Mercedi 17 novembre - Aprèm sociale au CdS
            {' '}<a href="https://www.facebook.com/events/437668714394325" target="_blank">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
              </svg>
            </a></p>

            <p>Mercedi 17 novembre - Aprèm Kriek et Croques et pré-TD Social du CD
            {' '}<a href="https://www.facebook.com/events/306430677780671" target="_blank">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
              </svg>
            </a></p>

            <p>Mercredi 17 novembre - Pré-TD Social au CPS
            {' '}<a href="https://facebook.com/events/s/pre-td-solidaire-bienvenue-a-l/297000535638079/" target="_blank">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
              </svg>
            </a></p>

            <p>Mercredi 17 novembre - Pré-TD Terroir de Bruxelles du CRom
            {' '}<a href="https://fb.me/e/2K8IsbfUy" target="_blank">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
              </svg>
            </a></p>

            <p>Jeudi 18 novembre à 18h30 - «Conférence Théodore Verhaegen» de l’ULB à la Salle Dupreel {' '}<a href="https://bit.ly/3Hiird6" target="_blank">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
              </svg>
            </a></p>

            <p>Vendredi 19 novembre de 8h à 14h - Commémorations et discours {' '}<a href="https://www.ulb.be/fr/l-ulb-en-bref/la-saint-verhaegen-2021" target="_blank">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
              </svg>
            </a></p>

            <p>Lundi 22 novembre à 19h00 - Conférence AIC-ACE-Librex : COP26 (event à venir)</p>

            <p>Lundi 22 novembre Live solidaire du CP au Foyer Culturel (event à venir)</p>

            <p>Jeudi 24 novembre de 19h à 22h - LIBREX : Nourrir l'Humanité - Pièce de théâtre à l'ULB
            {' '}<a href="https://fb.me/e/1egUOQdE1" target="_blank">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
              </svg>
            </a></p>


<p><b>Le 19 novembre 2021</b></p>

  <div className="row align-items-end">
    <div className="col-sm-6 col-md-4 col-lg-3">
      <a target="_blank" href={"https://www.facebook.com/events/210864651121823"} data-toggle="tooltip" data-placement="top" data-html="true">
        <img className="card-img-top" src={process.env.PUBLIC_URL+"/logos/cd.png"} />
      </a>
      <div className="card-body">
        <div className="row">
          <div className="text-nowrap" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <a target="_blank" href="https://www.facebook.com/events/210864651121823">
              <span className="card-title text-light">St-V DROIT</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-4 col-lg-3">
      <a target="_blank" href={"https://facebook.com/events/s/saint-verhaegen-avec-cephafk/476874310529084/"} data-toggle="tooltip" data-placement="top" data-html="true">
        <img className="card-img-top" src={process.env.PUBLIC_URL+"/logos/cepha+fk.png"} />
      </a>
      <div className="card-body">
        <div className="row">
          <div className="text-nowrap">
            <a target="_blank" href="https://facebook.com/events/s/saint-verhaegen-avec-cephafk/476874310529084/">
              <span className="card-title text-light">St-V CePha-FK</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-4 col-lg-3">
      <a target="_blank" href={"https://fb.me/e/2JWIXib95"} data-toggle="tooltip" data-placement="top" data-html="true">
        <img className="card-img-top" src={process.env.PUBLIC_URL+"/logos/care.png"} />
      </a>
      <div className="card-body">
        <div className="row">
          <div className="text-nowrap">
            <a target="_blank" href="https://fb.me/e/2JWIXib95">
              <span className="card-title text-light">St-V CARé</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-4 col-lg-3">
      <a target="_blank" href={"https://fb.me/e/1cw3aLAQW"} data-toggle="tooltip" data-placement="top" data-html="true">
        <img className="card-img-top" src={process.env.PUBLIC_URL+"/logos/regio.png"} />
      </a>
      <div className="card-body">
        <div className="row">
          <div className="text-nowrap">
            <a target="_blank" href="https://fb.me/e/1cw3aLAQW">
              <span className="card-title text-light">St-V Régios</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-4 col-lg-3">
      <a target="_blank" href={"https://facebook.com/events/s/la-saint-v-avec-le-cgeo-et-le-/1051146195639404/"} data-toggle="tooltip" data-placement="top" data-html="true">
        <img className="card-img-top" src={process.env.PUBLIC_URL+"/logos/cicgeo.png"} />
      </a>
      <div className="card-body">
        <div className="row">
          <div className="text-nowrap">
            <a target="_blank" href="https://facebook.com/events/s/la-saint-v-avec-le-cgeo-et-le-/1051146195639404/">
              <span className="card-title text-light">St-V CI-CGéo</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-4 col-lg-3">
      <a target="_blank" href={"https://facebook.com/events/s/la-saint-v-avec-le-cds/278502500949644/"} data-toggle="tooltip" data-placement="top" data-html="true">
        <img className="card-img-top" src={process.env.PUBLIC_URL+"/logos/cds.png"} />
      </a>
      <div className="card-body">
        <div className="row">
          <div className="text-nowrap">
            <a target="_blank" href="https://facebook.com/events/s/la-saint-v-avec-le-cds/278502500949644/">
              <span className="card-title text-light">St-V Cds</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-4 col-lg-3">
      <a target="_blank" href={"https://www.facebook.com/events/s/saint-verhaegen-2021-avec-le-c/1058495121585041/"} data-toggle="tooltip" data-placement="top" data-html="true">
        <img className="card-img-top" src={process.env.PUBLIC_URL+"/logos/cig.png"} />
      </a>
      <div className="card-body">
        <div className="row">
          <div className="text-nowrap">
            <a target="_blank" href="https://www.facebook.com/events/s/saint-verhaegen-2021-avec-le-c/1058495121585041/">
              <span className="card-title text-light">St-V CIG</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-4 col-lg-3">
      <a target="_blank" href={"https://fb.me/e/1g2S5qXYR"} data-toggle="tooltip" data-placement="top" data-html="true">
        <img className="card-img-top" src={process.env.PUBLIC_URL+"/logos/guildes.png"} />
      </a>
      <div className="card-body">
        <div className="row">
          <div className="text-nowrap">
            <a target="_blank" href="https://fb.me/e/1g2S5qXYR">
              <span className="card-title text-light">St-V Guildes</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-4 col-lg-3">
      <a target="_blank" href="https://www.facebook.com/events/199564928993003/" data-toggle="tooltip" data-placement="top" data-html="true">
        <img className="card-img-top" src={process.env.PUBLIC_URL+"/logos/cp.png"} />
      </a>
      <div className="card-body">
        <div className="row">
          <div className="text-nowrap">
            <a target="_blank" href="https://www.facebook.com/events/199564928993003/">
              <span className="card-title text-light">St-V CP</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-4 col-lg-3">
      <a target="_blank" href="https://www.facebook.com/events/277580404147567" data-toggle="tooltip" data-placement="top" data-html="true">
        <img className="card-img-top" src={process.env.PUBLIC_URL+"/logos/cps.png"} />
      </a>
      <div className="card-body">
        <div className="row">
          <div className="text-nowrap">
            <a target="_blank" href="https://www.facebook.com/events/277580404147567">
              <span className="card-title text-light">St-V CPS</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-4 col-lg-3">
      <a target="_blank" href="https://www.facebook.com/events/402568628195717" data-toggle="tooltip" data-placement="top" data-html="true">
        <img className="card-img-top" src={process.env.PUBLIC_URL+"/logos/cs.png"} />
      </a>
      <div className="card-body">
        <div className="row">
          <div className="text-nowrap">
            <a target="_blank" href="https://www.facebook.com/events/402568628195717">
              <span className="card-title text-light">St-V CS</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-4 col-lg-3">
      <a target="_blank" href="https://www.facebook.com/events/683177612660035" data-toggle="tooltip" data-placement="top" data-html="true">
        <img className="card-img-top" src={process.env.PUBLIC_URL+"/logos/isepk.png"} />
      </a>
      <div className="card-body">
        <div className="row">
          <div className="text-nowrap">
            <a target="_blank" href="https://www.facebook.com/events/683177612660035">
              <span className="card-title text-light">St-V ISEP-CKO</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-4 col-lg-3">
      <a target="_blank" href="https://fb.me/e/1qJSdL8d1" data-toggle="tooltip" data-placement="top" data-html="true">
        <img className="card-img-top" src={process.env.PUBLIC_URL+"/logos/cpl+cjc+lwk.png"} />
      </a>
      <div className="card-body">
        <div className="row">
          <div className="text-nowrap">
            <a target="_blank" href="https://fb.me/e/1qJSdL8d1">
              <span className="card-title text-light">St-V CPL-CJC-LWK</span>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>

          </p>
        </div>
      </div>
    </div>
  );
}

export default Root;
