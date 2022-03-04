import React, { useEffect } from "react";
import {
  Container,
  Item,
  Loader,
  Pagination,
  PaginationProps,
} from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";
import MentorListItem from "../MentorListItem/MentorListItem";
import { PAGE_LIMIT } from "../../constants";
import usePagination from "../../hooks/usePagination";
import useQueryParams from "../../hooks/useQueryParams";
import AleksandarAndjelkovic from '../../assets/aleksandar-andjelkovic.png';
import MentorExampleImage2 from '../../assets/mentor-example-2.png';
import MentorExampleImage3 from '../../assets/mentor-example-3.png';
import MentorExampleImage4 from '../../assets/mentor-example-4.png';
import MentorExampleImage5 from '../../assets/mentor-example-5.png';
import MentorExampleImage6 from '../../assets/mentor-example-6.png';

import "./MentorList.scss";

export const exampleMentors = [
  {
    id: '0',
    firstAndLastName:"Aleksandar Anđelković",
    bio: `Želiš senior softverskog inženjera kao svog ličnog mentora za C#, najtraženiji programski jezik na tržištu u Srbiji?
    
    Uz moju pomoć ćeš kroz praktične projekte stići do zavidnog nivoa bilo da si apsolutni početnik ili već imaš nekog predznanja.
    
    Zašto ja? 
    
    Opsednut sam najnovijim tehnologijama I uređajima iz čega proizilazi moj konstantan napredak i veštine koje su u koraku sa vremenom. Mentorstvo drugih me ispunjava i doprinosi mom ličnom razvoju. :)
    
    Ukratko priča o meni i mojim vrednostima. Ukoliko želiš da dođeš do narednog nivoa voleo bih da ti pomognem na tom putu.
    
    Klikni na dugme da zakažeš konsultaciju i krećemo sa radom! 💪`,
    image: AleksandarAndjelkovic,
    category: 'Web Developer',
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
    image: MentorExampleImage2,
    displayName: 'Ime Prezime',
    categories: ['web developer'],
    bio: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore`,
  },
  {
    id: '2',
    image: MentorExampleImage3,
    displayName: 'Ime Prezime',
    categories: ['web developer'],
    bio: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore`,
  },
  {
    id: '3',
    image: MentorExampleImage4,
    displayName: 'Ime Prezime',
    categories: ['web developer'],
    bio: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore`,
  },
  {
    id: '4',
    image: MentorExampleImage5,
    displayName: 'Ime Prezime',
    categories: ['web developer'],
    bio: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore`,
  },
  {
    id: '4',
    image: MentorExampleImage6,
    displayName: 'Ime Prezime',
    categories: ['web developer'],
    bio: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore`,
  },
]


export default observer(function ConsultantList() {
  const { mentorStore } = useStore();
  const {
    mentors,
    fetchMentorsInProgress,
    fetchMentorsError,
    loadConsultants,
  } = mentorStore;
  const { params, setQueryParam } =
    useQueryParams<{ pageNumber: string; pageSize: string }>();
  const { pageNumber, pageSize } = params;
  const { currentPage, totalPages, setTotalPages, setCurrentPage } =
    usePagination({
      initialPage: pageNumber ? Number.parseInt(pageNumber) : 1,
    });

  useEffect(() => {
    setQueryParam("pageNumber", currentPage.toString(), true);
    setQueryParam(
      "pageSize",
      pageSize ? pageSize.toString() : PAGE_LIMIT.toString(),
      true
    );
  }, [setQueryParam, currentPage, pageSize]);

  const handlePageChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: PaginationProps
  ) => {
    const { activePage } = data;
    setCurrentPage(activePage as number);
  };

  useEffect(() => {
    if (pageNumber && pageSize) {
      loadConsultants(
        Number.parseInt(pageNumber),
        Number.parseInt(pageSize),
        setTotalPages
      );
    }
  }, [loadConsultants, pageNumber, pageSize, setTotalPages]);

  console.log('mentors', mentors);

  return (
    <Container fluid textAlign="center">

      <div className="mentor-list__container">
        {fetchMentorsInProgress ? (
          <Loader active inline />  
        ) : fetchMentorsError ? (
          <div className="mentor-list__container__error">
            {fetchMentorsError}
          </div>
        ) : (
            exampleMentors.map((mentor) => (
              <MentorListItem key={mentor.id} mentor={mentor} />
            ))
        )}
      </div>

      <button className="mentor-list__load">
        Load More +
      </button>

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
