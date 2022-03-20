import React, { useEffect } from "react";
import {
  Container,
  // Item,
  // Loader,
  // Pagination,
  // PaginationProps,
} from "semantic-ui-react";
import { observer } from "mobx-react-lite";
// import { useStore } from "../../stores/store";
import MentorListItem from "../MentorListItem/MentorListItem";
// import { PAGE_LIMIT } from "../../constants";
// import usePagination from "../../hooks/usePagination";
// import useQueryParams from "../../hooks/useQueryParams";
import AleksandarAndjelkovic from '../../assets/aleksandar-andjelkovic.png';
import MilanVasic from '../../assets/milan-vasic.png';
import IgorDjurovic from '../../assets/igor-djurovic.png';
import NemanjaKuzmic from '../../assets/nemanja-kuzmic.png';
import AleksandarStavric from '../../assets/aleksandar-stavric.png';
import NatasaBodganovic from '../../assets/natasa-bogdanovic.png';
import SlobodanZivkovic from '../../assets/slobodan-zivkovic.png';
import StefanTosic from '../../assets/stefan-tosic.png';
// import MentorExampleImage2 from '../../assets/mentor-example-2.png';
// import MentorExampleImage3 from '../../assets/mentor-example-3.png';
// import MentorExampleImage4 from '../../assets/mentor-example-4.png';
// import MentorExampleImage5 from '../../assets/mentor-example-5.png';
// import MentorExampleImage6 from '../../assets/mentor-example-6.png';

import "./MentorList.scss";

export const exampleMentors = [
  {
    id: '0',
    displayName:"Aleksandar Anđelković",
    bio: `Želiš senior softverskog inženjera kao svog ličnog mentora za C#, najtraženiji programski jezik na tržištu u Srbiji?
    
    Uz moju pomoć ćeš kroz praktične projekte stići do zavidnog nivoa bilo da si apsolutni početnik ili već imaš nekog predznanja.
    
    Zašto ja? 
    
    Opsednut sam najnovijim tehnologijama I uređajima iz čega proizilazi moj konstantan napredak i veštine koje su u koraku sa vremenom. Mentorstvo drugih me ispunjava i doprinosi mom ličnom razvoju. :)
    
    Ukratko priča o meni i mojim vrednostima. Ukoliko želiš da dođeš do narednog nivoa voleo bih da ti pomognem na tom putu.
    
    Klikni na dugme da zakažeš konsultaciju i krećemo sa radom! 💪`,
    image: AleksandarAndjelkovic,
    radiU: 'IceFyre Solutions',
    categories: ['Web Developer'],
    skills: ["C#",
    ".NET",
    "Entity Framework",
    "Softverska arhitektura", 
    "Softverski paterni", 
    "Monolitna arhitektura",
    "Mikroservisna arhitektura", 
    "Docker", 
    "Azure Cloud"],
  },
  {
    id: '1',
    displayName:"Milan Vasić",
    bio: `Mikroservisna arhitektura, Docker, RabbitMQ, šta je sve to?

    Samo neki od naprednijih koncepata I tehnologija kojima ćeš vladati nakon praktičnog rada sa mnom.

    Ako si imalo sličan meni, visoko motivisan sa konstantnom željom za znanjem I ličnim razvojem, odlično ćemo sarađivati! 
    
    Zahvalan sam na tome što trenutno radim u Američkoj firmi Grid Dynamics I sličan ishod želim I tebi u skoroj budućnosti.
    
    Na kraju obuke sa mnom ćeš imati samopouzdanja da realizuješ bilo koji softver koji tebi ili tvom klijentu padne na pamet.
    
    Ako već razmišljaš o odabiru mentora, biće mi čast da to budem ja.

    Odaberi paket, klikni na dugme za zakazivanje konsultacije I krećemo sa radom!
    `,
    image: MilanVasic,
    radiU: 'Grid Dynamics',
    categories: ['Web Developer'],
    skills: ['Java',
     'Spring', 
     'Mikroservisna arhitektura',
     'Monolitna arhitektura',
     'Hibernate',
     'Junit', 
     'Wiremock', 
     'Docker', 
     'MongoDB', 
     'Redis'],
  },
  {
    id: '2',
    displayName:"Igor Đurović",
    bio: `Želiš da postaneš fullstack Web developer?

    Na pravom si mestu! 

    Preneću ti sve veštine koje sam stekao tokom vremena, sa više od 8 godina iskustva i preko 50 projekata, kako za strane tako i za domaće klijente u raznim industrijama, sa fokusom na Laravel framework.

    Kroz rad na projektima sa mnom ćeš naučiti kako da postaviš arhitekturu aplikacije, primeniš softverske paterne kao I mnoge druge skill-ove kojima ćeš se istaknuti od konkurencije na intervjuu za posao.

    Ovo je bila moja priča, ukoliko želiš da dođeš do naprednog nivoa programiranja biće mi zadovoljstvo da zajedničkim snagama stignemo do tvog cilja!

    Zakaži konsultaciju I krećemo sa radom!
    `,
    image: IgorDjurovic,
    radiU: 'CEO of Madcode',
    categories: ['Web Developer'],
    skills: ['Laravel', 
    'PHP',
    'Javascript', 
    'Vue js', 
    'MySQL', 
    'Database Architecture', 
    'HTML', 
    'CSS', 
    'SCSS', 
    'Ubuntu server'
    ],
  },
  {
    id: '3',
    displayName:"Aleksandar Stavrić",
    bio: `Više si naklonjen dizajnu, da sve izgleda lepo i skladno, nasuprot kodiranju?

    Look no further, na pravom si mestu! Obučiću te da prepoznaš najsitnije detalje i dizajniraš profesionalne web i mobilne sadržaje.

    Sa 6+ godina iskustva u dizajnu skontao sam šta korisniku lepo a šta ga smara.

    Kroz praktične projekte ću ti preneti svoje veštine i oko za dizajn.

    Odaberi paket, zakaži konsultaciju i krećemo sa radom!
    `,
    image: AleksandarStavric,
    radiU: 'aleksandarstavricdesign.weebly.com',
    categories: ['UI/UX Designer'],
    skills: ['UI/UX Design', 
    'Web Design', 
    'Mobile Apps Design', 
    'Rapid Prototyping', 
    'Wireframing', 
    'Typography and layout', 
    'Figma', 
    'Adobe XD'
    ],
  },
  {
    id: '4',
    displayName:"Nemanja Kuzmić",
    bio: `Da li si se ikada pitao kako su napravili GTA 5?

    U mentorstvu sa mnom ćeš postati majstor pravljenja video igara.
    
    Ako si iole sličan meni, od malena igraš igrice, zašto ne bi svoju strast unovčio?
    Godinama sam svoju radoznalost pretvorio u C++ ekspertizu u oblasti game developmenta i želim da sa tobom podelim sve prečice koje sam naučio.
    
    Ako ti je ikada Ubisoft logo izašao pred oči pre paljenja video igrice imaćeš priliku da i ti, kao i ja, budeš zahvalan na prilici da radiš za kompanije poput ove, praveći naredni veliki hit.
    
    Voliš igrice, obožavam ih I ja kao što vidiš, kao I programiranje. Hajde da ukombinujemo ova dva i načinimo od tebe vrhunskog gameplay inženjera.
    
    Ukoliko ti ovo zvuči interesantno, zakaži konsultaciju I odaberi mene kao mentora. :)    
    `,
    image: NemanjaKuzmic,
    radiU: 'Ubisoft',
    categories: ['Gameplay Programmer'],
    skills: ['Unity',
     'C++', 
     'C#', 
     'Strukture podataka i algoritmi'
    ],
  },
  {
    id: '5',
    displayName:"Nataša Bogdanović",
    bio: `Da li si apsolutni početnik i ne znaš odakle da kreneš? Ja ću ti pomoći. :)

    Moja stručnost je Java programski jezik i imam četiri godine iskustva u radu sa njim.
    
    Uz pomoć Jave ćeš kreirati web i Android aplikacije za telefon nalik Instagramu, šta god poželiš.

    Učenje programiranja me je dovelo od osobe kojoj je uvek bila interesantna matematika ali nisam znala kako da je primenim u praksi i zaradim, do toga da iste analitičke sposobnosti primenim u programiranju i živim od nečega što volim da radim.

    Kao mentor imam preko 10 godina iskustva i osećaj koji dobijem kada moj klijent postigne svoj cilj me jako ispunjava. ^_^

    Kada si već ovde i posetio naš sajt, znaš moju priču, trebaće ti pomoć da od apsolutnog početnika dođeš do prvog visoko plaćenog posla. Zašto ne bi načinio naredni korak i angažovao mene da ti pomognem na tom putu? :)

    Radujem se našoj saradnji!      
    `,
    image: NatasaBodganovic,
    radiU: 'Intermed Solutions',
    categories: ['Web Developer'],
    skills: ['Java', 
    'Objektno orjentisano programiranje', 
    'baze podataka', 
    'SQL', 
    'Strukture podataka i algoritmi',
    'Android programiranje',
    'Bekend', 
    ],
  },
  {
    id: '6',
    displayName:"Slobodan Živković",
    bio: `Da li želiš da jednog dana postaneš fullstack tech lead?

    Uz moju pomoć i stručnost potkrepljenu sa 7+ godina iskustva ćeš biti korak bliže ka cilju.

    Promenio sam par firmi poput Atomie, Troxo-a i Dooer-a što mi je dalo mogućnost da na raznim projektima usavršim svoje veštine. 
    
    Sada je vreme da ih prenesem tebi.
    `,
    image: SlobodanZivkovic,
    radiU: 'IT Mrav',
    categories: ['Tech Lead'],
    skills: ['Python', 
    '.NET Core', 
    'React', 
    'PostgreSQL', 
    'Docker', 
    'Microservices', 
    'Node.js', 
    'React', 
    'express', 
    'GraphQL'
    ],
  },
  {
    id: '7',
    displayName:"Stefan Tošić",
    bio: `Da li želiš da jednog dana postaneš fullstack tech lead?

    Uz moju pomoć i stručnost potkrepljenu sa 7+ godina iskustva ćeš biti korak bliže ka cilju.

    Promenio sam par firmi poput Atomie, Troxo-a i Dooer-a što mi je dalo mogućnost da na raznim projektima usavršim svoje veštine. 
    
    Sada je vreme da ih prenesem tebi.
    `,
    image: StefanTosic,
    radiU: 'IT Mrav',
    categories: ['Tech Lead'],
    skills: ['Python', 
    '.NET Core', 
    'React', 
    'PostgreSQL', 
    'Docker', 
    'Microservices', 
    'Node.js', 
    'React', 
    'express', 
    'GraphQL'
    ],
  }
]


export default observer(function ConsultantList() {
  // const { mentorStore } = useStore();
  // const {
  //   mentors,
  //   fetchMentorsInProgress,
  //   fetchMentorsError,
  //   loadConsultants,
  // } = mentorStore;
  // const { params, setQueryParam } =
  //   useQueryParams<{ pageNumber: string; pageSize: string }>();
  // const { pageNumber, pageSize } = params;
  // const { currentPage, totalPages, setTotalPages, setCurrentPage } =
  //   usePagination({
  //     initialPage: pageNumber ? Number.parseInt(pageNumber) : 1,
  //   });

  // useEffect(() => {
  //   setQueryParam("pageNumber", currentPage.toString(), true);
  //   setQueryParam(
  //     "pageSize",
  //     pageSize ? pageSize.toString() : PAGE_LIMIT.toString(),
  //     true
  //   );
  // }, [setQueryParam, currentPage, pageSize]);

  // const handlePageChange = (
  //   event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  //   data: PaginationProps
  // ) => {
  //   const { activePage } = data;
  //   setCurrentPage(activePage as number);
  // };

  // useEffect(() => {
  //   if (pageNumber && pageSize) {
  //     loadConsultants(
  //       Number.parseInt(pageNumber),
  //       Number.parseInt(pageSize),
  //       setTotalPages
  //     );
  //   }
  // }, [loadConsultants, pageNumber, pageSize, setTotalPages]);

  return (
    <Container fluid textAlign="center">

      <div className="mentor-list__container">
        {/* {fetchMentorsInProgress ? (
          <Loader active inline />  
        ) : fetchMentorsError ? (
          <div className="mentor-list__container__error">
            {fetchMentorsError}
          </div>
        ) :  */}
            {exampleMentors.map((mentor) => (
              <MentorListItem key={mentor.id} mentor={mentor} />
             ))
            }
      </div>

       {/* <button className="mentor-list__load">
         Load More +
       </button> */}

      {/* {!fetchMentorsError && (
        <Pagination
          activePage={pageNumber}
          onPageChange={handlePageChange}
          firstItem={null}
          lastItem={null}
          secondary
          totalPages={totalPages}
        />
      )} */}
    </Container>
  );
});
