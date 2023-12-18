export type ProjectType = {
  id: number;
  name: string;
  slug: string;
  description: string;
  headOfFullDescription: string;
  fullDescription: string;
  details: Array<{
    header: string;
    text: string;
  }>;
  img: string;
  photos: Array<{
    url: string;
    width: number;
    height: number;
    type: string;
  }>;
  servicesProvided: Array<{
    img: string;
    header: string;
    text: string;
  }>;
};

export type CarouselProjectsType = {
  id: number;
  name: string;
  slug: string;
  img: string;
};

export type MainProjectType = {
  id: number;
  name: string;
  slug: string;
  description: string;
  type: string;
  img: string;
  formatOfImg: {
    src: string;
    width: number;
    height: number;
  };
};


export type MainNewsType = {
      id: number;
      name: string;
      slug: string;
      description: string;
      fullDescription: string;
      formatOfImg: {
        src: string;
        width: 428,
        height: 428,
    },
    type: string;
};

export type NewsPageType = {
      id: number;
      img: string;
      title: string;
      slug: string;
      description: string;
      fullArticleTitle1: string;
      fullArticle1: string;
      fullArticleTitle4: string;
      fullArticle4: string;
      newsImage3: string;
      fullArticleTitle2: string;
      fullArticle2: string;
      newsImage4: string;
      fullArticleTitle3: string;
      fullArticle3: string;
      newsImage5: string;
};

export type PageType = {
  page: string;
  pageSlug: string;
};

export type ServiceType = {
  img: string;
  header: string;
  text: string;
};

export type TeamMemberType = {
  name: string;
  post: string;
  img: string;
  alt: string;
};

export type SkillType = {
  skill: string;
  count: number;
};

export type FooterLinkType = {
  array: string[];
};

export type AboutUsSectionType = {
  title: string;
  text: string;
};

export type AboutSectionType = {
  id: number;
  img: string;
  header: string;
  text: string;
};

